export function mapClaims(obj) {
  if (!obj) {
    return undefined;
  }
  const hasura = obj["https://hasura.io/jwt/claims"];
  return {
    ...obj,
    roles: hasura?.["x-hasura-allowed-roles"],
    role: hasura?.["x-hasura-default-role"],
    org: hasura?.["x-hasura-org-id"],
  };
}
