import { addDays } from "date-fns";
import jwt from "jsonwebtoken";
import { intersection } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken, JWT } from "next-auth/jwt";
import { hasura } from "../../src/lib/hasura";
import { HasuraClaims, mapClaims } from "../../src/lib/map-claims";
import { jwtSecret } from "../../src/srv-config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<undefined> {
  if (req.method !== "GET") {
    res.status(403).json({ error: "Must be GET request" });
    return;
  }
  const token = (await getToken({
    req,
    secret: jwtSecret,
  })) as JWT & HasuraClaims;

  if (!token) {
    res.status(403).json({ error: "Authorization bearer token is invalid" });
    return;
  }

  const mtoken = mapClaims(token);

  if (!intersection(["admin", "manager"], mtoken.roles).length || !mtoken.org) {
    res.status(403).json({ error: "No permission to create an invitation" });
    return;
  }

  const result = await hasura({
    query: `
      mutation MyMutation(
        $data: jsonb!
        $type: String!
        $expire: timestamp!
      ) {
        insert_url_token_one(
          object: { data: $data, expire: $expire, type: $type }
        ) {
          data
          expire
          id
          type
        }
      }
    `,
    variables: {
      type: "invite-org",
      expire: addDays(new Date(), 7),
      data: { org_id: mtoken.org, src_user_id: token.sub },
    },
  });

  res.status(200).json({ token: result.data.insert_url_token_one.id });
  return;
}
