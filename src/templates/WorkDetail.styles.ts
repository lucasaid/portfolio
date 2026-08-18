import styled from 'styled-components'

export const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  font-family: 'Courier New', monospace;
  color: var(--color-text);
`

export const BackLink = styled.div`
  margin-bottom: 32px;
  a {
    color: var(--color-accent);
    font-size: 0.85rem;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`

export const Header = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.h1`
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 6px;
`

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--color-muted);
  font-size: 0.82rem;
  margin-bottom: 16px;
`

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`

export const TechTag = styled.span`
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 2px;
`

export const OutcomeBlock = styled.div`
  border-left: 2px solid var(--color-accent);
  padding: 10px 16px;
  margin-bottom: 24px;
  font-size: 0.88rem;
  color: var(--color-text);
  background: rgba(187, 190, 100, 0.05);
`

export const ImageWrapper = styled.div`
  margin-bottom: 32px;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--color-border);
`

export const Body = styled.div`
  font-size: 0.88rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 32px;
  h2 { font-size: 1rem; color: var(--color-accent); margin: 24px 0 10px; }
  h3 { font-size: 0.9rem; color: var(--color-accent); margin: 18px 0 8px; }
  p { margin-bottom: 14px; }
  ul { padding-left: 20px; margin-bottom: 14px; }
  li { margin-bottom: 6px; }
`

export const Links = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 24px;
  border-top: 1px solid var(--color-border);
  a {
    color: var(--color-accent);
    font-size: 0.85rem;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`
