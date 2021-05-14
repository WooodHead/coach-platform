import NextAuth, { User } from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
type ExtendedUser = User & { id?: string; organisation_id?: string };

export default NextAuth({
  secret,
  session: {
    jwt: true,
    maxAge: 100 * 24 * 60 * 60, // 100 days
  },
  jwt: {
    secret,
  },
  callbacks: {
    async session(session, token: any) {
      const encodedToken = jwt.sign(token, secret, {
        algorithm: "HS256",
      });

      return { ...session, token, accessToken: encodedToken };
    },
    async signIn(userInfo: ExtendedUser, account, metadata) {
      const userToken = `${account.provider}:${account.id}`;

      await githubGetEmail(account, userInfo);

      const { id, organisation_id } = await upsertUserAccount({
        token: userToken,
        name: userInfo.name,
        data: metadata,
        email: userInfo.email,
      });

      userInfo.id = id;
      userInfo.organisation_id = organisation_id;
      return true;
    },
    async jwt(token, user: ExtendedUser) {
      const isJustUserSignedIn = !!user;

      if (isJustUserSignedIn) {
        const roles = ["user"];
        if (user.email === "tim.bachmann96@gmail.com") {
          roles.push("admin");
        }

        const claims = {
          sub: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": roles,
            "x-hasura-default-role": "user",
            "x-hasura-role": "user",
            "x-hasura-user-id": user.id,
            "x-hasura-org-id": user.organisation_id,
          },
        };

        return claims;
      }
      return token;
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
      scope: "user:email",
    }),
  ],
});

async function upsertUserAccount({
  token,
  name,
  data,
  email,
}): Promise<{ id: string; organisation_id?: string }> {
  const userResult = await hasura({
    query: `
      query($token: String!) {
        user_account_by_pk(user_token: $token) {
          user {
            id
            organisation_id
          }
        }
      }
    `,
    variables: { token },
  });
  const user = userResult.data?.user_account_by_pk?.user;

  if (user) {
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
        ) {
          insert_user_account_one(
            object: {
              user_token: $token
              user: {
                data: { name: $name, email: $email }
                on_conflict: {
                  constraint: user_pkey
                  update_columns: [name, email]
                }
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
      variables: { token, email, name, data },
    });
    console.log({ token, email, name, data });
    console.dir(newUser);
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

async function hasura({ query, variables }) {
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
