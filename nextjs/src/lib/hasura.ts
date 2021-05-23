export async function hasura({ query, variables }): Promise<{ data: any }> {
  return await fetch("http://coach-platform-hasura:8080/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "X-Hasura-Admin-Secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    },
  }).then((d) => d.json());
}
