import { signIn, signOut, useSession } from "next-auth/client";
import { AppProps } from "next/app";
import Link from "next/link";
import { FC, useState } from "react";
import { Avatar } from "./avatar";
//import "../styles.css";

export const Layout: FC<{ children: JSX.Element; disabled?: boolean }> = ({
  children,
  disabled = false,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-wrap">
      <div className="page-wrap">
        <TopNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <SideNav disabled={disabled} mobileOpen={mobileOpen} />
        <main>{children}</main>
      </div>
      <style jsx scoped>{`
        .app-wrap {
          display: flex;
          justify-content: center;
        }
        .page-wrap {
          flex: 1;
          max-width: 1320px;
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

const TopNav: FC<{
  mobileOpen: boolean;
  setMobileOpen: (boolean) => void;
}> = ({ mobileOpen, setMobileOpen }) => {
  const [session] = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="top-nav">
      <ul className="nav-list">
        <li className="burger">
          <button onClick={() => setMobileOpen(!mobileOpen)}>&#9776;</button>
          <h1>Coach</h1>
        </li>
        <li className="header">
          <h1>Coach Platform</h1>
        </li>
        <li className="spacer"></li>
        {session && (
          <>
            <li className="avatar-container">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="avatar-button"
              >
                <Avatar
                  image={session.user.image}
                  size={48}
                  name={session.user.name}
                />
              </button>
              {dropdownOpen && <AvatarDropdown />}
            </li>
          </>
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
          padding: 0px;
        }
        .nav-list li {
          height: 100%;
        }
        .spacer {
          flex: 1;
        }
        .avatar-button {
          background-color: transparent;
        }
        .avatar-container {
          position: relative;
        }
        .burger {
          display: none;
          align-items: center;
          gap: 1rem;
        }
        .burger button {
          width: 33px;
          height: 33px;
        }
        @media only screen and (max-width: 900px) {
          .header {
            display: none;
          }
          .burger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

const AvatarDropdown: FC = () => {
  return (
    <div className="dropdown">
      <ul className="items-list">
        <li>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </li>
        <li>
          <button>Discord</button>
        </li>
        <li>
          <button onClick={() => signOut()}>Log Out</button>
        </li>
      </ul>
      <style jsx>{`
        .dropdown {
          position: absolute;
          width: 200px;
          right: 0px;
          padding: 1rem;
          border: black 1px solid;
          border-radius: var(--box-border-radius);
        }
        .items-list {
          padding-left: 0px;
        }
        .items-list li {
          list-style: none;
        }
        .items-list li:hover {
          background-color: var(--color-highlight);
        }
        .items-list li button {
          width: 100%;
          padding: 0px;
          text-align: left;
          background-color: transparent;
        }
        .items-list li a {
          width: 100%;
          padding: 0px;
          text-align: left;
          text-decoration: none;
          color: var(--color-text);
          margin: 3.2px;
          display: block;
        }
      `}</style>
    </div>
  );
};

const SideNav: FC<{ mobileOpen: boolean; disabled: boolean }> = ({
  mobileOpen,
  disabled,
}) => {
  if (disabled) {
    return <nav className="side-nav"></nav>;
  }

  return (
    <nav className={`side-nav ${mobileOpen ? "active" : ""}`}>
      <ul className="nav-list">
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
        .nav-list {
          list-style: none;
          font-weight: bold;
          padding: 0px;
        }
        .nav-list li {
          margin-bottom: 10px;
          padding: 4px;
          background-color: var(--color-foreground);
        }
        .nav-list li:hover {
          background-color: var(--color-highlight);
        }
        .nav-list li a {
          display: block;
          color: var(--color-text);
          text-decoration: none;
        }
        @media only screen and (max-width: 900px) {
          .side-nav {
            display: none;
          }
          .side-nav.active {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};
