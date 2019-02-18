import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import css from "../css/index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`blog`, `portfolio`, `goandbuild`, `github`, `Ajit Singh`]}
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
      <div className="leading-normal mt-8 text-lg">
        <p>
          Email{" "}
          <a
            href="mailto:ajit.singh2905@gmail.com"
            className="link link-permanent"
          >
            ajit.singh2905@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://github.com/goandbuild"
            className="link link-permanent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          <a
            href="https://twitter.com/goandbuild"
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
