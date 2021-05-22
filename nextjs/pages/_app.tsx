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
import { Session } from "next-auth";
//import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <GraphQLProvider>
        <Component {...pageProps} />
      </GraphQLProvider>
    </AuthProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const session: Session & { auth?: { org: string } } = await getSession(
    appContext.ctx
  );

  if (!session) {
    appContext.ctx.res.writeHead(307, { Location: "/api/auth/signin" });
    appContext.ctx.res.end();
    return;
  }

  console.log("BASE PATH", appContext.router, session.auth.org);

  if (!session?.auth?.org && appContext.router.route !== "/no-org") {
    appContext.ctx.res.writeHead(307, { Location: "/no-org" });
    appContext.ctx.res.end();
  }

  return {
    ...App.getInitialProps(appContext),
    pageProps: {
      session,
    },
  };
};
