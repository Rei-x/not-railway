import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        {
          "named-operations-object": {
            useConsts: true,
          },
        },
      ],
      config: {
        flattenGeneratedTypes: true,
        useConsts: true,
        useTypeImports: true,
        flattenGeneratedTypesIncludeFragments: true,
        scalars: {
          Date: "string",
          JSON: "Record<string, any>",
        },
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
