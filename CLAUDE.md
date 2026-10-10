# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (http://localhost:8000)
yarn develop

# Production build
yarn build

# Serve production build locally
yarn serve
```

There are no tests (`npm test` exits with an error by design).

## Architecture

This is a personal portfolio site built with **Gatsby 5 + TypeScript + React 18**, deployed via Netlify.

### Pages

- `/` — Home page (`src/pages/index.tsx`) — profile, bio, external links
- `/now` — "Now" page (`src/pages/now/index.tsx`) — what Chris is currently doing, inspired by [nownownow.com](https://nownownow.com)
- `/terminal` — Interactive terminal emulator (`src/pages/terminal/index.tsx`) — a fake Unix shell with `ls`, `cd`, `open`, `help`, `clear`, `exit` commands; navigates between Gatsby routes
- `/blog/*` — Blog posts sourced from Markdown files in `src/blog/`, rendered via `src/templates/BlogPost.tsx`; slugs created in `gatsby-node.js`

### Layout & Styling

- `src/layouts/main.tsx` — wraps every page in the `<CanvasBg>` animated canvas background and global SCSS
- `src/layouts/Helmet.tsx` — SEO/meta tags via `react-helmet`
- `src/stylesheets/all.scss` — global styles; imports Bulma via SCSS variables
- Per-page styled-components files follow the pattern `*.styles.ts` (e.g., `now.styles.ts`, `terminal.styles.ts`)
- `src/components/ScanLines.styles.ts` — styled wrapper used by the terminal page to give a CRT scanline effect

### Key Components

- `CanvasBg` — canvas element that draws random diagonal lines as a decorative background
- `ScanLines` — a styled-component overlay (used only in the terminal page)

### Data / Content

- Blog posts are Markdown files in `src/blog/` — `gatsby-node.js` creates pages for them at `/blog/<slug>`
- Images are sourced from `src/img/` via `gatsby-source-filesystem` and processed with `gatsby-image` + Sharp
- Static assets (audio files, videos, favicons) live in `static/` and are copied as-is to `public/`

### Updating the Now Page

Edit `src/pages/now/index.tsx` directly — it is plain JSX, not sourced from Markdown. Update the "Last Updated" date string in the component.
