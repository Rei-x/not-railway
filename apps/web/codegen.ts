import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        avoidOptionals: true,
        flattenGeneratedTypes: true,
        useTypeImports: true,
        flattenGeneratedTypesIncludeFragments: true,
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
