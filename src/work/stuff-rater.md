---
title: Stuff Rater
description: "A single-page React app for deciding whether to keep or discard personal items using a weighted scoring algorithm with RPG-inspired quality tiers."
year: 2025
role: Personal Project
outcome: "A fully tested, accessible decision-making tool that rates items across 8 weighted criteria and outputs a quality tier (Junk → Legendary) with a plain-English explanation."
tech:
  - React
  - TypeScript
  - Jest
  - Playwright
featured: true
order: 1
image: work/stuff-rater.png
links:
  live: https://dancing-brigadeiros-985274.netlify.app/
  github: https://github.com/lucasaid/stuff-rater
---

## Overview

Stuff Rater is a single-page React app for deciding whether to keep or discard personal items - games, collectibles, household objects, and more. Users rate an item across 8 weighted criteria and the algorithm outputs one of six quality tiers
(Junk through Legendary) along with a RETAIN or DISCARD verdict and a plain-English explanation of what drove the decision.

## What I did

Designed and implemented a weighted scoring algorithm, covering hard-override rules, an amplifier rule, and score-based thresholds.  

Built a custom segmented stat bar component with accessible keyboard and click interactions.  

Crafted a dark fantasy RPG aesthetic using CSS variables for tier colours, Cinzel Decorative / Rajdhani / Orbitron typefaces, and staggered slide-in animation.  

Wrote Jest unit tests covering all scoring branches and Playwright end-to-end tests covering full UI interactions

## Challenges

Separating pure algorithm logic from UI concerns early on was key. Extracting scoring into a separate file made the decision rules independently testable and prevented them from being entangled with React state. Getting the tier reveal animation to retrigger correctly on tier change.

## Outcome

A lightweight, fully tested tool with clean separation between algorithm and UI layers. All interactive elements meet accessibility standards with focus-visible outlines and minimum touch target sizes. The scoring logic is covered end-to-end by both unit and Playwright test suites.