import { signIn, signOut, useSession } from "next-auth/client";
import { AppProps } from "next/app";
import Link from "next/link";
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
          --wrap-margin-y: 2rem;
          --wrap-margin-x: 6rem;
          margin: var(--wrap-margin-y) var(--wrap-margin-x);
          gap: 1rem;
          display: grid;
          justify-items: stretch;
          justify-content: stretch;
          grid-template-columns: 15rem auto;
          grid-template-rows: 5rem auto;
          grid-template-areas:
            "header header"
            "sidebar content";
        }

        @media only screen and (max-width: 900px) {
          .page-wrap {
            --wrap-margin-x: 4rem;
            grid-template-columns: auto;
            grid-template-areas:
              "header"
              "sidebar"
              "content";
          }
        }
        @media only screen and (max-width: 600px) {
          .page-wrap {
            --wrap-margin-x: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

const TopNav: FC = () => {
  const [session] = useSession();
  return (
    <nav className="top-nav box">
      <ul className="nav-list">
        <li>
          <h1>Coach Platform</h1>
        </li>
        {!session && (
          <li>
            <button onClick={(e) => signIn()}>Login</button>
          </li>
        )}
        {session && (
          <li>
            <button onClick={(e) => signOut()}>Logout</button>
          </li>
        )}
      </ul>
      <style jsx scoped>{`
        .top-nav {
          grid-area: header;
        }
        .nav-list {
          display: flex;
          list-style: none;
          gap: 1rem;
          align-items: center;
          height: 100%;
          margin: 0px;
        }
        .nav-list h1 {
          margin: 0px;
        }
      `}</style>
    </nav>
  );
};

const SideNav: FC = () => {
  return (
    <nav className="side-nav box">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/student">
            <a>Students</a>
          </Link>
        </li>
        <li>
          <Link href="/lesson">
            <a>Lessons</a>
          </Link>
        </li>
        <li>
          <Link href="/lesson/template">
            <a>Templates</a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </li>
      </ul>
      <style jsx scoped>{`
        .side-nav {
          grid-area: sidebar;
        }
      `}</style>
    </nav>
  );
};
