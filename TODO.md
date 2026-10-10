# TODO

## Big Stuff

- Skillset
- Work page
  - Listing of work
  - Link to external or preview
  - No case studies
- Blog Section
- Replace Bulma (do after the Astro migration is merged and performance-tested)
  - Bulma is 661 KB raw / ~64 KB gzipped, ~45 KB of it unused on every page, and it's the only render-blocking stylesheet left
  - The site only relies on its reset plus 4 classes that collide with ours: `.container` + `.icon` (home), `.content` (/now pages), `.title` (work detail). Bulma's `.container` max-widths currently override `container.scss`
  - Recommended: drop Bulma for plain CSS — a ~20-line reset plus those 4 rules in our own SCSS. Smallest possible CSS, no new dependency, no markup changes
  - Alternative: Tailwind. Similar output size (only used utilities ship) but means rewriting markup into utility classes; the gain is authoring style, not performance
  - Either way: compare pages visually at mobile + desktop widths before/after, then re-run the Lighthouse benchmark

## Small stuff

- Retina image
- Update photo
- Copyright info
- Page transitions

## List of work

- Orora customer portal
- Milkshakes
- Lilydale
- USYD
- Steggles?
- Save our slang
- Deakin ATAR Calculator
- AEMO
- Vicroads

## Brands

- Deakin
- Steggles
- Lilydale
- Porsche
- Holden
- Baiada
- Red Hat
- Big Issue
- Sanchurro
- Libra
- Devondale
- NAB
- Mercades
- Vicroads

## Personal Projects

- File Curator
- Tablify
- Img bright
