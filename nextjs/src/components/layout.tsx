import { signIn, signOut, useSession } from "next-auth/client";
import { AppProps } from "next/app";
import { FC } from "react";
//import "../styles.css";

export const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="page-wrap">
      <TopNav />
      <SideNav />
      <main>{children}</main>
      <style jsx scoped>{`
        .page-wrap {
          margin: 2rem 6rem;
          gap: 1rem;
          display: grid;
          justify-items: stretch;
          justify-content: stretch;
          grid-template-columns: 15rem auto;
          grid-template-rows: auto auto;
          grid-template-areas:
            "header header"
            "sidebar content";
        }

        @media only screen and (max-width: 900px) {
          .page-wrap {
            margin: 2rem 4rem;
            grid-template-columns: auto;
            grid-template-areas:
              "header"
              "sidebar"
              "content";
          }
        }
        @media only screen and (max-width: 600px) {
          .page-wrap {
            margin: 2rem 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const TopNav: FC = () => {
  const [session] = useSession();
  return (
    <nav className="top-nav">
      <ul className="nav-list">
        <li>Coach Platform</li>
        {!session && <button onClick={(e) => signIn()}>Login</button>}
        {session && <button onClick={(e) => signOut()}>Logout</button>}
      </ul>
      <style jsx scoped>{`
        .top-nav {
          grid-area: header;
        }
        .nav-list {
          display: flex;
          list-style: none;
          gap: 1rem;
        }
      `}</style>
    </nav>
  );
};

const SideNav: FC = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li>Students</li>
        <li>Lessons</li>
      </ul>
      <style jsx scoped>{`
        .side-nav {
          grid-area: sidebar;
        }
      `}</style>
    </nav>
  );
};
