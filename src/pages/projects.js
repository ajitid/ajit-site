import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Link from "../components/Link";

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Projects" />
      <div>
        <h1 className="text-4xl font-serif mb-6">Projects</h1>

        <div className="flex flex-wrap -ml-4 overflow-hidden md:-ml-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="my-4 pl-4 w-full overflow-hidden md:my-6 md:pl-12 md:w-1/2"
            >
              <div className="card border rounded w-full px-4 py-6">
                <p className="text-3xl font-serif mb-6">
                  {project.node.frontmatter.title}
                </p>
                <div
                  className="card__detail--p text-lg leading-normal"
                  dangerouslySetInnerHTML={{ __html: project.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectListQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default Projects;
