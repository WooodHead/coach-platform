import NextAuth, { User } from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { hasura } from "../../../src/lib/hasura";
import { development } from "../../../src/srv-config";

const secret = process.env.JWT_SECRET;
type ExtendedUser = User & {
  id?: string;
  organisation_id?: string;
  manager?: boolean;
};

export default NextAuth({
  secret,
  session: {
    jwt: true,
    maxAge: 100 * 24 * 60 * 60, // 100 days
  },
  jwt: {
    secret,
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
      scope: "user:email",
    }),
    ...(!development
      ? []
      : [
          Providers.Credentials({
            id: "debug",
            name: "Debug-Credentials",
            credentials: {
              id: {
                label: "ID",
                type: "number",
              },
              name: {
                label: "Username",
                type: "text",
              },
            },
            async authorize(creds): Promise<User> {
              return {
                id: "1",
                email: "debug@coach-platform.com",
                ...creds,
              };
            },
          }),
        ]),
  ],
  callbacks: {
    async session(session, token: any) {
      const encodedToken = jwt.sign(token, secret, {
        algorithm: "HS256",
      });

      return {
        user: { ...session.user, image: token?.image, id: token.sub },
        auth: {
          roles:
            token["https://hasura.io/jwt/claims"]["x-hasura-allowed-roles"],
          org: token["https://hasura.io/jwt/claims"]["x-hasura-org-id"],
        },
        accessToken: encodedToken,
      };
    },
    async signIn(userInfo: ExtendedUser, account, metadata) {
      console.log(userInfo, account, metadata);

      const userToken = `${account.provider ?? account.type}:${userInfo.id}`;

      await githubGetEmail(account, userInfo);

      const { id, organisation_id, manager } = await upsertUserAccount({
        token: userToken,
        name: userInfo.name,
        data: metadata,
        email: userInfo.email,
        image: userInfo.image,
      });

      Object.assign(userInfo, { id, organisation_id, manager });

      return true;
    },
    async jwt(token, user?: ExtendedUser) {
      const isJustUserSignedIn = !!user;

      if (!isJustUserSignedIn) {
        const update = await hasura({
          query: `
            query($id: uuid!) {
              user_by_pk(id: $id) {
                id
                name
                email
                image
                manager
                organisation_id
              }
            }
          `,
          variables: {
            id: token.sub,
          },
        });

        user = update.data.user_by_pk;
      }
      const roles = ["user"];
      if (user.email === "tim.bachmann96@gmail.com") {
        roles.push("admin");
      }
      if (user.manager) {
        roles.push("manager");
      }

      const claims = {
        ...(token ?? {}),
        sub: user.id ?? token.sub,
        name: user.name,
        email: user.email,
        image: user.image,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": roles,
          "x-hasura-default-role": user.manager ? "manager" : "user",
          "x-hasura-role": user.manager ? "manager" : "user",
          "x-hasura-user-id": user.id,
          "x-hasura-org-id": user.organisation_id,
        },
      };
      return claims;
    },
  },
});

async function upsertUserAccount({
  token,
  name,
  data,
  email,
  image,
}: {
  token: string;
  name: string;
  data: Record<string, unknown>;
  email: string;
  image?: string;
}): Promise<{
  id: string;
  organisation_id?: string;
  manager?: boolean;
}> {
  const userResult = await hasura({
    query: `
      query($token: String!) {
        user_account_by_pk(user_token: $token) {
          user {
            id
            organisation_id
            manager
          }
        }
      }
    `,
    variables: { token },
  });
  const user = userResult.data?.user_account_by_pk?.user;

  if (user) {
    await hasura({
      query: `
        mutation(
          $id: uuid!
          $email: String!
          $image: String!
          $last_online: timestamptz!
          $name: String!
        ) {
          update_user_by_pk(
            pk_columns: { id: $id }
            _set: {
              email: $email
              image: $image
              last_online: $last_online
              name: $name
            }
          ) {
            id
          }
        }
      `,
      variables: { id: user.id, email, image, name, last_online: new Date() },
    });

    return user;
  } else {
    console.log("User does NOT exist");

    // user does not yet exist
    const newUser = await hasura({
      query: `
        mutation(
          $token: String!
          $name: String!
          $data: jsonb
          $email: String!
          $image: String
        ) {
          insert_user_account_one(
            object: {
              user_token: $token
              user: {
                data: { name: $name, email: $email, image: $image }
              }
              data: $data
            }
            on_conflict: { constraint: user_account_pkey, update_columns: data }
          ) {
            user_token
            user_id
          }
        }
      `,
      variables: { token, email, name, data, image },
    });
    return { id: newUser.data.insert_user_account_one.user_id };
  }
}

async function githubGetEmail(account, user) {
  if (account.provider !== "github") {
    return;
  }

  const emails = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `token ${account.accessToken}`,
    },
  }).then((res) => res.json());

  user.email = emails.find((e) => e.primary)?.email;
}
