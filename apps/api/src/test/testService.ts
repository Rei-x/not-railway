import { client } from "@api/client";
import * as fs from "fs";
const main = async () => {
  const status = await client.getServiceStatus("nervous-marsupial-amethyst");

  fs.writeFileSync("./status.json", JSON.stringify(status, null, 2));
};

main();
