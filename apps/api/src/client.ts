import * as k8s from "@kubernetes/client-node";
import { exec } from "child_process";
import { runTemplate } from "./templates/run";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const deploymentApi = kc.makeApiClient(k8s.AppsV1Api);
const client2 = k8s.KubernetesObjectApi.makeApiClient(kc);

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
  listNamespaces: async () => {
    const { body } = await k8sApi.listNamespace();
    return body.items
      .map((item) => item.metadata?.name)
      .filter((item): item is string => !!item);
  },
  build: async ({
    repoUrl,
    imageReference,
    useNixpacks = true,
  }: {
    repoUrl: string;
    imageReference: string;
    useNixpacks?: boolean;
  }) => {
    const stdout = await kubectlCreate(
      runTemplate({
        repoUrl,
        imageReference,
        useNixpacks,
      })
    );

    return stdout
      .find((line) => line.includes("pipelinerun.tekton.dev"))
      ?.replace("created", "")
      .replace("pipelinerun.tekton.dev/", "")
      .trim();
  },
  deploy: async ({
    imageReference,
    deploymentName,
    port,
  }: {
    imageReference: string;
    deploymentName: string;
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

    // create ingress
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
              hosts: [`${deploymentName}.up.reix.tech`],
              secretName: `up-domain-secret`,
            },
          ],
          rules: [
            {
              host: `${deploymentName}.up.reix.tech`,
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
  getDeployments: async () => {
    const { body } = await deploymentApi.listNamespacedDeployment("default");
    return body.items
      .map((item) => item.metadata?.name)
      .filter((item): item is string => !!item);
  },
  deleteDeployment: async (deploymentName: string) => {
    await deploymentApi.deleteNamespacedDeployment(deploymentName, "default");
    await k8sApi.deleteNamespacedService(deploymentName, "default");
    await ingressApi.deleteNamespacedIngress(deploymentName, "default");
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
});
