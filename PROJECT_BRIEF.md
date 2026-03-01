# insanalytics learn — Project Brief
> Paste this into a new Claude Project or conversation for full context.
> **Last updated:** 2026-03-01

---

## What This Is

A digital technologies training platform built with Docusaurus 3, hosted on GitHub Pages. It provides training content across a broad curriculum of digital technologies, designed to be accessible to people with little to no technical background — spanning professions from factory floor workers and accountants to HR teams, finance, marketing, and IT.

- **Live site:** https://insanalytics.github.io/insanalytics-learn
- **Repo:** https://github.com/insanalytics/insanalytics-learn (private, `insanalytics` org)
- **Branch:** `master`
- **Status:** Beta — not yet publicly released
- **Contributor guide:** `CLAUDE.md` in project root
- **README:** `README.md` in project root — start here if you're new to the project

---

## Audience & Content Philosophy

The primary audience is non-technical professionals attending in-person instructor-led training sessions (typically multi-day workshops). The site serves as both a setup guide before sessions and a reference resource trainees return to afterward.

**The guiding principle is digestibility above all else.** Content must make sense to someone encountering a topic for the first time, regardless of their profession or technical background. Jargon must be avoided or immediately explained. Instructions must be specific enough that a reader never has to guess what to do next. Examples should be grounded in real, everyday professional contexts.

The site is **not** a finished product — it is an evolving asset being refined through real training sessions and structured feedback. Content approaches may change significantly between iterations based on what lands with trainees and what doesn't.

---

## Full Curriculum Scope

The site is built to eventually cover the full range of topics the team teaches. Not all of these exist on the site yet — the current four sections are the starting point, with more to be added over time.

**Current sections (live):** Chatbots, Agentic AI, RAG, RPA

**Planned future sections:** Advanced Excel, Tableau, PowerBI, Spotfire, Core Machine Learning, Deep Learning, Time Series Forecasting, Blockchain, IoT, and others.

Each client engagement draws on a relevant subset of this curriculum. Not all topics need to be fully built before a session — but every topic that exists on the site should have a credible, complete landing page even if its deeper content is still in development.

---

## Feedback & Iteration System

The site is designed to improve through real feedback collected across training sessions. The planned feedback loop is:

1. **Google Forms** — structured post-session surveys completed by trainees
2. **Session notes** — written observations from trainers during and after each session
3. **RAG-based synthesis** — form responses and session notes fed into a local RAG system to surface patterns, identify weak spots, and inform content decisions

Question design in the feedback forms is critical — questions need to surface specific, actionable signals (which topics felt confusing, which examples didn't resonate, where people disengaged) rather than generic satisfaction ratings.

Feedback from the first real session has already informed priorities: trainees engaged most strongly with AI chatbot prompting, and disengaged when content became technically demanding or when tool interfaces felt intimidating (e.g. RPA workflows, PowerBI). This shapes current content priorities.

---

## Tech Stack

- **Framework:** Docusaurus 3 (TypeScript)
- **Hosting:** GitHub Pages via GitHub Actions (auto-deploys on push to `master`)
- **Docs route:** `/learn/*` (not `/docs/*`)
- **Theme:** react.dev-style — white background, teal accent, 3-column layout
- **No logo** — text-only branding: "insanalytics learn"
- **Node.js:** >=20 required

---

## Site Structure

### Navbar
```
insanalytics learn    [Search]    Learn  |  About  🌙
```

### Sidebar (3 non-collapsible section headers)
```
GET STARTED
  Welcome
  Setup ▾
    Chatbots
    Agentic AI ▾  (VS Code — stub, AntiGravity — stub)
    RAG
    RPA ▾  (UiPath — complete, 12 steps + 12 screenshots)

LEARN
  Chatbots ▾
  Agentic AI ▾
  RAG ▾
  RPA ▾

RESOURCES
  All Problem Sets
  All Videos
  All Resources
```

---

## Current Content Status

### Learn sections
| Section | Index | Content pages |
|---|---|---|
| Chatbots | ✅ | None yet |
| Agentic AI | ✅ | None yet |
| RAG | ✅ | None yet |
| RPA | ✅ | None yet |

### Setup guides
| Section | Index | Tool guides |
|---|---|---|
| Chatbots | Stub | None |
| Agentic AI | Stub | VS Code (stub), AntiGravity (stub) |
| RAG | Stub | None |
| RPA | ✅ Fleshed out | UiPath ✅ complete |

### Quick links
All three pages exist (`problem-sets.md`, `videos.md`, `resources.md`) — content TBD.

---

## Key Conventions

### Doc ID rule
Doc ID = `folder/frontmatter-id` — never use `/index`

| File | Frontmatter `id` | Doc ID in sidebars.ts |
|---|---|---|
| `docs/chatbots/index.md` | `chatbots` | `chatbots/chatbots` |
| `docs/setup/rpa/index.md` | `rpa` | `setup/rpa/rpa` |
| `docs/chatbots/prompt-engineering.md` | `prompt-engineering` | `chatbots/prompt-engineering` |

### Setup guide format
- Headings: `## Step N — Title` (title case, em dash)
- Callouts: `:::tip` = shortcuts, `:::warning` = mistakes, `:::info` = context
- Screenshots: stored in `static/img/tool-name/`, annotated with red box/arrow
- Each setup subfolder `index.md`: `:::info` callout + one-sentence intro + tools table

### Style rules
- File names: lowercase, hyphenated (`prompt-engineering.md`)
- Page titles: Title Case
- Videos: always use `video-container` div
- Downloads: always use `download-btn` class
- Every `index.md`: must have `:::info Section note` callout
- Always update quick-links pages when adding videos, problem sets, or resources

---

## Reusable CSS Components (`src/css/custom.css`)
| Component | Class |
|---|---|
| Summary box | `learn-box` |
| Topic card grid | `topic-grid` + `topic-card` |
| Download button | `download-btn` / `download-btn-outline` |
| Video embed | `video-container` |

---

## Automation
A GitHub Action (`.github/workflows/sync-welcome.yml`) auto-updates welcome page cards when any `docs/*/index.md` changes:
- Uses **Gemini API** (`gemini-1.5-flash`, free tier)
- Secret required: `GEMINI_API_KEY` in GitHub repo secrets
- New topics must also be registered in `.github/scripts/update_welcome.py` → `TOPIC_CONFIG`

---

## Color Theme
Currently react.dev teal. To switch to insanalytics green, replace `:root` in `src/css/custom.css`:
```css
--ifm-color-primary: #50B432;
```
Generate all shades at: https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima

---

## Pending Work
- [ ] Fill in Learn content pages — prioritise Chatbots (highest trainee engagement)
- [ ] Complete VS Code and AntiGravity setup guides
- [ ] Flesh out Chatbots and RAG setup index pages
- [ ] Add content to quick-links pages
- [ ] Plan and scaffold future topic sections (Excel, Tableau, PowerBI, ML, etc.)

## Suggestions Under Consideration
_Proposed by Simarjot Singh Dhaliwal — not yet decided or committed._

- Add `GEMINI_API_KEY` to GitHub secrets to activate the welcome page auto-sync workflow
- Design and set up a Google Forms feedback system for post-session trainee surveys
- Establish a consistent session notes format to support RAG-based feedback synthesis
- Switch to a custom domain `learn.insanalytics.com` once the site is ready for wider use

---

## Important Files
| File | Purpose |
|---|---|
| `README.md` | Project overview and onboarding — start here; update before every push |
| `CLAUDE.md` | Full contributor + agent guide — read before making any changes; suggest updates when new patterns emerge |
| `PROJECT_STATE.md` | Living snapshot of current state — update before every push |
| `PROJECT_BRIEF.md` | This file — high-level context for planning sessions |
| `sidebars.ts` | Sidebar navigation config |
| `docusaurus.config.ts` | Navbar, footer, theme settings |
| `src/css/custom.css` | All colors and custom component styles |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages |
| `.github/workflows/sync-welcome.yml` | Auto-update welcome page via Gemini |
