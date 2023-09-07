import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const kanikoPodTemplate: k8s.V1Pod = {
  apiVersion: "v1",
  kind: "Pod",
  metadata: {
    name: "kaniko",
    namespace: "build",
  },
  spec: {
    containers: [
      {
        name: "kaniko",
        image: "gcr.io/kaniko-project/executor:latest",
        args: [
          "--dockerfile=Dockerfile",
          "--context=git://github.com/GoogleContainerTools/kaniko.git",
          "--destination=gcr.io/kaniko-project/executor:latest",
        ],
      },
    ],
    restartPolicy: "Never",
  },
};

export const client = Object.freeze({
  listNamespaces: async () => {
    const { body } = await k8sApi.listNamespace();
    return body.items
      .map((item) => item.metadata?.name)
      .filter((item): item is string => !!item);
  },
  build: async () => {
    k8sApi.createNamespacedPod("build", {});
  },
});
