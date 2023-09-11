import { builder } from "@api/builder";
import { client } from "@api/client";
import { prisma } from "@api/db";

builder.prismaObject("Deployment", {
  fields: (t) => ({
    id: t.exposeID("id"),
    pipelineName: t.exposeString("pipelineName"),
    buildStatus: t.exposeString("buildStatus"),
    isActive: t.exposeBoolean("isActive"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    service: t.relation("service"),
    logs: t.string({
      resolve: (root) => {
        return client.logs(root.pipelineName);
      },
    }),
  }),
});

builder.queryFields((t) => ({
  deployments: t.prismaField({
    type: ["Deployment"],
    args: {
      serviceId: t.arg.int({
        required: true,
      }),
    },
    resolve: (query, root, args) => {
      return prisma.deployment.findMany({
        ...query,
        where: {
          serviceId: args.serviceId,
        },
      });
    },
  }),
}));
