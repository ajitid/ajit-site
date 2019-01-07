const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName
    });
  }
};

const createBlogPostPages = (createPage, graphql) => {
  const blogPostTemplate = path.resolve("src/templates/BlogPost.js");

  graphql(`
    query BlogPostSlugQuery {
      allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      const { id } = node;
      createPage({
        path: `/blog/${slug}/`,
        component: blogPostTemplate,
        context: {
          id
        }
      });
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    createBlogPostPages(createPage, graphql);
    resolve();
  });
};
