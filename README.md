# insanalytics learn

A Docusaurus 3 site providing training content on digital technologies — including AI tools, RPA, business analytics, and more. Built to be accessible for non-technical audiences across a wide range of professions.

> **Status: Beta** — the site is under active development and not yet publicly released.

---

## What This Project Is

insanalytics learn is a web-based training resource designed to make digital technology approachable for people with little to no technical background. Content spans multiple topics and is structured to support both self-paced reference and instructor-led sessions.

The guiding principle behind every content decision is digestibility — if it isn't clear to someone encountering the topic for the first time, it isn't ready.

---

## Tech Stack

| | |
|---|---|
| **Framework** | Docusaurus 3 (React-based static site generator) |
| **Language** | TypeScript |
| **Content format** | Markdown (`.md`) with optional JSX components |
| **Styling** | Infima CSS variables via `src/css/custom.css` |
| **Hosting** | GitHub Pages |
| **Deployment** | GitHub Actions — auto-deploys on push to `master` |
| **Node.js** | >=20 required |

---

## Getting Started

```bash
npm install       # first time only
npm start         # dev server at http://localhost:3000
npm run build     # production build
```

Test all changes locally with `npm start` before pushing. The site auto-deploys via GitHub Actions approximately 2–3 minutes after a push to `master`.

**Live URL:** https://insanalytics.github.io/insanalytics-learn

---

## Project Structure

```
insanalytics-learn/
├── docs/                        # All content lives here
│   ├── welcome.md               # Homepage/landing doc
│   ├── setup/                   # Tool installation guides
│   │   ├── chatbots/
│   │   ├── agentic-ai/
│   │   ├── rag/
│   │   └── rpa/
│   ├── chatbots/                # Learn section: Chatbots
│   ├── agentic-ai/              # Learn section: Agentic AI
│   ├── rag/                     # Learn section: RAG
│   ├── rpa/                     # Learn section: RPA
│   └── quick-links/             # Aggregated resource pages
├── src/
│   ├── css/custom.css           # ALL theme colors and custom styles
│   └── pages/about.tsx
├── static/
│   ├── problem-sets/            # Downloadable ZIP files
│   └── img/                     # Screenshots organised by tool
├── sidebars.ts                  # Sidebar navigation config
├── docusaurus.config.ts         # Navbar, footer, theme config
├── CLAUDE.md                    # Full contributor and AI agent guide
├── PROJECT_STATE.md             # Living snapshot of current project state
└── PROJECT_BRIEF.md             # High-level project context for planning sessions
```

---

## Key Files for Contributors

This project uses three instruction files that serve different but complementary purposes. Read them in this order before contributing:

### `CLAUDE.md` — The Contributor & Agent Guide
The single source of truth for how to build and maintain this site. Covers everything: doc ID rules, sidebar structure, how to add pages and topics, content types (videos, problem sets, resources), CSS components, style rules, setup guide format, and deployment. **Read this first and follow it exactly.**

It is also written to be used directly as a system prompt or context file for AI coding assistants (Claude, Copilot, Gemini, etc.) — paste it into your AI tool at the start of a session to give it full project awareness.

`CLAUDE.md` is a living document. If you encounter a new pattern, format, or convention that isn't covered — or a rule that no longer reflects how the project actually works — raise a suggestion. AI agents should flag proposed updates in their response without editing the file directly. Human contributors should raise changes with the project lead before editing structural sections.

### `PROJECT_STATE.md` — Living Project Snapshot
A concise snapshot of the current state of the site: which pages exist, which are stubs, what was changed recently, and what work is pending. Update this before every `git push` and at the end of every editing session. It is also used as context when planning work in external AI sessions (e.g. Claude Web).

### `PROJECT_BRIEF.md` — Planning Context
A higher-level summary of the project — tech stack, site structure, conventions, and pending work — written for use in planning conversations with AI tools. Paste this into a new chat when you need strategic or architectural input rather than direct coding help.

---

## Working with AI Assistants

This project is built to work well with AI-assisted development. The instruction files above are structured specifically for this purpose.

**Recommended workflow:**
- For coding tasks in your IDE — paste `CLAUDE.md` into your AI assistant (Claude, Copilot, Gemini, etc.) at the start of the session so it has full context on conventions and structure.
- For planning or architectural decisions — paste `PROJECT_BRIEF.md` and `PROJECT_STATE.md` into a separate AI chat (e.g. Claude Web) to discuss without mixing it with active coding.
- Keep `PROJECT_STATE.md` and `README.md` updated before every push so that context stays accurate across sessions and between contributors.
- If your AI assistant encounters a pattern or structure not covered in `CLAUDE.md`, it should flag a suggested update rather than improvise silently.

---

## Contribution Rules

A few non-negotiable conventions that keep the site consistent:

**Doc IDs** follow the pattern `folder/frontmatter-id`. Never use `/index` as a doc ID. Every `index.md` sets its `id` in frontmatter to the folder name — for example, `docs/chatbots/index.md` has `id: chatbots`, giving it the doc ID `chatbots/chatbots`.

**File names** are always lowercase and hyphen-separated — `prompt-engineering.md`, not `Prompt Engineering.md`.

**Page titles** are always Title Case in frontmatter — `title: Prompt Engineering`.

**Every `index.md`** must include an `:::info` callout at the top.

**Sidebar labels** must match the page `title` in frontmatter exactly.

**Videos** must always use the `video-container` div — never raw iframes.

**Downloads** must always use the `download-btn` CSS class — never plain links.

**Quick-links pages** (`docs/quick-links/`) must be updated whenever you add a video, problem set, or external resource to any page.

**Setup guide pages** follow a strict `## Step N — Title` format with annotated screenshots stored in `static/img/tool-name/`. Full format rules are in `CLAUDE.md` Section 12.

Full style rules and component documentation are in `CLAUDE.md`.

---

## Content Philosophy

Every page on this site is written for someone who has never encountered the topic before. Jargon should be avoided or explained immediately. Instructions should be specific enough that a reader never has to guess what to do next. Examples should be grounded in real, everyday contexts that a diverse professional audience can relate to.

If you are writing or reviewing content, ask yourself: would this make sense to someone on their first day encountering this technology? If not, it needs more work before it goes in.

---

## Deployment

The site deploys automatically via GitHub Actions on every push to `master`. The workflow file is at `.github/workflows/deploy.yml`. No manual deployment steps are required — push your changes and the site updates within a few minutes.

Node.js >=20 is required both locally and in the workflow.
