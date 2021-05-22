import { useFormik } from "formik";
import { useSession } from "next-auth/client";
import React, { FC, useState } from "react";
import { Layout } from "../../src/components/layout";

function SettingsPage() {
  const [session] = useSession();
  const [result, setResult] = useState(null);

  async function genLink() {
    const res = await fetch("/api/invite-org", {
      headers: {
        authorization: `Bearer ${session.accessToken}`,
      },
    }).then((d) => d.json());
    setResult(res);
  }

  return (
    <Layout>
      <div>
        <div className="box">
          <h2>Generate Organisation Invite Link</h2>
          <button onClick={() => genLink()}>Generate Link</button>
          {result && (
            <div className="input-strip">
              <input
                type="text"
                value={`${window.location.protocol}//${window.location.host}/token/?t=${result.inviteToken}`}
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.protocol}//${window.location.host}/token/?t=${result.inviteToken}`
                  );
                }}
              >
                Copy
              </button>
            </div>
          )}
        </div>
        <style jsx>{`
          .box {
            display: flex;
            flex-direction: column;
            max-width: 400px;
          }
          .box textarea {
            width: 100%;
            height: 300px;
          }
          .input-strip {
            display: flex;
          }
          .input-strip input {
            flex: 1;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default SettingsPage as FC<void>;
