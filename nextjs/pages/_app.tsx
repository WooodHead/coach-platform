import { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/client";
import { GraphQLProvider } from "../src/components/graphql-provider";
import { FC } from "react";
import "../src/styles.css";
import { Layout } from "../src/components/layout";
//import "../styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <GraphQLProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GraphQLProvider>
    </AuthProvider>
  );
}

export default App as FC<AppProps>;
