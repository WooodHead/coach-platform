import { createClient, Provider as QLProvider } from "urql";
import { useSession } from "next-auth/client";
import { graphqlUrl } from "../config";
import { FC } from "react";

export const GraphQLProvider: FC<{ children?: JSX.Element }> = ({
  children,
}) => {
  const [session] = useSession();

  const client = createClient({
    url: graphqlUrl,
    fetchOptions: () => {
      return {
        headers: session
          ? { Authorization: `Bearer ${session.accessToken}` }
          : {},
      };
    },
  });

  return <QLProvider value={client}>{children}</QLProvider>;
};
