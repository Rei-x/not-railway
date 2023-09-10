import { builder } from "@api/builder";
import { prisma } from "@api/db";
import { generateName } from "@api/utils/generateName";

builder.mutationFields((t) => ({
  createProject: t.prismaField({
    type: "Project",
    args: {
      name: t.arg.string(),
    },
    resolve: (query, root, args) => {
      return prisma.project.create({
        ...query,
        data: {
          name: args.name ?? generateName(),
        },
      });
    },
  }),
}));

builder.queryFields((t) => ({
  projects: t.prismaField({
    type: ["Project"],
    resolve: (query) => {
      return prisma.project.findMany({
        ...query,
      });
    },
  }),
}));

builder.prismaObject("Project", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    services: t.relation("Service"),
    servicesCount: t.relationCount("Service"),
  }),
});
