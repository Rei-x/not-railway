import SchemaBuilder from "@pothos/core";
import ValidationPlugin from "@pothos/plugin-validation";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import PrismaPlugin from "@pothos/plugin-prisma";
import PrismaPluginUtils from "@pothos/plugin-prisma-utils";
import WithInputPlugin from "@pothos/plugin-with-input";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "./db";
import { DateTimeResolver, JSONResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    JSON: {
      Input: unknown;
      Output: unknown;
    };
    Date: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [
    ValidationPlugin,
    SimpleObjectsPlugin,
    PrismaPlugin,
    PrismaPluginUtils,
    WithInputPlugin,
  ],
  validationOptions: {
    // optionally customize how errors are formatted
    validationError: (zodError) => {
      // the default behavior is to just throw the zod error directly
      return zodError;
    },
  },
  prisma: {
    client: prisma,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
  },
});

builder.addScalarType("JSON", JSONResolver, {});
builder.addScalarType("Date", DateTimeResolver, {});
