import * as k8s from "@kubernetes/client-node";
import { exec } from "child_process";
import { runTemplate } from "./templates/run";
import { envSchema } from "./utils/parseEnv";
import { z } from "zod";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const deploymentApi = kc.makeApiClient(k8s.AppsV1Api);

const ingressApi = kc.makeApiClient(k8s.NetworkingV1Api);

const getPodLogs = async (name: string) => {
  const { body: pod } = await k8sApi.readNamespacedPod(name, "default");
  const container = pod.spec?.containers.find(
    (container) => container.name === "step-build-and-push"
  );

  const { body: logs } = await k8sApi.readNamespacedPodLog(
    name,
    "default",
    container?.name
  );

  return logs;
};

const kubectlCreate = async (manifest: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const child = exec(`cat <<EOF | kubectl create -f -
${manifest}
EOF`);
    const stdout: string[] = [];

    child.stdout?.on("data", (data) => {
      console.log(`stdout: ${data}`);
      stdout.push(data.toString());
    });
    child.stderr?.on("data", (data) => {});
    child.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
      resolve(stdout);
    });
  });
};

export const client = Object.freeze({
  build: async ({
    repoUrl,
    imageReference,
    useNixpacks = true,
    envVariables,
  }: {
    repoUrl: string;
    imageReference: string;
    useNixpacks?: boolean;
    envVariables?: z.infer<typeof envSchema>;
  }) => {
    const stdout = await kubectlCreate(
      runTemplate({
        repoUrl,
        imageReference,
        useNixpacks,
        envVariables,
      })
    );

    return stdout
      .find((line) => line.includes("pipelinerun.tekton.dev"))
      ?.replace("created", "")
      .replace("pipelinerun.tekton.dev/", "")
      .trim();
  },
  deployService: async ({
    imageReference,
    deploymentName,
    domainName,
    envVariables,
    port,
  }: {
    imageReference: string;
    deploymentName: string;
    domainName: string;
    envVariables?: {
      name: string;
      value: string;
    }[];
    port: number;
  }) => {
    const { body: deployment } = await deploymentApi.createNamespacedDeployment(
      "default",
      {
        metadata: {
          name: deploymentName,
        },
        spec: {
          replicas: 1,
          selector: {
            matchLabels: {
              app: deploymentName,
            },
          },
          template: {
            metadata: {
              labels: {
                app: deploymentName,
              },
            },
            spec: {
              containers: [
                {
                  name: deploymentName,
                  image: imageReference,
                  env: envVariables,
                  ports: [
                    {
                      containerPort: port,
                    },
                  ],
                },
              ],
              imagePullSecrets: [
                {
                  name: "docker-pull-credentials",
                },
              ],
            },
          },
        },
      }
    );

    const { body: service } = await k8sApi.createNamespacedService("default", {
      metadata: {
        name: deploymentName,
      },
      spec: {
        selector: {
          app: deploymentName,
        },
        ports: [
          {
            port,
            targetPort: port,
          },
        ],
      },
    });

    const { body: ingress } = await ingressApi.createNamespacedIngress(
      "default",
      {
        metadata: {
          name: deploymentName,
          annotations: {
            "cert-manager.io/cluster-issuer": "letsencrypt-prod",
          },
        },
        spec: {
          tls: [
            {
              hosts: [`${domainName}.up.reix.tech`],
              secretName: `up-domain-secret`,
            },
          ],
          rules: [
            {
              host: `${domainName}.up.reix.tech`,
              http: {
                paths: [
                  {
                    path: "/",
                    pathType: "Prefix",
                    backend: {
                      service: {
                        name: deploymentName,
                        port: {
                          number: port,
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      }
    );

    return {
      deploymentName,
    };
  },
  deleteService: async (serviceName: string) => {
    await deploymentApi.deleteNamespacedDeployment(serviceName, "default");
    await k8sApi.deleteNamespacedService(serviceName, "default");
    await ingressApi.deleteNamespacedIngress(serviceName, "default");
  },
  getServiceStatus: async (serviceName: string) => {
    const { body } = await deploymentApi.readNamespacedDeploymentStatus(
      serviceName,
      "default"
    );
    return body.status?.readyReplicas === body.status?.replicas;
  },
  logs: async (pipelineName: string) => {
    const podName = `${pipelineName}-build-push-pod`;
    try {
      const logs = await getPodLogs(podName);
      return logs;
    } catch (e) {
      return "";
    }
  },
  getServiceLogs: async (deploymentName: string) => {
    const { body: pods } = await k8sApi.listNamespacedPod(
      "default",
      undefined,
      undefined,
      undefined,
      undefined,
      `app=${deploymentName}`
    );

    const podName = pods.items[0].metadata?.name;

    if (!podName) {
      return "";
    }

    try {
      const { body: logs } = await k8sApi.readNamespacedPodLog(
        podName,
        "default"
      );
      return logs;
    } catch (e) {
      return "";
    }
  },
});
