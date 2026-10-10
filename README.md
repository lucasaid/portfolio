# chrislucas.dev — Personal Portfolio

Personal portfolio site built with **Astro + TypeScript**, deployed via Netlify.

## Pages

- `/` - Home: profile, bio, and external links
- `/now` - What I'm currently up to (inspired by [nownownow.com](https://nownownow.com))
- `/terminal` - Interactive terminal emulator with fake Unix shell commands
- `/blog/*` - Blog posts sourced from Markdown files in `src/blog/`
- `/work/*` - Work case studies sourced from Markdown files in `src/work/`

## Development

```bash
yarn develop   # Start dev server at http://localhost:4321
yarn build     # Production build to dist/
yarn serve     # Serve production build locally
```

Requires Node 22.12+ and Yarn.

## Stack

- [Astro](https://astro.build/)
- React 18 + TypeScript (terminal page only)
- Bulma (via SCSS)
- Netlify (CI/CD + hosting)
