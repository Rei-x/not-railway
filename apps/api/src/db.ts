import { Prisma, PrismaClient } from "@prisma/client";
import { pubsub } from "./utils/pubsub";

const standardPrismaClient = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export const getChannelForField = ({ model }: { model: string }) => {
  return `db/${model}/updated`;
};

export const getChannelForObject = ({
  model,
  id,
}: {
  model: Prisma.ModelName;
  id?: number;
}) => {
  if (!id) {
    return;
  }

  return `db/${model}/updated/${id}`;
};

export const publishUpdatedById = ({
  model,
  id,
}: {
  model: Prisma.ModelName;
  id?: number;
}) => {
  if (!id) {
    return;
  }

  const channel = getChannelForObject({ model, id });

  if (!channel) {
    return;
  }

  pubsub.publish(channel, {});
};

const publishCreatedOrDeleted = ({ model }: { model: Prisma.ModelName }) => {
  pubsub.publish(getChannelForField({ model }), {});
};

export const prisma = standardPrismaClient.$extends({
  query: {
    $allModels: {
      create: ({ args, query, model }) => {
        publishCreatedOrDeleted({ model });

        return query(args);
      },
      delete: ({ args, query, model }) => {
        publishCreatedOrDeleted({ model });

        return query(args);
      },
      update: ({ args, query, model }) => {
        publishUpdatedById({ model, id: args.where.id });

        return query(args);
      },
    },
    deployment: {
      create: ({ args, query, model }) => {
        publishUpdatedById({
          model: Prisma.ModelName.Service,
          id: args.data.serviceId,
        });

        return query(args);
      },
    },
  },
});
