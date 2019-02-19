import Link from "next/link";
import * as React from "react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Landing Page | Code Ponder">
      <h1>Code Ponder 👋</h1>
      <h4>Marketplace For Code Reviews</h4>
      <h2>How it works</h2>
      <ol>
        <li>Coder requests a code review</li>
        <li>Expert offer assistance</li>
        <li>Coder picks favorite expert</li>
        <li>Selected expert reviews request to review the code on Github</li>
      </ol>

      <p>
        <Link href="/register">
          <a>
            <Button>Register as a Coder</Button>
          </a>
        </Link>
      </p>

      <p>
        <Link href="/register">
          <a>
            <Button>Register as a Expert</Button>
          </a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
