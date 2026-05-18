import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import MainLayout from '../layouts/main'
import Helmet from '../layouts/Helmet'
import {
  Container, BackLink, Header, Title, Meta,
  TechList, TechTag, OutcomeBlock, ImageWrapper, Body, Links,
} from './WorkDetail.styles'

interface WorkDetailData {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      description: string
      year: number
      role: string
      outcome: string
      tech: string[]
      image?: string
      links?: { live?: string; github?: string }
    }
  }
  workImages: {
    nodes: Array<{
      relativePath: string
      childImageSharp: { fluid: any }
    }>
  }
}

const WorkDetail = ({ data }: { data: WorkDetailData }) => {
  const { frontmatter: fm, html } = data.markdownRemark

  const image = fm.image
    ? data.workImages.nodes.find(n => n.relativePath === fm.image)?.childImageSharp.fluid ?? null
    : null

  return (
    <MainLayout>
      <Helmet title={`${fm.title} — Chris Lucas`} />
      <Container>
        <BackLink><Link to="/work">&lt;&lt; Back to work</Link></BackLink>
        <Header>
          <Title>{fm.title}</Title>
          <Meta>
            <span>{fm.year}</span>
            {fm.role && <span>{fm.role}</span>}
          </Meta>
          <TechList>
            {fm.tech?.map(t => <TechTag key={t}>{t}</TechTag>)}
          </TechList>
          {fm.outcome && <OutcomeBlock>{fm.outcome}</OutcomeBlock>}
        </Header>
        {image && (
          <ImageWrapper>
            <Img fluid={image} alt={fm.title} />
          </ImageWrapper>
        )}
        <Body dangerouslySetInnerHTML={{ __html: html }} />
        {(fm.links?.live || fm.links?.github) && (
          <Links>
            {fm.links.live && <a href={fm.links.live} target="_blank" rel="noopener noreferrer">↗ live site</a>}
            {fm.links.github && <a href={fm.links.github} target="_blank" rel="noopener noreferrer">↗ github</a>}
          </Links>
        )}
      </Container>
    </MainLayout>
  )
}

export default WorkDetail

export const query = graphql`
  query WorkDetailQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        year
        role
        outcome
        tech
        image
        links { live github }
      }
    }
    workImages: allFile(filter: { relativePath: { regex: "/^work/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
