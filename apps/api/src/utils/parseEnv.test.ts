import { expect, it } from "vitest";
import { parseEnv } from "./parseEnv";

it("parses env", () => {
  expect(
    parseEnv(`
  MY_VAR=hello
  # this is a comment
  MY_VAR2=world
  `)
  ).toEqual([
    { name: "MY_VAR", value: "hello" },
    { name: "MY_VAR2", value: "world" },
  ]);
});

it("empty env", () => {
  expect(parseEnv("")).toEqual([]);
});
