import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const client = Object.freeze({
  listNamespaces: async () => {
    const { body } = await k8sApi.listNamespace();
    return body.items
      .map((item) => item.metadata?.name)
      .filter((item): item is string => !!item);
  },
});
