import { getChannelForObject } from "@api/db";
import { Prisma } from "@prisma/client";

export const subscribePrismaObject = (
  subscriptions: {
    register: (channel: string) => void;
  },
  args: { id: number },
  ctx: unknown,
  info: {
    parentType: {
      name: string;
    };
  }
) => {
  const channel = getChannelForObject({
    model: info.parentType.name as Prisma.ModelName,
    id: args.id,
  });

  console.log("subscribing to", channel);

  if (!channel) {
    return;
  }

  subscriptions.register(channel);
};
