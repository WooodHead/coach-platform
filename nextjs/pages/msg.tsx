import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { Layout } from "../src/components/layout";

function MsgPage() {
  const router = useRouter();
  const msg = router.query.msg;

  return (
    <Layout disabled={true}>
      <div className="msg-wrap">
        <div>{msg}</div>
        <a className="button" href="/">
          Continue
        </a>
        <style jsx>{`
          .msg-wrap {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default MsgPage as NextPage;
