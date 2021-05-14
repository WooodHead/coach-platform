import jwt from "jsonwebtoken";
import { intersection } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { mapClaims } from "../../src/lib/map-claims";
import { jwtSecret } from "../../src/srv-config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<undefined> {
  if (req.method !== "GET") {
    res.status(403).json({ error: "Must be GET request" });
    return;
  }
  const token = await getToken({ req, secret: jwtSecret });
  if (!token) {
    res.status(403).json({ error: "Authorization bearer token is invalid" });
    return;
  }

  const mtoken = mapClaims(token);

  if (!intersection(["admin", "manager"], mtoken.roles).length || !mtoken.org) {
    res.status(403).json({ error: "No permission to create an invitation" });
    return;
  }

  const object = {
    cmd: "invite-org",
    data: {
      org_id: token["https://hasura.io/jwt/claims"]["x-hasura-org-id"],
      src_user_id: token.sub,
    },
  };

  const inviteToken = await new Promise((resolve, reject) =>
    jwt.sign(object, jwtSecret, { expiresIn: 60 * 60 * 25 }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    })
  );

  res.status(200).json({ inviteToken });
  return;
}
