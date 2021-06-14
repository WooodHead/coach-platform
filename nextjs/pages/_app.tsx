import App, { AppContext, AppProps } from "next/app";
import { getSession, Provider as AuthProvider } from "next-auth/client";
import { GraphQLProvider } from "../src/components/graphql-provider";
import "../src/styles.css";
import { Session } from "next-auth";
import { NotificationContextProvider } from "../src/hooks/notification-hook";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <GraphQLProvider>
        <NotificationContextProvider>
          <Component {...pageProps} />
        </NotificationContextProvider>
      </GraphQLProvider>
    </AuthProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const session: Session & { auth?: { org: string } } = await getSession(
    appContext.ctx
  );

  const newRoute = routing(appContext.router.route, session);
  if (newRoute && newRoute !== appContext.router.route) {
    if (appContext.ctx.res) {
      appContext.ctx.res.writeHead(307, { Location: newRoute });
      appContext.ctx.res.end();
    } else {
      window.location.href = newRoute;
    }
  }

  return {
    ...App.getInitialProps(appContext),
    pageProps: {
      session,
    },
  };
};

const routing = (
  route: string,
  session: Session & { auth?: { org: string } }
) => {
  if (route === "/msg") {
    return;
  } else if (!session) {
    return "/api/auth/signin";
  } else if (!session.auth?.org) {
    return "/no-org";
  } else if (session?.auth?.org && route === "/no-org") {
    return "/";
  }
};
