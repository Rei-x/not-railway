import { createServer } from "node:http";
import bodyParser from "body-parser";
import { schema } from "./schema";
import { useServer } from "graphql-ws/lib/use/ws";
import cors from "cors";
import "dotenv/config";
import { WebSocketServer } from "ws";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { Context, createContext, defaultContext } from "./server/context";
import { ApolloServer } from "@apollo/server";
import express from "express";
import { webhookHandler } from "./endpoints/webhook";

const app = express();
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/subscriptions",
});

const serverCleanup = useServer(
  {
    schema,
    context: () => defaultContext,
  },
  wsServer
);

const server = new ApolloServer<Context>({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

app.use(bodyParser.json());

const PORT = 4000;

app.post("/webhook", webhookHandler);

const main = async () => {
  await server.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    expressMiddleware(server, {
      context: createContext,
    })
  );

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
};

main();
