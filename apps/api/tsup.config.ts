import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/server.ts"],
  sourcemap: true,
  clean: true,
  env: {
    NODE_ENV: "production",
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
