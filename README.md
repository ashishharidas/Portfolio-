# Ashish Haridas — Portfolio (React)

Rebuilt from the original static site into React + Vite + Tailwind CSS v4 + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys to
GitHub Pages automatically on every push to `main`. One-time setup:

1. Push this project to your `Portfolio-` repo (replacing the old static files).
2. In the repo settings → **Pages**, set the source to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys `dist/` for you.

`vite.config.js` is already set with `base: '/Portfolio-/'` to match
`ashishharidas.github.io/Portfolio-/`. If you ever rename the repo, update
that value to match.

## Content you still need to fill in

Everything content-related lives in one file: `src/data/portfolio.js`.
Anything marked `isPlaceholder: true` (or with an obvious "add..." string) needs
your real details:

- **FitQuest** project — description, tech stack, GitHub/demo links
- **Experience** — your MUNSOC Web Team role (or others), dates, and description
- **GitHub URL** — currently assumed as `github.com/ashishharidas`; update if different
- **Resume** — drop a `resume.pdf` into `/public` and set `resumeUrl: "/resume.pdf"`
  in `portfolio.js`, then wire up a "Resume" link wherever you'd like one

Certificate images were copied over from your original repo into `/public/certificates`.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed)
- Framer Motion for animation
- lucide-react for icons (GitHub/LinkedIn marks are hand-rolled in
  `src/components/Icons.jsx` since recent lucide-react versions dropped brand icons)
