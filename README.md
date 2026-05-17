# chrislucas.dev — Personal Portfolio

Personal portfolio site built with **Gatsby 5 + TypeScript + React 18**, deployed via Netlify.

## Pages

- `/` - Home: profile, bio, and external links
- `/now` - What I'm currently up to (inspired by [nownownow.com](https://nownownow.com))
- `/terminal` - Interactive terminal emulator with fake Unix shell commands
- `/blog/*` - Blog posts sourced from Markdown files in `src/blog/`

## Development

```bash
yarn develop   # Start dev server at http://localhost:8000
yarn build     # Production build
yarn serve     # Serve production build locally
```

Requires Node 18+ and Yarn.

## Stack

- [Gatsby 5](https://www.gatsbyjs.com/)
- React 18 + TypeScript
- Bulma (via SCSS) + styled-components
- Netlify (CI/CD + hosting)
