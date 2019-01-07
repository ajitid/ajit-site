import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const Blog = ({ data }) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1 className="text-4xl font-serif mb-6">Blog</h1>
        <div className="mx-4">
          {postList.map(post => (
            <div key={post.node.frontmatter.slug} className="mb-6 md:mb-4">
              <div className="text-xl font-serif">
                <Link
                  to={`/blog/${post.node.frontmatter.slug}`}
                  className="link link-on-hover"
                >
                  {post.node.frontmatter.title}
                </Link>
              </div>
              <div className="text-grey-darker font-mono text-sm mt-1">
                {post.node.frontmatter.date} | {post.node.timeToRead} min read
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostListQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM YYYY")
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
