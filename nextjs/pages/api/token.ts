import jwt from "jsonwebtoken";
import { intersection } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { hasura } from "../../src/lib/hasura";
import { mapClaims } from "../../src/lib/map-claims";
import { jwtSecret } from "../../src/srv-config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<undefined> {
  if (req.method !== "POST") {
    res.status(403).json({ error: "Must be POST request" });
    return;
  }
  const userToken = mapClaims(await getToken({ req, secret: jwtSecret }));
  if (!userToken) {
    res.status(403).json({ error: "Authorization bearer token is invalid" });
    return;
  }

  const paramToken = req.body.token;
  if (!paramToken) {
    res.status(400).json({ error: "Token not provided in body" });
    return;
  }

  const tokenObj: any = await new Promise((resolve, reject) =>
    jwt.verify(paramToken, jwtSecret, {}, (err, valid) =>
      err ? reject(err) : resolve(valid)
    )
  );

  const { status, result } = await commands[tokenObj.cmd](
    req,
    res,
    userToken,
    tokenObj
  );

  res.status(status).json(result);
  return;
}

const commands = {
  "invite-org": inviteOrg,
};

async function inviteOrg(
  req: NextApiRequest,
  res: NextApiResponse,
  userToken,
  queryToken
) {
  const userId = userToken.sub;
  const orgId = queryToken.data.org_id;
  const srcUser = queryToken.data.src_user_id;

  console.log(
    `Org invitation: user ${userId} got invited to ${orgId} by ${srcUser}`
  );

  if (userToken.org) {
    return {
      status: 400,
      result: { msg: "you are already in an organisation" },
    };
  }

  const userResult = await hasura({
    query: `
      mutation($userId: uuid!, $orgId: uuid!) {
        update_user_by_pk(
          pk_columns: { id: $userId }
          _set: { organisation_id: $orgId }
        ) {
          organisation {
            name
          }
        }
      }
    `,
    variables: { orgId, userId },
  });

  return {
    status: 200,
    result: {
      msg:
        "Successfully invited to organisation " +
        userResult.data.update_user_by_pk.organisation.name +
        "\n plead log out and back in.",
    },
  };
}
