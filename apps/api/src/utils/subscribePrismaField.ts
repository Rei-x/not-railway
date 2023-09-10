import { getChannelForField } from "@api/db";
import { Prisma } from "@prisma/client";

export const subscribePrismaField =
  (modelName: Prisma.ModelName) =>
  (
    subscriptions: {
      register: (channel: string) => void;
    },
    root: unknown,
    args: unknown,
    ctx: unknown,
    info: unknown
  ) => {
    const channel = getChannelForField({
      model: modelName,
    });

    console.log("subscribing to", channel);

    subscriptions.register(channel);
  };
