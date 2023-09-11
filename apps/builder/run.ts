import { execSync } from "child_process";
import * as fs from "fs";

const firstArg = process.argv.at(2);
const workingDir = process.argv.at(3);

const main = async () => {
  const env =
    typeof firstArg === "string" && firstArg.trim().length > 0
      ? firstArg
          .trim()
          .split(" ")
          .map((line) => "--env " + line.trim())
          .join(" ")
      : "";

  const out = execSync(`nixpacks plan ${env} ${workingDir}`);

  const jsonOutput = out.toString();

  const allEnvVariables = JSON.parse(jsonOutput).variables;

  execSync(`nixpacks build ${env} -o ${workingDir} ${workingDir}`);

  const dockerfile = fs
    .readFileSync(`${workingDir}/.nixpacks/Dockerfile`)
    .toString();

  const newDockerfile = dockerfile.split("\n").map((line) => {
    if (line.startsWith("ARG")) {
      return "";
    }

    if (line.startsWith("ENV")) {
      let newLine = line;

      Object.entries(allEnvVariables).forEach(([name, value]) => {
        newLine = newLine.replace(`$${name}`, value as string);
      });

      return newLine;
    }

    return line;
  });

  fs.writeFileSync(
    `${workingDir}/.nixpacks/Dockerfile`,
    newDockerfile.join("\n")
  );
};

main();
