export type HasuraClaims = {
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": Array<string>;
    "x-hasura-default-role": string;
    "x-hasura-org-id": string;
  };
};

export function mapClaims(obj: HasuraClaims) {
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
