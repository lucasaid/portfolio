import styled from 'styled-components'

export const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  font-family: 'Courier New', monospace;
  color: var(--color-text);
`

export const PageTitle = styled.h1`
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 4px;
`

export const PageSubtitle = styled.p`
  color: var(--color-muted);
  font-size: 0.85rem;
  margin-bottom: 48px;
`

export const SectionLabel = styled.div`
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: var(--color-muted);
  text-transform: uppercase;
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
`

// ── Featured case studies ─────────────────────────────────────

export const CaseStudy = styled.article`
  margin-bottom: 64px;
  padding-bottom: 64px;
  border-bottom: 1px solid var(--color-border);
  &:last-of-type {
    border-bottom: none;
  }
`

export const CaseStudyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 6px;
`

export const CaseStudyTitle = styled.h2`
  font-size: 1.3rem;
  color: var(--color-heading);
  margin: 0;
`

export const Year = styled.span`
  color: var(--color-muted);
  font-size: 0.8rem;
`

export const Role = styled.div`
  color: var(--color-muted);
  font-size: 0.82rem;
  margin-bottom: 12px;
`

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`

export const TechTag = styled.span`
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 2px;
`

export const Description = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 12px;
`

export const MetaRow = styled.div`
  font-size: 0.82rem;
  margin-bottom: 6px;
  color: var(--color-text);
  span {
    color: var(--color-muted);
    margin-right: 6px;
  }
`

export const Body = styled.div`
  font-size: 0.88rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-top: 20px;
  h2 { font-size: 1rem; color: var(--color-accent); margin: 20px 0 8px; }
  h3 { font-size: 0.9rem; color: var(--color-accent); margin: 16px 0 6px; }
  p { margin-bottom: 12px; }
  ul { padding-left: 20px; margin-bottom: 12px; }
  li { margin-bottom: 4px; }
`

export const Links = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  a {
    color: var(--color-accent);
    font-size: 0.82rem;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`

export const ImageWrapper = styled.div`
  margin-top: 20px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--color-border);
`

// ── Archive grid ──────────────────────────────────────────────

export const ArchiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const ArchiveCard = styled.a`
  display: block;
  border: 1px solid var(--color-border);
  padding: 14px;
  border-radius: 3px;
  text-decoration: none;
  color: var(--color-text);
  transition: border-color 0.15s;
  cursor: pointer;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-text);
  }
`

export const ArchiveYear = styled.div`
  font-size: 0.7rem;
  color: var(--color-muted);
  margin-bottom: 4px;
`

export const ArchiveTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 4px;
`

export const ArchiveTech = styled.div`
  font-size: 0.72rem;
  color: var(--color-muted);
  margin-bottom: 10px;
`

export const ArchiveLink = styled.div`
  font-size: 0.75rem;
  color: var(--color-accent);
`
