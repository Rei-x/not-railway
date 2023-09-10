import { builder } from "./builder";
import "./schema/Project";
import "./schema/Service";
import "./schema/Deployment";

builder.queryType();
builder.mutationType();

export const schema = builder.toSchema();
