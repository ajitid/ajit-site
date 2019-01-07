import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Link from "../components/Link";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="font-serif mb-4">There's nothing here!</h1>
    <p className="text-lg">
      Let's get <Link to="/">back to home</Link>.
    </p>
  </Layout>
);

export default NotFoundPage;
