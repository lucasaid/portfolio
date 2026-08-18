import { graphql, Link } from "gatsby"
import React from "react"
import MainLayout from "../../layouts/main"
import { Container, Header, BlogList, Post, BlogTitle, BlogDate } from "./blog.styles"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <MainLayout>
      <Container>
        <Header>
          <h1>Monkey Thoughts</h1>
        </Header>
        <BlogList>
          {posts.map(post => (
            <Post key={post.id}>
              <Link to={post.fields.slug}>
                <BlogTitle>{post.frontmatter.title}</BlogTitle>
              </Link>
              <BlogDate>{post.frontmatter.author}, {post.frontmatter.date}</BlogDate>
              <p>{post.excerpt}</p>
            </Post>
          ))}
        </BlogList>
      </Container>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        fields{
          slug
        }
        excerpt
        id
      }
    }
  }
`
