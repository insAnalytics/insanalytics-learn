# insanalytics learn — Contributor & Agent Guide

This is the single source of truth for anyone adding or editing content on insanalytics learn — whether you're a team member, a section lead, or an AI agent. Follow these instructions exactly to keep the site consistent.

---

## 1. Site Overview

insanalytics learn is built with **Docusaurus 3**, hosted on **Netlify**, with source on **GitHub**.

- **Framework:** Docusaurus 3 (React-based static site generator)
- **Content format:** Markdown (`.md`) with optional JSX components
- **Docs route:** `/learn/*` (set via `routeBasePath: 'learn'` in `docusaurus.config.ts`)
- **All styling:** `src/css/custom.css` (Infima CSS variables + custom classes)
- **Theme:** react.dev-style — white background, teal accent, 3-column layout
- **Key principle:** Each topic is flexible. Section owners decide their own structure.

---

## 2. Project Structure

```
insanalytics-learn/
├── docs/                        # All content lives here
│   ├── welcome.md               # Homepage/landing doc
│   ├── setup/                   # Installation guides (mirrors topic structure)
│   │   ├── index.md
│   │   ├── chatbots/index.md
│   │   ├── agentic-ai/
│   │   │   ├── index.md
│   │   │   ├── vscode.md
│   │   │   └── antigravity.md
│   │   ├── rag/index.md
│   │   └── rpa/
│   │       ├── index.md
│   │       └── uipath.md
│   ├── chatbots/
│   │   ├── index.md             # Topic landing page (required)
│   │   └── [your-pages].md      # Section owner adds freely
│   ├── agentic-ai/
│   │   ├── index.md
│   │   └── [your-pages].md
│   ├── rag/
│   │   ├── index.md
│   │   └── [your-pages].md
│   ├── rpa/
│   │   ├── index.md
│   │   └── [your-pages].md
│   └── quick-links/
│       ├── problem-sets.md      # Aggregated list — update when adding PS
│       ├── videos.md            # Aggregated list — update when adding videos
│       └── resources.md         # Aggregated list — update when adding resources
├── src/
│   ├── css/custom.css           # ALL theme colors and custom styles
│   └── pages/about.tsx          # About page
├── static/
│   └── problem-sets/            # Upload .zip files here
├── sidebars.ts                  # Sidebar navigation config
├── docusaurus.config.ts         # Site config (navbar, footer, theme)
└── CLAUDE.md                    # This file
```

---

## 3. Doc ID Rule

**Doc ID = `folder/frontmatter-id`**

Every `index.md` sets its `id` in frontmatter to the folder name. Examples:

| File | Frontmatter `id` | Doc ID in `sidebars.ts` |
|---|---|---|
| `docs/chatbots/index.md` | `chatbots` | `chatbots/chatbots` |
| `docs/agentic-ai/index.md` | `agentic-ai` | `agentic-ai/agentic-ai` |
| `docs/setup/rpa/index.md` | `rpa` | `setup/rpa/rpa` |
| `docs/chatbots/prompt-engineering.md` | `prompt-engineering` | `chatbots/prompt-engineering` |

**Never use `/index` as the doc ID** — always use the actual `id` from frontmatter.

---

## 4. Sidebar Structure (`sidebars.ts`)

Three non-collapsible section headers with `collapsible: false` and `className: 'sidebar-section-header'`. These render as uppercase muted labels (not links).

```
GET STARTED
  Welcome
  Setup ▾
    Chatbots
    Agentic AI ▾  (VS Code, AntiGravity)
    RAG
    RPA ▾  (UIPath)

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

New **Learn** topics go inside the `Learn` section category in `sidebars.ts`.

---

## 5. Adding a New Page to an Existing Topic

### Step 1 — Create the file
Create a `.md` file inside the topic folder. Use lowercase, hyphen-separated names:
```
docs/chatbots/prompt-engineering.md
```

### Step 2 — Add frontmatter
Every page must start with:
```md
---
id: prompt-engineering
title: Prompt Engineering
---
```
- `id`: matches the filename (no extension)
- `title`: displayed as the page heading in the sidebar

### Step 3 — Add to the sidebar
Open `sidebars.ts` and add the page id to the relevant topic's `items` array:
```ts
{
  type: 'category',
  label: 'Chatbots',
  link: { type: 'doc', id: 'chatbots/chatbots' },
  items: [
    'chatbots/prompt-engineering',  // ← add this
  ],
},
```

### Step 4 — Write content
Use standard markdown. See Section 7 for reusable components.

---

## 6. Adding a Brand New Topic (Learn section)

### Step 1 — Create the folder and index page
```
docs/your-topic/index.md
```
Frontmatter must be:
```md
---
id: your-topic
title: Your Topic Title
slug: /your-topic
---
```

### Step 2 — Add to sidebar
Open `sidebars.ts` and add a new category block inside the `Learn` section:
```ts
{
  type: 'category',
  label: 'Your Topic Title',
  link: { type: 'doc', id: 'your-topic/your-topic' },
  items: [
    // add pages here as you create them
  ],
},
```

### Step 3 — Add to welcome page
Open `docs/welcome.md` and add a new card inside the `topic-grid` div:
```jsx
<a className="topic-card" href="/learn/your-topic">
  <div className="topic-card-icon">🔧</div>
  <h3>Your Topic Title</h3>
  <p>One sentence describing what trainees will learn.</p>
</a>
```

### Step 4 — Add to footer
Open `docusaurus.config.ts` and add to the Learn footer column:
```ts
{ label: 'Your Topic Title', to: '/learn/your-topic' },
```

---

## 7. Adding Content Types

### Embedding a Video
```jsx
<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowFullScreen
  />
</div>
```
Replace `VIDEO_ID` with the ID from the YouTube URL. Then add a link to `docs/quick-links/videos.md`:
```md
## Chatbots
- [Introduction to Chatbots](/learn/chatbots) — 12 min
```

### Adding a Problem Set (Downloadable ZIP)
1. Upload the `.zip` to `static/problem-sets/your-topic-ps1.zip`
2. Add a download button on the relevant topic page:
```jsx
<a className="download-btn" href="/problem-sets/your-topic-ps1.zip">
  ⬇ Download Problem Set 1
</a>
```
3. Add an entry to `docs/quick-links/problem-sets.md`:
```md
## Chatbots
- [Problem Set 1](/problem-sets/chatbots-ps1.zip) — Prompt design exercises
```

### Adding Resources (Links, Papers, Tools)
Add a Resources section to your page:
```md
## Resources
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — The original transformer paper
- [LangChain Docs](https://docs.langchain.com) — Framework for building LLM applications
```
Then mirror the links in `docs/quick-links/resources.md`.

---

## 8. Reusable CSS Components

All classes are defined in `src/css/custom.css`.

### "In this section" summary box
```jsx
<div className="learn-box">
  <h3>In this section</h3>
  <ul>
    <li>First thing trainees will learn</li>
    <li>Second thing</li>
  </ul>
</div>
```

### Topic card grid
```jsx
<div className="topic-grid">
  <a className="topic-card" href="/learn/target-page">
    <div className="topic-card-icon">🔧</div>
    <h3>Card Title</h3>
    <p>Short description of this card.</p>
  </a>
</div>
```

### Download buttons
```jsx
{/* Primary (filled) */}
<a className="download-btn" href="/problem-sets/file.zip">
  ⬇ Download
</a>

{/* Secondary (outline) */}
<a className="download-btn download-btn-outline" href="/path/to/solutions">
  View Solutions
</a>
```

### Callout boxes (Docusaurus built-in)
```md
:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::
```

---

## 9. Changing the Color Theme

All colors are in `src/css/custom.css`. To switch from react.dev teal to insanalytics green, replace the `:root` block:
```css
:root {
  --ifm-color-primary:          #50B432;
  --ifm-color-primary-dark:     #48a12d;
  --ifm-color-primary-darker:   #44992b;
  --ifm-color-primary-darkest:  #387e23;
  --ifm-color-primary-light:    #5cbd3b;
  --ifm-color-primary-lighter:  #63c143;
  --ifm-color-primary-lightest: #7bcb61;
}
```

---

## 10. Running Locally & Deploying

```bash
npm install   # first time only
npm start     # dev server at http://localhost:3000
npm run build # production build
```

The site auto-deploys via **Netlify** on every push to `main`:
1. Make changes locally and test with `npm start`
2. `git add . && git commit -m "your message" && git push`
3. Netlify builds and deploys automatically (~2 minutes)

---

## 11. Style Rules

| Rule | Detail |
|---|---|
| **Page titles** | Title case — "Prompt Engineering", not "prompt engineering" |
| **File names** | Lowercase, hyphenated — `prompt-engineering.md` |
| **Sidebar labels** | Match the page `title` in frontmatter exactly |
| **No logos** | Site uses text-only branding |
| **Videos** | Always use `video-container` div — never raw iframes |
| **Downloads** | Always use `download-btn` class — never plain links |
| **Section index pages** | Every `index.md` should have the `:::info Section note` callout |
| **Quick links** | Always update the relevant quick-links page when adding videos, problem sets, or resources |
