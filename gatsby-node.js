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