import { prisma } from "@api/db";
import { webhookSchema } from "./webhookSchema";
import { RequestHandler } from "express";
import { client } from "@api/client";
import invariant from "tiny-invariant";
import { nanoid } from "nanoid";
import { envSchema } from "@api/utils/parseEnv";

export const webhookHandler: RequestHandler = async (req, res) => {
  const pipelineRunBody = webhookSchema.safeParse(req.body);

  if (pipelineRunBody.success) {
    const { pipelineRun } = pipelineRunBody.data;
    const pipelineName = pipelineRun.metadata.name;
    const status = pipelineRun.status.conditions.at(0)?.reason;
    console.log(`Pipeline run ${pipelineRun.metadata.name}`);
    console.log(`Status: ${pipelineRun.status.conditions.at(0)?.status}`);
    console.log(`Reason: ${pipelineRun.status.conditions.at(0)?.reason}`);
    console.log("\n");
    try {
      await prisma.deployment.update({
        where: {
          pipelineName,
        },
        data: {
          buildStatus: status,
        },
      });
    } catch (e) {
      console.log("deployment doesnt exist");

      return;
    }

    if (status === "Succeeded") {
      const deployment = await prisma.deployment.findUniqueOrThrow({
        where: {
          pipelineName,
        },
        include: {
          service: true,
        },
      });

      invariant(deployment.dockerImageUrl);

      try {
        if (deployment.service.deploymentName) {
          await client.deleteService(deployment.service.deploymentName);
        }
      } catch (e) {}

      await prisma.deployment.updateMany({
        where: {
          serviceId: deployment.serviceId,
        },
        data: {
          isActive: false,
        },
      });

      const deploymentName =
        deployment.service.deploymentName ??
        nanoid().replace("_", "").replace("-", "").toLowerCase();

      await client.deployService({
        deploymentName,
        domainName: deployment.service.subdomain,
        imageReference: deployment.dockerImageUrl,
        port: deployment.service.port,
        envVariables: envSchema.parse(JSON.parse(deployment.service.envVars)),
      });

      await prisma.service.update({
        where: {
          id: deployment.serviceId,
        },
        data: {
          deploymentName,
        },
      });

      const { id } = await prisma.deployment.update({
        select: {
          id: true,
        },
        where: {
          pipelineName,
        },
        data: {
          isActive: true,
        },
      });
    }
  }

  res.status(200).send("ok");
};
