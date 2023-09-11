import bodyParser from "body-parser";
import { schema } from "./schema";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { webhookHandler } from "./endpoints/webhook";
import { createYoga } from "graphql-yoga";

const app = express();

const yoga = createYoga({
  schema,
});

app.use(cors());
app.use(bodyParser.json());

const PORT = 4000;
app.use(yoga.graphqlEndpoint, yoga);
app.post("/webhook", webhookHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
