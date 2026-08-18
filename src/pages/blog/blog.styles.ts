import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const BlogList = styled.ul`
  list-style: none;
  padding: 0;
`

export const Post = styled.article`
  margin-bottom: 10px;
`

export const BlogTitle = styled.h3`
  margin-top: 0;
`

export const BlogDate = styled.span`
  color: #888;
`
