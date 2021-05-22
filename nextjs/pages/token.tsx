import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import React, { FC, useEffect, useState } from "react";

import { Layout } from "../src/components/layout";

function SettingsPage() {
  const [session] = useSession();
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const [result, setResultData] = useState(null);
  const token = router.query.t;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      setStatus(result.status === 200);
      setResultData(await result.json());
    };
    if (session) {
      fetchData();
    }
  }, [token, session]);

  if (!session) {
    return (
      <div>
        <button
          onClick={() =>
            signIn(undefined, { callbackUrl: window.location.href })
          }
        >
          Log In / Sign up
        </button>
      </div>
    );
  }
  return (
    <Layout>
      <>
        {result && (
          <div className={`box ${!status ? "err" : ""}`}>
            <span>{result.msg}</span>
          </div>
        )}
        <style jsx>{`
          .box {
            width: border-box;
            padding: 3rem;
            background-color: var(--color-green-2);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: var(--box-border-radius);
            flex-direction: column;
            gap: 1rem;
          }
          .box.err {
            background-color: var(--color-red-2);
          }
        `}</style>
      </>
    </Layout>
  );
}

export default SettingsPage as FC<void>;
