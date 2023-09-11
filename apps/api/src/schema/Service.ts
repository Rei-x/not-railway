import { builder } from "@api/builder";
import { client } from "@api/client";
import { prisma } from "@api/db";
import { generateName } from "@api/utils/generateName";
import { envSchema, parseEnv } from "@api/utils/parseEnv";
import invariant from "tiny-invariant";

builder.prismaObject("Service", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    deployments: t.relation("Deployment"),
    subdomain: t.exposeString("subdomain", {
      nullable: false,
    }),
    githubRepoUrl: t.exposeString("githubRepoUrl", {
      nullable: true,
    }),
    dockerImageUrl: t.exposeString("dockerImageUrl", {
      nullable: true,
    }),
    envVars: t.field({
      type: [EnvVar],
      resolve: (root) => {
        return envSchema.parse(JSON.parse(root.envVars));
      },
    }),
    builder: t.field({
      type: Buildpacks,
      resolve: (root) => {
        return root.builder as never;
      },
    }),
    port: t.exposeInt("port"),
    status: t.string({
      resolve: async (root) => {
        try {
          if (root.deploymentName === null) {
            return "Unknown";
          }

          const isRunning = await client.getServiceStatus(root.deploymentName);

          return isRunning ? "Running" : "Deploying";
        } catch (e) {
          return "Unknown";
        }
      },
    }),
  }),
});

const EnvVar = builder.simpleObject("EnvVar", {
  fields: (t) => ({
    name: t.string(),
    value: t.string(),
  }),
});

const Buildpacks = builder.enumType("Buildpacks", {
  values: ["nixpacks", "docker"],
});

const ServiceCreate = builder.inputType("ServiceCreate", {
  fields: (t) => ({
    githubRepoUrl: t.string({
      required: true,
      validate: {
        url: true,
      },
    }),
    name: t.string({
      required: false,
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
    envVars: t.string({
      validate: [
        (env) => {
          return envSchema.safeParse(parseEnv(env)).success;
        },
        "Invalid env vars",
      ],
    }),
    builder: t.field({
      type: Buildpacks,
      defaultValue: "nixpacks",
      required: true,
    }),
  }),
});

const ServiceUpdate = builder.prismaUpdate("Service", {
  fields: (t) => ({
    name: t.string({
      required: false,
    }),
    builder: t.field({
      required: false,
      type: Buildpacks,
    }),
    envVars: t.string({
      required: false,
      validate: [
        (env) => {
          return envSchema.safeParse(parseEnv(env)).success;
        },
        "Invalid env vars",
      ],
    }),
    domain: t.string({
      required: false,
      validate: {
        minLength: 1,
        maxLength: 63,
      },
    }),
    githubRepoUrl: t.string({
      required: false,
      validate: {
        url: true,
      },
    }),
    port: t.int({
      required: false,
      validate: {
        positive: true,
        min: 80,
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

      const envVariables = args.input.envVars
        ? parseEnv(args.input.envVars)
        : [];

      const generatedName = generateName();
      const service = await prisma.service.create({
        ...query,
        data: {
          ...args.input,
          name:
            typeof args.input.name === "string"
              ? args.input.name
              : generatedName,
          subdomain: generatedName,
          envVars: JSON.stringify(envVariables),
        },
      });

      const imageReference = `ghcr.io/rei-x/not-railway/${generatedName}:latest`;

      const pipelineName = await client.build({
        imageReference,
        repoUrl,
        envVariables,
      });

      invariant(pipelineName);

      await prisma.deployment.create({
        data: {
          serviceId: service.id,
          buildStatus: "Starting",
          pipelineName,
          dockerImageUrl: imageReference,
        },
      });

      return service;
    },
  }),
  redeployService: t.prismaField({
    type: "Service",
    args: {
      id: t.arg.int({
        required: true,
      }),
    },
    resolve: async (query, root, args) => {
      const oldService = await prisma.service.findUniqueOrThrow({
        where: {
          id: args.id,
        },
      });

      invariant(oldService.githubRepoUrl);

      const imageReference = `ghcr.io/rei-x/not-railway/${oldService.subdomain}:latest`;

      const pipelineName = await client.build({
        imageReference,
        repoUrl: oldService.githubRepoUrl,
        useNixpacks: oldService.builder === "nixpacks",
        envVariables: envSchema.parse(JSON.stringify(oldService.envVars)),
      });

      invariant(pipelineName);

      await prisma.deployment.create({
        data: {
          serviceId: oldService.id,
          buildStatus: "Starting",
          pipelineName,
          dockerImageUrl: imageReference,
        },
      });

      const service = await prisma.service.findUniqueOrThrow({
        ...query,
        where: {
          id: args.id,
        },
      });

      return service;
    },
  }),
  updateService: t.prismaField({
    type: "Service",
    args: {
      id: t.arg.int({
        required: true,
      }),
      input: t.arg({
        type: ServiceUpdate,
        required: true,
      }),
    },
    resolve: async (query, root, args) => {
      const data = args.input;

      const service = await prisma.service.update({
        ...query,
        where: {
          id: args.id,
        },
        data: {
          ...data,
          envVars:
            typeof data.envVars === "string"
              ? JSON.stringify(parseEnv(data.envVars))
              : undefined,
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
      const { deploymentName } = await prisma.service.findUniqueOrThrow({
        select: {
          deploymentName: true,
        },
        where: {
          id: args.id,
        },
      });

      if (deploymentName) {
        try {
          await client.deleteService(deploymentName);
        } catch (e) {
          console.error(e);
        }
      }

      return prisma.service.delete({
        ...query,
        where: {
          id: args.id,
        },
      });
    },
  }),
}));
