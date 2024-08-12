
import { graphql, Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

export default function Blog({ data }) {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  `

  const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  `

  const Blog = styled.article`
  margin-bottom: 10px;
  `

  const BlogTitle = styled.h3`
  margin-top: 0;
  `

  const BlogDate = styled.span`
  color: #888;
  `

  const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `

  const { posts } = data.blog

  return (
    <Container>
    <Header>
      <h1>Monkey Thoughts</h1>
    </Header>
    <BlogList>

      {posts.map(post => (
        <Blog key={post.is}>
          <Link to={post.fields.slug}>
            <BlogTitle>{post.frontmatter.title}</BlogTitle>
          </Link>
          <BlogDate>{post.frontmatter.author}, {post.frontmatter.date}</BlogDate>
          <p>{post.excerpt}</p>
        </Blog>
      ))}
      </BlogList>
    </Container>
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