# Interview Cheatsheet

A React web app for interview preparation roadmaps — C#, SQL, EF Core, ASP.NET Core MVC, OOP, and programming principles.

**Live site:** https://interview-cheatsheet-web.vercel.app/

---

## Quick start

```powershell
npm install
npm run dev
```

Open http://localhost:5173

---

## Tech stack

- **Vite** — build tool and dev server
- **React 19** — UI
- **React Router** — client-side routing
- **react-markdown** — renders course content from `.md` files
- **Vercel** — hosting (auto-deploy on push to `master`)

---

## Project layout

```
Interview/
├── MarkDownFormat/       # Course content (source of truth)
├── public/assets/        # Images used in markdown
├── src/
│   ├── data/courses.js   # Routes, slugs, homepage cards
│   ├── pages/            # Home + course pages
│   ├── components/       # Layout, markdown renderer, code blocks
│   └── index.css         # All styling
├── BLUEPRINT.md          # How this project is built
├── index.html            # Vite entry
└── vercel.json           # SPA routing on Vercel
```

---

## How to update content

1. Edit the `.md` file in `MarkDownFormat/`
2. Push to GitHub (`git push origin master`)
3. Vercel redeploys automatically

You usually **do not** need to change React code for content edits. See [BLUEPRINT.md](./BLUEPRINT.md) for full details.

---

Made by Akash
