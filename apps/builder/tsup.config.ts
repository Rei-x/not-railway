import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["run.ts"],
  sourcemap: true,
  clean: true,
});
