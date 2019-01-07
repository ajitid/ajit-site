import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import css from "../css/index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`blog`, `portfolio`, `ajitid`, `github`, `Ajit Singh`]}
    />
    <div>
      <h1
        className={`${
          css.hero
        } text-5xl inline-block py-2 my-8 tracking-tight font-serif`}
      >
        Ajit Singh
      </h1>
      <div className="leading-tight mt-6 text-lg">
        <p>Software Developer</p>
        <p>Currently a Computer Science student</p>
        <p>Loves Python and JavaScript</p>
        <p>Open to projects and opportunities</p>
      </div>
      <div className="leading-loose mt-8 text-lg">
        <p>
          Feel free to drop an email on{" "}
          <a
            href="mailto:ajit.singh2905@gmail.com"
            className="link link-permanent"
          >
            ajit.singh2905@gmail.com
          </a>
        </p>
        <p>
          Find me at{" "}
          <a
            href="https://github.com/ajitid"
            className="link link-permanent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/ajitid"
            className="link link-permanent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
