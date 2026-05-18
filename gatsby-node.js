// const _ = require("lodash");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemarkFrontmatterLinks {
      live: String
      github: String
    }
    type MarkdownRemarkFrontmatter {
      links: MarkdownRemarkFrontmatterLinks
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()));
//       return Promise.reject(result.errors);
//     }

//     const posts = result.data.allMarkdownRemark.edges;

//     posts.forEach(edge => {
//       const id = edge.node.id;
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
//         ),
//         // additional data can be passed via context
//         context: {
//           id
//         }
//       });
//     });

//     // Tag pages:
//     let tags = [];
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach(edge => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags);
//       }
//     });
//     // Eliminate duplicate tags
//     tags = _.uniq(tags);

//     // Make tag pages
//     tags.forEach(tag => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`;

//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/templates/tags.tsx`),
//         context: {
//           tag
//         }
//       });
//     });
//   });
// };

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const prefix = node.fileAbsolutePath.includes('/src/work/') ? '/work' : '/blog'

    createNodeField({
      node,
      name: `slug`,
      value: `${prefix}${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogResult = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/blog/" } }) {
        edges {
          node {
            fields { slug }
          }
        }
      }
    }
  `)
  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      context: { slug: node.fields.slug },
    })
  })

  const workResult = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/work/" } }) {
        edges {
          node {
            fields { slug }
          }
        }
      }
    }
  `)
  workResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/WorkDetail.tsx`),
      context: { slug: node.fields.slug },
    })
  })
}