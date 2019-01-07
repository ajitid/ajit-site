import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import css from "../css/injected-html.module.css";
import SEO from "../components/Seo";

const BlogPost = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  const { timeToRead, html } = data.markdownRemark;
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1 className="font-serif text-3xl">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <div className="font-mono text-grey-dark text-sm mt-1 mb-8">
          <p>Published on {date}</p>
          <p>{timeToRead} min read</p>
        </div>
        <div
          className={css.injectedHtml}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
      }
      timeToRead
      html
    }
  }
`;

export default BlogPost;
