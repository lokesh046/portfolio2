# Lokesh — Portfolio

Personal portfolio for Lokesh, AI/ML Engineer & Backend Developer.

The whole site — hero, Projects, Skills, Problem Solving, Journey, and Contact — runs as one
continuous scroll inside [ThreeUI](https://github.com/MengTo/threeui)'s **Kage** landing page, a
live Three.js Kyoto mountain-temple scene. Content is personalized directly into Kage's own
multi-chapter structure rather than layered on top of it, so the camera fly-through and garden
imagery stay in sync as you scroll from section to section.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [@designcodeio/threeui](https://www.npmjs.com/package/@designcodeio/threeui) (MIT-licensed, `KageLandingPage`)
- Tailwind CSS v4

## Structure

- `src/App.tsx` — renders the full-viewport Kage iframe; the outer page never scrolls, Kage's own
  document is the sole scroll surface.
- `src/components/KageHero.tsx` — mounts `KageLandingPage` with the site's typography/color config.
- `public/landing-pages/kage.html` — the personalized Kage document itself (copied from the
  package's own asset bundle per its README, then edited in place): hero copy, nav, and all five
  content chapters (Projects, Skills, Problem Solving, Journey, Contact) live here.
- `public/landing-pages/secret-pathways-assets/` — Kage's fonts, Three.js build, and foreground
  garden imagery, required alongside `kage.html`.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Deployment

Deployed on [Vercel](https://vercel.com) — zero config, auto-detected as a Vite app
(`vite build` → `dist`).
