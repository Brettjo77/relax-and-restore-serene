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

Live at the **custom domain** `https://www.lisasrelaxrestoremassage.co.uk`, served at the
root. In [astro.config.mjs](astro.config.mjs), `site` is that domain and **`base` is `'/'`** —
do NOT set `base` back to `/relax-and-restore-serene/`. The domain is claimed by
[public/CNAME](public/CNAME); deleting that file drops the site back to the
`brettjo77.github.io` project path and breaks every asset.

Asset hrefs in Base.astro are still prefixed with `import.meta.env.BASE_URL` (harmless at
`'/'`, and keeps the site portable); keep new absolute asset paths base-aware. Deploy is
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) (build → upload-pages-artifact →
deploy-pages) on push to `main` — a push publishes straight to Lisa's live site, so treat
`main` as production.

## Google Ads tracking + cookie consent (don't fire tags without consent)

Lisa runs Google Ads. The tag and its conversion labels live in `analytics` in
[src/data/site.js](src/data/site.js); labels are `[bracketed]` placeholders until she sends
the real ones, and an unset label deliberately fires nothing.

- The tag is set up in [Base.astro](src/layouts/Base.astro) with **Consent Mode v2 denied by
  default**, before the tag loads. [ConsentBanner.astro](src/components/ConsentBanner.astro) is
  the only thing that grants it (stored as `rr-consent` in localStorage). **Never fire ad tags
  or set advertising cookies before consent** — UK PECR/GDPR.
- `define:vars` wraps an inline script in an IIFE, so `function gtag()` is *not* global — it's
  assigned to `window.gtag` explicitly. Keep that, or the banner's Accept silently grants nothing.
- Conversions fire through `window.rrTrack(key)`: `'enquiry'` at the form's success point in
  [ContactForm.astro](src/components/ContactForm.astro) (after Formspree confirms — never on a
  failed send), and `'phone'` / `'email'` via a delegated `tel:`/`mailto:` listener. The privacy
  notice's mailto is excluded on purpose: it's a data-deletion request, not a lead.
- There is **no thank-you URL** to track — the form swaps its success state in place — so
  conversions must be fired in JS. Don't expect Google's page-load method to work here.
- If you change what data is collected, update the privacy notice in
  [Footer.astro](src/components/Footer.astro) to match. It is Lisa's published statement.

## Cross-cutting requirements (from the spec — don't skip)

- **Accessibility (§13):** semantic landmarks, single `<h1>` (hero), labels on every input, radios in `<fieldset><legend>`, visible focus rings, `aria-live` success.
- **Responsive (§12):** breakpoints ≥1024 / 640–1023 / <640; 2-col grids collapse to 1-col; top nav → hamburger; fluid type via `clamp()`.
- **Performance/SEO (§14):** responsive WebP/AVIF, font preconnect, `loading="lazy"` below the fold, width/height to avoid CLS, LocalBusiness JSON-LD, favicon/apple-touch-icon from logo.png. Target Lighthouse ≥ 90.
- **Reduced motion (§11):** wrap non-essential motion in `@media (prefers-reduced-motion: no-preference)`.
- Images in `src/assets/img/` are low-res social crops — replace with higher-res originals pre-launch. `lisa.png` uses `object-position: center top`.
