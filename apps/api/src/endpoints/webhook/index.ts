import { prisma, publishUpdatedById } from "@api/db";
import * as fs from "fs";
import { webhookSchema } from "./webhookSchema";
import { RequestHandler } from "express";
import { client } from "@api/client";
import invariant from "tiny-invariant";

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
      const { id } = await prisma.deployment.update({
        select: {
          id: true,
        },
        where: {
          pipelineName,
        },
        data: {
          status,
        },
      });
      publishUpdatedById({ model: "Deployment", id });
    } catch (e) {
      console.log("deployment doesnt exist");
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
        await client.deleteDeployment(deployment.service.name);
      } catch (e) {}

      await prisma.deployment.updateMany({
        where: {
          serviceId: deployment.serviceId,
        },
        data: {
          isActive: false,
        },
      });

      await client.deploy({
        deploymentName: deployment.service.name,
        imageReference: deployment.dockerImageUrl,
        port: deployment.service.port,
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

      publishUpdatedById({ model: "Deployment", id });
    }
  } else {
  }

  res.status(200).send("ok");
};
