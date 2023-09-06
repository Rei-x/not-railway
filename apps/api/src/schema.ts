import SchemaBuilder from "@pothos/core";
import ValidationPlugin from "@pothos/plugin-validation";
import { client } from "./client";

const builder = new SchemaBuilder({
  plugins: [ValidationPlugin],
  validationOptions: {
    // optionally customize how errors are formatted
    validationError: (zodError) => {
      // the default behavior is to just throw the zod error directly
      return zodError;
    },
  },
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: (parent) => `hello world`,
    }),
    namespaces: t.stringList({
      resolve: async () => {
        return client.listNamespaces();
      },
    }),
  }),
});

export const schema = builder.toSchema();
