import App, { AppContext, AppProps } from "next/app";
import {
  CtxOrReq,
  getSession,
  Provider as AuthProvider,
} from "next-auth/client";
import { GraphQLProvider } from "../src/components/graphql-provider";
import { FC } from "react";
import "../src/styles.css";
import { Layout } from "../src/components/layout";
import app from "next/app";
//import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const session = await getSession(appContext.ctx);

  if (!session) {
    appContext.ctx.res.writeHead(307, { Location: "/api/auth/signin" });
    appContext.ctx.res.end();
    return;
  }

  return {
    ...App.getInitialProps(appContext),
    pageProps: {
      session,
    },
  };
};
