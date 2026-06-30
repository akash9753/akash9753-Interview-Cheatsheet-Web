# Project Blueprint

This document describes **how the Interview Cheatsheet app is built** — architecture, data flow, styling, build pipeline, and deploy process. Use it as the reference when extending or maintaining the project.

---

## 1. What we are building

A static-style documentation site delivered as a **single-page React application (SPA)**:

| Layer | Role |
|-------|------|
| **Content** | Markdown files in `MarkDownFormat/` |
| **App** | React renders markdown into styled HTML at build time |
| **Hosting** | Vercel serves the production build from `dist/` |

There are no separate `.html` course pages. React generates the DOM; CSS classes style it.

---

## 2. Tech stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev/) | Dev server, bundler, production build |
| [React 19](https://react.dev/) | UI components |
| [React Router](https://reactrouter.com/) | URLs: `/` and `/course/:slug` |
| [react-markdown](https://github.com/remarkjs/react-markdown) | Markdown → React elements |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | Tables, strikethrough, task lists |
| [rehype-raw](https://github.com/rehypejs/rehype-raw) | Allow HTML blocks inside markdown |
| [rehype-slug](https://github.com/rehypejs/rehype-slug) | Auto `id` on headings (anchor links) |
| [unified](https://github.com/unifiedjs/unified) | Parse markdown for sidebar TOC |
| [Vercel](https://vercel.com/) | CI/CD and hosting |

---

## 3. Architecture overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         MarkDownFormat/*.md                      │
│                    (course content — source of truth)            │
└────────────────────────────┬────────────────────────────────────┘
                             │ import.meta.glob (build time)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      src/data/courses.js                         │
│         slug, mdFile, cardTitle, brand → links md to routes     │
└────────────────────────────┬────────────────────────────────────┘
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
    ┌──────────┐      ┌─────────────┐    ┌──────────────┐
    │  Home    │      │ CoursePage  │    │ public/assets│
    │  page    │      │ + Layout    │    │ (images)     │
    └──────────┘      │ + Markdown  │    └──────────────┘
                      │ + TOC       │
                      └──────┬──────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  src/index.css  │
                    │  (all styles)   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Vite build     │
                    │  → dist/        │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Vercel CDN     │
                    └─────────────────┘
```

---

## 4. Routing

Defined in `src/App.jsx`:

| URL | Component | Content |
|-----|-----------|---------|
| `/` | `Home` | Course cards from `courses.js` |
| `/course/:slug` | `CoursePage` | Markdown for matching course |

`vercel.json` rewrites all paths to `index.html` so client-side routing works on refresh and direct links.

---

## 5. Course registry

`src/data/courses.js` is the **map between URLs and markdown files**:

```js
{
  slug: 'csharp-oops',                              // URL: /course/csharp-oops
  mdFile: 'csharp-oops-interview-roadmap.md',       // file in MarkDownFormat/
  num: '04',                                        // homepage card number
  cardTitle: 'C# OOP',                              // homepage card title
  cardDesc: '...',                                  // homepage card description
  brand: 'Csharp Oops Interview Roadmap',          // sidebar title on course page
}
```

Markdown is loaded at build time:

```js
import.meta.glob('../../MarkDownFormat/*.md', { query: '?raw', import: 'default', eager: true });
```

---

## 6. Course page pipeline

When a user opens `/course/csharp-oops`:

1. **`CoursePage`** — reads `slug` from URL, finds course in `courses.js`, loads markdown string.
2. **`CourseLayout`** — sidebar (brand + TOC) + main content area.
3. **`extractHeadings`** (`src/utils/headings.js`) — parses markdown AST for h1–h4 to build TOC.
4. **`TableOfContents`** (`src/utils/toc.jsx`) — collapsible sidebar nav (same behavior as old static HTML).
5. **`MarkdownContent`** (`src/components/MarkdownContent.jsx`) — renders markdown with custom components:

| Markdown | React output | CSS class |
|----------|--------------|-----------|
| `# Heading` | `<h1 id="..."><a class="heading-anchor">` | `main h1` in `index.css` |
| `---` | `<hr class="section-divider">` | `.section-divider` |
| `![alt](assets/...)` | `<figure class="content-figure">` | `.content-figure` |
| ` ```code ` | `<div class="code-block">` + Copy button | `.code-block` |
| `\| table \|` | `<div class="table-wrap"><table>` | `.table-wrap` |

6. **`CodeBlock`** — copy-to-clipboard for fenced code blocks.

---

## 7. Styling (no per-page HTML)

Old static site: each `.html` file had its own `<style>` block.

Current app:

- **One file:** `src/index.css` — variables, layout, cards, sidebar, markdown, tables, code blocks.
- **Components** use `className` (React) = `class` (HTML) e.g. `className="card"`.
- **Imported once** in `src/main.jsx`: `import './index.css'`.
- **Vite** bundles CSS into `dist/assets/index-*.css` at build time.

Global theme tokens in `:root`:

```css
--bg, --panel, --accent, --accent-2, --border, --muted, --text, ...
```

---

## 8. Images

- Stored in **`public/assets/`** (e.g. `public/assets/csharp/const-vs-readonly.jpg`).
- Referenced in markdown as: `![Alt](assets/csharp/const-vs-readonly.jpg)`.
- `MarkdownContent` prefixes with `/` → `/assets/csharp/...` in the browser.
- Vite copies `public/` into `dist/` unchanged.

---

## 9. Build pipeline

### Development

```powershell
npm run dev
```

- Vite dev server at http://localhost:5173
- Hot reload on file changes

### Production

```powershell
npm run build
```

Vite:

1. Bundles `src/**/*.jsx` → `dist/assets/index-*.js`
2. Bundles `src/index.css` → `dist/assets/index-*.css`
3. Inlines all `MarkDownFormat/*.md` into the JS bundle (eager glob)
4. Copies `public/assets/` → `dist/assets/`
5. Outputs `dist/index.html` as the shell

```powershell
npm run preview   # optional: serve dist/ locally
```

---

## 10. Deploy pipeline (Vercel)

```
git push origin master
        │
        ▼
GitHub (akash9753-Interview-Cheatsheet-Web)
        │
        ▼
Vercel webhook
        │
        ├── npm install
        ├── npm run build
        └── deploy dist/ to CDN
```

- **Repo:** https://github.com/akash9753/akash9753-Interview-Cheatsheet-Web
- **Live:** https://interview-cheatsheet-web.vercel.app/
- **Dashboard:** https://vercel.com/akash9753/interview-cheatsheet-web

No manual deploy step after push.

---

## 11. Change workflow

### A. Update existing course content (most common)

```
Edit MarkDownFormat/<course>.md  →  git push  →  Vercel deploys
```

No React changes required.

### B. Add images

```
Add file to public/assets/...
Reference in .md as assets/...
git push
```

### C. Add a new course

1. Create `MarkDownFormat/new-course.md`
2. Add entry to `src/data/courses.js` (slug, mdFile, card fields, brand)
3. `git push`

### D. Change layout, colors, or components

Edit `src/index.css` and/or `src/components/` → `git push`

---

## 12. Course reference

| Course | Markdown file | Slug | URL |
|--------|---------------|------|-----|
| MSSQL | `mssql learning course.md` | `mssql` | `/course/mssql` |
| Programming Principles | `programming-principles-interview-roadmap.md` | `programming-principles` | `/course/programming-principles` |
| C# Fundamentals | `csharp-fundamentals-interview-roadmap.md` | `csharp-fundamentals` | `/course/csharp-fundamentals` |
| C# OOP | `csharp-oops-interview-roadmap.md` | `csharp-oops` | `/course/csharp-oops` |
| EF Core | `entity-framework-core-interview-roadmap.md` | `entity-framework-core` | `/course/entity-framework-core` |
| ASP.NET Core MVC | `aspnet-core-mvc-interview-roadmap.md` | `aspnet-core-mvc` | `/course/aspnet-core-mvc` |

---

## 13. Folder map

```
Interview/
├── MarkDownFormat/              # CONTENT — edit course text here
│   └── *.md
├── public/
│   └── assets/                  # IMAGES — referenced from markdown
│       ├── aspnet/
│       ├── csharp/
│       ├── efcore/
│       ├── patterns/
│       └── solid/
├── src/
│   ├── main.jsx                 # App entry, loads index.css
│   ├── App.jsx                  # Routes
│   ├── index.css                # ALL styles
│   ├── data/
│   │   └── courses.js           # Course registry + md imports
│   ├── pages/
│   │   ├── Home.jsx             # Homepage cards
│   │   └── CoursePage.jsx       # Loads course by slug
│   ├── components/
│   │   ├── CourseLayout.jsx     # Sidebar + main layout
│   │   ├── MarkdownContent.jsx  # Markdown renderer
│   │   └── CodeBlock.jsx        # Code + copy button
│   └── utils/
│       ├── headings.js          # Parse headings for TOC
│       └── toc.jsx              # Sidebar table of contents
├── index.html                   # Vite HTML shell
├── vite.config.js
├── vercel.json                  # SPA rewrites
├── package.json
├── README.md                    # Project intro
└── BLUEPRINT.md                 # This file
```

---

## 14. What we removed (history)

| Before (static) | After (React) |
|-----------------|---------------|
| One `.html` file per course | One React app, dynamic routes |
| `<style>` in each HTML file | Single `src/index.css` |
| `scripts/sync-md-to-html.mjs` | Markdown imported directly — no HTML sync |
| `assets/` at repo root | `public/assets/` for Vite |

---

## 15. Git commands (reference)

```powershell
cd E:\code\Interview

# content only
git add MarkDownFormat/csharp-oops-interview-roadmap.md
git commit -m "Update C# OOP topics"
git push origin master

# new course + registry
git add MarkDownFormat/new-course.md src/data/courses.js
git commit -m "Add new course"
git push origin master
```

---

*This blueprint documents the build as of the Vite + React migration. Update this file when architecture changes.*
