import { K8sClient } from "./client";
import "dotenv/config";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const client = new K8sClient({
  TOKEN: process.env.TOKEN,
  BASE: process.env.CLUSTER_URL,
});

const main = async () => {
  const data = await client.tektonDevV1.createTektonDevV1NamespacedTask({
    namespace: "default",
    body: {},
  });

  console.log(JSON.stringify(data, null, 2));
};

void main();
