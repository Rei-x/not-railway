import { builder } from "@api/builder";
import { client } from "@api/client";
import { prisma } from "@api/db";
import { generateName } from "@api/utils/generateName";
import invariant from "tiny-invariant";

builder.prismaObject("Service", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    deployments: t.relation("Deployment"),
    githubRepoUrl: t.exposeString("githubRepoUrl", {
      nullable: true,
    }),
    dockerImageUrl: t.exposeString("dockerImageUrl", {
      nullable: true,
    }),
    port: t.exposeInt("port"),
  }),
});

const ServiceCreate = builder.inputType("ServiceCreate", {
  fields: (t) => ({
    githubRepoUrl: t.string({
      required: true,
      validate: {
        url: true,
      },
    }),
    projectId: t.int({
      required: true,
    }),
    port: t.int({
      required: true,
      validate: {
        positive: true,
        min: 1,
        max: 65535,
      },
    }),
  }),
});

builder.queryFields((t) => ({
  services: t.prismaField({
    type: ["Service"],
    args: {
      projectId: t.arg.int({
        required: true,
      }),
    },
    resolve: (query, root, args) => {
      return prisma.service.findMany({
        ...query,
        where: {
          projectId: args.projectId,
        },
      });
    },
  }),
  service: t.prismaField({
    type: "Service",
    args: {
      id: t.arg.int({
        required: true,
      }),
    },
    resolve: (query, root, args) => {
      return prisma.service.findUniqueOrThrow({
        ...query,
        where: {
          id: args.id,
        },
      });
    },
  }),
}));

builder.mutationFields((t) => ({
  createService: t.prismaField({
    type: "Service",
    args: {
      input: t.arg({
        type: ServiceCreate,
        required: true,
      }),
    },
    resolve: async (query, root, args) => {
      const repoUrl = args.input.githubRepoUrl;
      invariant(repoUrl);

      const service = await prisma.service.create({
        ...query,
        data: { ...args.input, name: generateName() },
      });

      const imageReference = `ghcr.io/rei-x/not-railway/${service.name}:latest`;

      const pipelineName = await client.build({
        imageReference,
        repoUrl,
      });

      invariant(pipelineName);

      await prisma.deployment.create({
        data: {
          serviceId: service.id,
          status: "Starting",
          pipelineName,
          dockerImageUrl: imageReference,
        },
      });

      return service;
    },
  }),
  deleteService: t.prismaField({
    type: "Service",
    args: {
      id: t.arg.int({
        required: true,
      }),
    },
    resolve: async (query, root, args) => {
      return prisma.service.delete({
        ...query,
        where: {
          id: args.id,
        },
      });
    },
  }),
}));
