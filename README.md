# Md. Nazmul Hossain — Portfolio

A modern, single-page portfolio website built from my resume. React + TypeScript + Vite + Tailwind CSS v4.

## Sections

- **Hero** — intro, availability badge, and headline stats (6+ yrs, 50K+ users, 8M+ req/month, 99.9% uptime)
- **About** — professional summary and highlights
- **Expertise** — 6 core competency cards (platform, backend, frontend, DevOps, observability, AI/LLM)
- **Experience** — timeline of roles at Glascutr, Ehsan Marketing, and Ferntech
- **Projects** — selected work (e-commerce microservices, SOFTIFE SaaS ERP, AI tooling, Playwright TestKit, FlexFactory/Ritmise)
- **Skills** — full technical stack + education
- **Contact** — email, phone, and social links

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:5173
npm run build   # type-check + production build to dist/
npm run preview # preview the production build
```

## Tech

- **React 18** + **TypeScript**
- **Vite 6** for build tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) with a custom brand palette
- Scroll-reveal animations via `IntersectionObserver`, no animation libraries
- Fully responsive, dark-themed, zero external runtime dependencies

## Editing content

All resume content lives in [`src/data.ts`](src/data.ts) — update that one file to change the profile, competencies, experience, projects, skills, or education.
