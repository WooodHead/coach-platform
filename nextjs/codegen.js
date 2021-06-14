/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");
dotenv.config({ path: "../variables.env" });

module.exports = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8081/v1/graphql": {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.graphql",
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./pages/**/*.graphql",
  ],
  generates: {
    "./src/generated-graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-document-nodes",
        "urql-introspection",
        "typescript-urql",
      ],
      config: {
        withHooks: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};
