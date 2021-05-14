import { useFormik } from "formik";
import { useSession } from "next-auth/client";
import React, { FC, useState } from "react";

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
    <div>
      <div className="box">
        <h2>Generate Organisation Invite Link</h2>
        <button onClick={() => genLink()}>Generate Link</button>
        {result && (
          <textarea
            value={`${window.location.protocol}//${window.location.host}/token/?t=${result.inviteToken}`}
          />
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
      `}</style>
    </div>
  );
}

export default SettingsPage as FC<void>;
