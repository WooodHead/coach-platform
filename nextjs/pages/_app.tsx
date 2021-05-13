import { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/client";
import { GraphQLProvider } from "../src/components/graphql-provider";
import { FC } from "react";
//import "../styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <GraphQLProvider>
        <Component {...pageProps} />
      </GraphQLProvider>
    </AuthProvider>
  );
}

export default App as FC<AppProps>;
