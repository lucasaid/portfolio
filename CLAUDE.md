# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (http://localhost:4321)
yarn develop

# Production build (outputs to dist/)
yarn build

# Serve production build locally
yarn serve

# Type-check .astro, .ts and .tsx files
yarn typecheck
```

There are no tests (`npm test` exits with an error by design). Requires Node 22.12+ (see `.nvmrc`).

## Architecture

This is a personal portfolio site built with **Astro + TypeScript**, deployed via Netlify (`netlify.toml`: `yarn build`, publish `dist`). Pages are static `.astro` files with no client JS, except `/terminal`, which is a React island.

### Pages

- `/` — Home page (`src/pages/index.astro`) — profile, bio, external links
- `/now` — "Now" page (`src/pages/now/index.astro`) — what Chris is currently doing, inspired by [nownownow.com](https://nownownow.com). Past entries live in dated folders (`src/pages/now/2025-06-11/index.astro`)
- `/terminal` — Interactive terminal emulator (`src/pages/terminal.astro` → `src/components/terminal/Terminal.tsx`, `client:only="react"`) — a fake Unix shell with `ls`, `cd`, `cat`, `open`, `help`, `clear`, `exit` etc.; navigates between routes. Command logic is in `useTerminal.ts`
- `/blog/*` — Blog posts from Markdown in `src/blog/`, rendered by `src/pages/blog/[slug].astro`; listed at `src/pages/blog/index.astro`
- `/work/*` — Work case studies from Markdown in `src/work/`, rendered by `src/pages/work/[slug].astro`; listed (featured + archive) at `src/pages/work/index.astro`

### Layout & Styling

- `src/layouts/Base.astro` — `<html>`/`<head>` (meta, fonts, favicons, manifest) and global SCSS; takes optional `title`/`description`
- `src/layouts/Main.astro` — wraps `Base` with skip link, `<main>`, and the canvas background (inline `<script>` drawing random diagonal lines)
- `src/stylesheets/all.scss` — global styles; imports Bulma via SCSS
- Page-specific styles are scoped `<style>` blocks inside each `.astro` file; use `:global()` for rendered Markdown
- The terminal uses `src/components/terminal/Terminal.module.css` (includes the CRT scanline effect)

### Data / Content

- Content collections are defined in `src/content.config.ts` (`blog`, `work`) with zod schemas; the entry id (filename stem) is the URL slug
- Images live in `src/img/` and are rendered with `astro:assets` `<Image>`. Work entries' `image` frontmatter is a path relative to `src/img/`, resolved by `src/lib/workImage.ts`
- Static assets (audio, gifs, favicons, `manifest.webmanifest`) live in `public/` and are copied as-is
- `public/sw.js` is a kill-switch that unregisters the old Gatsby service worker; delete it a few months after the Astro launch

### Updating the Now Page

Edit `src/pages/now/index.astro` directly — it is plain markup passed to `src/components/NowEntry.astro`, not sourced from Markdown. Update the `updated` prop date string.
