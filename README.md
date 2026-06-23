# Relax & Restore Massage — Website (Direction 01 · Serene)

Marketing site for **Lisa's Relax & Restore Mobile Massage** (Lower Earley, Reading).
Single-page Astro site with an enquiry form. Built to the
[handoff spec](https://github.com/Brettjo77/relax-and-restore-website/blob/main/handoff/Relax-and-Restore-Website-Spec.md),
layout **Direction 01 · Serene** — a calm, centred vertical scroll with a transparent→solid
sticky top nav, arched portrait, card-based treatments and a sage benefits band.

> This is **one of three layout options** built for Lisa to choose from. The others are
> Direction 02 · Boutique Luxe and Direction 03 · Modern Botanical. They share identical
> content, tokens and components — only the layout structure & emphasis differ.

## Stack

- [Astro](https://astro.build) (static output) with `astro:assets` for responsive WebP/AVIF images.
- No JS framework — a little vanilla JS for the nav and form.
- Hosted on **GitHub Pages**; the enquiry form submits to **Formspree** (Pages has no backend).

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

Requires Node 20+.

## Editing content

Almost all text, services, prices, and contact details live in
[`src/data/site.js`](src/data/site.js). Values in `[brackets]` are **placeholders
awaiting confirmation from Lisa** — update these before launch:

- Real prices per treatment/duration (currently `from £—`).
- Phone number, business email, opening hours.
- The `tel:` and `mailto:` hrefs.

## Contact form (Formspree)

GitHub Pages is static-only, so the form posts to [Formspree](https://formspree.io)
instead of Netlify Forms. Before launch, create a Formspree form and set
`FORMSPREE_ENDPOINT` in [`src/components/ContactForm.astro`](src/components/ContactForm.astro)
(currently `https://formspree.io/f/REPLACE_WITH_FORM_ID`). Client-side validation and the
in-place thank-you state work without it.

## Deploy (GitHub Pages)

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds and publishes to Pages. In the repo: **Settings → Pages → Build and deployment
→ Source = GitHub Actions** (one-time). The site serves from
`https://brettjo77.github.io/relax-and-restore-serene/` — this path is set as `base` in
[`astro.config.mjs`](astro.config.mjs). For a custom domain later, set `site` to the domain
and `base` to `'/'`.

## Pre-launch checklist

See spec §15–16. Outstanding: real prices, contact details, the Formspree form ID,
higher-res photos, any qualifications/insurance to display, and final domain.
