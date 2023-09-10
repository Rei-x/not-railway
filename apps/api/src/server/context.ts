import { IncomingMessage, ServerResponse } from "node:http";
import { PubSub } from "graphql-subscriptions";
import { pubsub } from "@api/utils/pubsub";

export interface Context {
  request: IncomingMessage;
  response: ServerResponse;
  pubsub: PubSub;
}

export const defaultContext = {
  pubsub,
};

export async function createContext({
  req,
  res,
}: {
  req: IncomingMessage;
  res: ServerResponse;
}): Promise<Context> {
  return {
    ...defaultContext,
    request: req,
    response: res,
  };
}
