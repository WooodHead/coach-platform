import { responsePathAsArray, Token } from "graphql";
import jwt from "jsonwebtoken";
import { intersection } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken, JWT } from "next-auth/jwt";
import { resolveHref } from "next/dist/next-server/lib/router/router";
import { hasura } from "../../src/lib/hasura";
import { HasuraClaims, mapClaims } from "../../src/lib/map-claims";
import { jwtSecret } from "../../src/srv-config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<undefined> {
  const userToken = mapClaims(
    (await getToken({ req, secret: jwtSecret })) as JWT & HasuraClaims
  );
  if (!userToken) {
    res.status(403).json({ error: "Not logged in" });
    return;
  }

  const tokenId = req.query.t;
  if (!tokenId) {
    res.status(400).json({ error: "Token not provided" });
    return;
  }

  const resu = await hasura({
    query: `
      query($id: uuid!) {
        url_token_by_pk(id: $id) {
          data
          expire
          id
          type
        }
      }
    `,
    variables: { id: tokenId },
  });

  const tokenObj = resu?.data?.url_token_by_pk;

  if (!tokenObj) {
    res.status(400).json({ error: "Token invalid" });
    return;
  }

  const { msg, success } = await commands[tokenObj.type](
    req,
    res,
    userToken,
    tokenObj
  );

  res.redirect(
    `/msg?msg=${encodeURIComponent(msg)}&type=${success ? "success" : "warn"}`
  );
}

type TokenHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
  userToken: JWT & HasuraClaims,
  queryToken: {
    id: string;
    expire: string;
    type: string;
    data: Record<string, any>;
  }
) => Promise<{ msg: string; success: boolean }>;

const inviteOrg: TokenHandler = async (req, res, userToken, queryToken) => {
  const userId = userToken.sub;
  const orgId = queryToken.data.org_id;
  const srcUser = queryToken.data.src_user_id;

  console.log(
    `Org invitation: user ${userId} got invited to ${orgId} by ${srcUser}`
  );

  if (userToken.org) {
    return {
      success: false,
      msg: "You are already in an organisation",
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
    success: true,
    msg:
      "Successfully invited to organisation " +
      userResult.data.update_user_by_pk.organisation.name,
  };
};

const commands: Record<string, TokenHandler> = {
  "invite-org": inviteOrg,
};
