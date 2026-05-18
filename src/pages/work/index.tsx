import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import MainLayout from '../../layouts/main'
import Helmet from '../../layouts/Helmet'
import {
  Container, PageTitle, PageSubtitle, SectionLabel,
  CaseStudy, CaseStudyHeader, CaseStudyTitle, Year, Role,
  TechList, TechTag, Description, MetaRow, Body, Links, ImageWrapper,
  ArchiveGrid, ArchiveCard, ArchiveYear, ArchiveTitle, ArchiveTech, ArchiveLink,
} from './work.styles'

interface FrontmatterLinks {
  live?: string
  github?: string
}

interface WorkFrontmatter {
  title: string
  description: string
  year: number
  role: string
  outcome: string
  tech: string[]
  image?: string
  links?: FrontmatterLinks
}

interface WorkNode {
  html: string
  frontmatter: WorkFrontmatter
  fields: { slug: string }
}

interface ArchiveNode {
  frontmatter: Pick<WorkFrontmatter, 'title' | 'description' | 'year' | 'tech'> & { links?: FrontmatterLinks }
  fields: { slug: string }
}

interface ImageNode {
  relativePath: string
  childImageSharp: { fluid: any }
}

interface WorkPageData {
  featured: { nodes: WorkNode[] }
  archive: { nodes: ArchiveNode[] }
  workImages: { nodes: ImageNode[] }
}

const WorkPage = ({ data }: { data: WorkPageData }) => {
  const { featured, archive, workImages } = data

  const findImage = (imagePath?: string) => {
    if (!imagePath) return null
    return workImages.nodes.find(n => n.relativePath === imagePath)?.childImageSharp.fluid ?? null
  }

  return (
    <MainLayout>
      <Helmet title="Work — Chris Lucas" />
      <Container>
        <Link to="/">&lt;&lt; Back</Link>
        <PageTitle style={{ marginTop: 24 }}>Work</PageTitle>
        <PageSubtitle>A selection of professional and personal projects</PageSubtitle>

        {featured.nodes.length > 0 && (
          <>
            <SectionLabel>Featured</SectionLabel>
            {featured.nodes.map(({ frontmatter: fm, html, fields }) => {
              const image = findImage(fm.image)
              return (
                <CaseStudy key={fields.slug}>
                  <CaseStudyHeader>
                    <CaseStudyTitle>{fm.title}</CaseStudyTitle>
                    <Year>{fm.year}</Year>
                  </CaseStudyHeader>
                  <Role>{fm.role}</Role>
                  <TechList>
                    {fm.tech?.map(t => <TechTag key={t}>{t}</TechTag>)}
                  </TechList>
                  <Description>{fm.description}</Description>
                  {fm.outcome && (
                    <MetaRow><span>Outcome:</span>{fm.outcome}</MetaRow>
                  )}
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
                </CaseStudy>
              )
            })}
          </>
        )}

        {archive.nodes.length > 0 && (
          <>
            <SectionLabel style={{ marginTop: 16 }}>Archive</SectionLabel>
            <ArchiveGrid>
              {archive.nodes.map(({ frontmatter: fm, fields }) => (
                <ArchiveCard key={fields.slug} href={fields.slug}>
                  <ArchiveYear>{fm.year}</ArchiveYear>
                  <ArchiveTitle>{fm.title}</ArchiveTitle>
                  <ArchiveTech>{fm.tech?.join(' · ')}</ArchiveTech>
                  <ArchiveLink>view case study →</ArchiveLink>
                </ArchiveCard>
              ))}
            </ArchiveGrid>
          </>
        )}
      </Container>
    </MainLayout>
  )
}

export default WorkPage

export const query = graphql`
  query WorkIndexQuery {
    featured: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/src/work/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      nodes {
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
        fields { slug }
      }
    }
    archive: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/src/work/" }
        frontmatter: { featured: { ne: true } }
      }
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          description
          year
          tech
          links { live github }
        }
        fields { slug }
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
