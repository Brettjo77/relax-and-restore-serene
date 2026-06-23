# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

One of **three layout options** for Lisa's Relax & Restore massage site, built so she can
pick a direction. This repo is **Direction 01 · Serene** (spec §6/§8). The other two live in
separate repos (`relax-and-restore` / Boutique Luxe, `relax-and-restore-botanical`). All three
share identical **content, design tokens and components** — they differ only in **layout
structure & emphasis**.

The authoritative build spec (content §7, tokens §2, per-direction deltas §8) lives in the
original handoff repo: https://github.com/Brettjo77/relax-and-restore-website (`handoff/`).
It is the source of truth; this repo does not carry a copy.

Astro static site. `npm install`, `npm run dev` (localhost:4321), `npm run build` (→ `dist/`),
`npm run preview`. Node 20+.

## Where things live

- **All copy, services, prices, contact details:** [src/data/site.js](src/data/site.js) — single source of truth. Edit content here, not in components. `[bracketed]` values are placeholders awaiting real values from Lisa (prices, phone, email, hours, tel:/mailto:). Keep them visibly placeholder; don't fabricate.
- **Design tokens (closed colour/type set):** [src/styles/tokens.css](src/styles/tokens.css). Do not invent new colours. Fonts: Cormorant Garamond / Sacramento / Mulish.
- **Image assets + alt text:** [src/data/images.js](src/data/images.js) maps `site.js` keys to assets in [src/assets/img/](src/assets/img/) (resolved via `astro:assets`).
- **Sections:** one component each in [src/components/](src/components/), assembled in [src/pages/index.astro](src/pages/index.astro).
- **`<head>` / SEO / JSON-LD:** [src/layouts/Base.astro](src/layouts/Base.astro).

## Serene layout specifics (spec §8 Dir 01)

- **Centred sticky top nav** ([Nav.astro](src/components/Nav.astro)) — transparent over the hero, flips to solid cream on scroll (state + mobile toggle JS in [index.astro](src/pages/index.astro)). No sidebar.
- **Hero:** centred, logo mark + script/serif split headline ("Wellness for body, mind & soul."), cream gradient overlay, offer chip, two CTAs.
- **About:** arched portrait (`border-radius:200px 200px 14px 14px`) with a 1.5px `--line` offset border behind it.
- **Services:** two cards side by side (image top, content below), soft 16px radius, card shadow, on cream.
- **Benefits band:** `--sage-deep`, 3×2 grid, circular outline icons.
- **Accent is `--sage`** (not gold). Buttons use `.btn--sage`.

## Contact form → Formspree (GitHub Pages)

Hosted on **GitHub Pages** (static, no backend), so the form posts to **Formspree**, not
Netlify Forms. The endpoint placeholder `FORMSPREE_ENDPOINT` in
[ContactForm.astro](src/components/ContactForm.astro) must be set to Lisa's real form ID
before launch. JS validates required fields and **email-OR-phone**, POSTs via AJAX, then swaps
in the in-place thank-you (`role="status"` / `aria-live="polite"`) — no navigation.

## GitHub Pages config (don't break this)

Project site at `https://brettjo77.github.io/relax-and-restore-serene/`. `site` + `base` in
[astro.config.mjs](astro.config.mjs) must match the repo path or CSS/images 404 on the live
site. Asset hrefs in Base.astro are prefixed with `import.meta.env.BASE_URL`; keep new
absolute asset paths base-aware. Deploy is [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
(build → upload-pages-artifact → deploy-pages) on push to `main`.

## Cross-cutting requirements (from the spec — don't skip)

- **Accessibility (§13):** semantic landmarks, single `<h1>` (hero), labels on every input, radios in `<fieldset><legend>`, visible focus rings, `aria-live` success.
- **Responsive (§12):** breakpoints ≥1024 / 640–1023 / <640; 2-col grids collapse to 1-col; top nav → hamburger; fluid type via `clamp()`.
- **Performance/SEO (§14):** responsive WebP/AVIF, font preconnect, `loading="lazy"` below the fold, width/height to avoid CLS, LocalBusiness JSON-LD, favicon/apple-touch-icon from logo.png. Target Lighthouse ≥ 90.
- **Reduced motion (§11):** wrap non-essential motion in `@media (prefers-reduced-motion: no-preference)`.
- Images in `src/assets/img/` are low-res social crops — replace with higher-res originals pre-launch. `lisa.png` uses `object-position: center top`.
