# insanalytics learn — Project State

> Paste this file into Claude Web at the start of each planning session for full context.
> **Last updated:** 2026-03-01

## Overview

insanalytics learn is a Docusaurus 3 site hosted on GitHub Pages at
`https://insanalytics.github.io/insanalytics-learn`.
It provides practical AI training content organised into four topics: Chatbots, Agentic AI, RAG, and RPA.

---

## Site Structure

### Learn sections

| Section | Index page | Content pages |
|---|---|---|
| Chatbots | ✅ | None yet |
| Agentic AI | ✅ | None yet |
| RAG | ✅ | None yet |
| RPA | ✅ | None yet |

### Setup guides

| Section | Index page | Tool guides |
|---|---|---|
| Chatbots | Stub ("coming soon") | None |
| Agentic AI | Stub | VS Code (stub), AntiGravity (stub) |
| RAG | Stub | None |
| RPA | ✅ Fleshed out | UiPath (complete — 12 steps, 12 screenshots) |

### Quick links pages

| Page | Status |
|---|---|
| `quick-links/problem-sets.md` | Exists (content TBD) |
| `quick-links/videos.md` | Exists (content TBD) |
| `quick-links/resources.md` | Exists (content TBD) |

---

## Recent Changes

- Fixed CLAUDE.md: hosting platform corrected from Netlify → GitHub Pages
- Fixed UiPath brand capitalisation in CLAUDE.md and `docs/setup/rpa/uipath.md` frontmatter
- Fleshed out `docs/setup/rpa/index.md` with `:::info` callout and tools table
- Added setup index page format documentation to CLAUDE.md Section 12
- Created PROJECT_STATE.md and added update rules to CLAUDE.md Section 13
- Rewrote README.md — cleaner structure, AI workflow guidance, three-file doc system explained
- Created PROJECT_BRIEF.md — high-level planning context for external AI sessions

---

## Pending / Planned Work

_Update this section at the end of each session._

- [ ] Fill in Learn section content pages (all four topics)
- [ ] Complete VS Code and AntiGravity setup guides
- [ ] Flesh out Chatbots and RAG setup index pages
- [ ] Add content to quick-links pages

---

## Key Decisions

- Docs route: `/learn/*` (not `/docs/*`)
- Hosting: GitHub Pages via GitHub Actions (`master` branch)
- Color theme: react.dev teal (green alternative documented in CLAUDE.md Section 9)
- No blog, no logos — text-only branding
- Each topic section owner decides their own page structure
