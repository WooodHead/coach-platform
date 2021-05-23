import { NextPage } from "next";
import { Layout } from "../src/components/layout";

function NoOrgPage() {
  return (
    <Layout disabled={true}>
      <div>
        You do not belong to an organisation yet. Please wait for someone to
        invite you.
      </div>
    </Layout>
  );
}

export default NoOrgPage as NextPage;
