import { runTemplate } from "./run";
import * as fs from "fs";

fs.writeFileSync(
  "./template.yaml",
  runTemplate({
    repoUrl: "https://github.com",
    imageReference: "test",
    useNixpacks: true,
    envVariables: [
      {
        name: "MARIO",
        value: "LUIGI",
      },
      {
        name: "MARIO2",
        value: "LUIGI2",
      },
    ],
  })
);
