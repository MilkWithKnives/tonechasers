# toners — Handoff Notes

> Read this first. Context for picking up the **Tone Chasers** guitar-shop pitch site.
> Last updated: 2026-06-15.

## What this is
A **SvelteKit pitch/spec site** to win **Tone Chasers Music** (a vintage & heavy-metal
guitar shop in Grand Rapids, MI) as a web client. It is **a pitch demo, not the booked
real build** — keep it simple and impressive. The owner is Paul Bittner; their real
(Wix) site is https://www.tonechasersmusic.com, address 121 Division Ave S, Grand Rapids,
phone (616) 381-9611.

The site author/seller is **Full Scope Media** (the user's own business — see the other
project). The pitch angle is "fast, custom, low-maintenance, cheap to host — no page-builder
lock-in."

## Status: built & working, NOT deployed, NOT git-init'd
- `pnpm install`, `pnpm build`, and `pnpm check` all pass clean (0 errors, 0 warnings).
- Fully **prerendered static site** (adapter-static) → deploys free to Netlify / Vercel /
  Cloudflare Pages. That's the deliberate "low-maintenance / no server" pitch.
- **Not** a git repo yet (user hadn't asked to `git init` as of this writing).
- **Not** deployed anywhere yet.

## Stack
- SvelteKit 2 + **Svelte 5 (runes)** + TypeScript
- **Tailwind CSS v4** (`@tailwindcss/vite`) + DaisyUI v5 (Daisy barely used; design is custom Tailwind)
- `@sveltejs/adapter-static`, fully prerendered (`export const prerender = true` in `src/routes/+layout.ts`)
- **pnpm** is the package manager (user preference — use pnpm, not npm/yarn).
  Shim path if PATH is missing it: `/usr/share/nodejs/corepack/shims/pnpm`.

## Design direction
Modeled on the **Capo** Framer template (https://capo.framer.website/) for structure/IA,
but skinned dark + edgy to match Tone Chasers' vintage/metal brand:
- Near-black bg `#0a0a0a`, single hot-red accent (`red-600`), thin `stone-800` borders.
- Headings: **Oswald** (bold, condensed, uppercase). Body: **Inter**. Both Google Fonts.
- The "premium" feel is art direction, not a component library.

## File map
- `src/lib/guitars.ts` — **the inventory** (single source of truth). 8 sample items with
  `slug, brand, model, year, price, category, condition, finish, blurb, description, specs,
  image, status, featured`. Helpers: `getGuitar`, `formatPrice`, `categories`.
- `src/lib/GuitarImage.svelte` — image with a designed dark placeholder fallback (shows
  brand/model until a real photo loads or if one is missing).
- `src/routes/+layout.svelte` — dark sticky nav + footer (real TC address/hours/phone).
- `src/routes/+page.svelte` — Capo-style homepage (hero, shop-by-category, featured,
  Buy·Sell·Trade·Consign, Now Available, story, services, CTA).
- `src/routes/shop/+page.svelte` — grid with client-side category filter via `?category=`.
- `src/routes/shop/[slug]/` — product detail; `+page.ts` has `entries()` for prerender +
  404 guard. Detail page's "Inquire" button deep-links to `/contact?guitar=...` (prefills form).
- `src/routes/{sell-trade,services,about,contact}/+page.svelte` — supporting pages.
- `static/guitars/*.jpg` — product photos.

## IMPORTANT gotchas
1. **Prerender + searchParams:** you CANNOT read `url.searchParams` during static prerender
   (it throws). `shop` and `contact` guard it with `import { browser } from '$app/environment'`
   and only read params client-side. Keep that pattern for any new query-param page.
2. **Placeholder images:** `static/guitars/*.jpg` are **free Pexels stock photos**, NOT the
   real instruments — they're generic guitars that don't actually match the model names in
   `guitars.ts`. Fine for showing design; swap in Tone Chasers' real product photos for
   production. `svelte.config.js` has a `prerender.handleHttpError` that ignores missing
   `/guitars/*` so the build never fails on a missing photo.
3. **Contact form is not wired to send.** `src/routes/contact/+page.svelte` posts to
   `https://formspree.io/f/your-form-id` — replace with a real Formspree (or similar)
   endpoint to make it live. No server needed (keeps it static).
4. **Shell is zsh, not bash** — `declare -A` / `${!arr[@]}` associative-array syntax fails.
   Use plain loops over `"key:value"` strings.

## Suggested next steps
- [ ] `git init` + first commit (user may want this).
- [ ] Swap stock photos for real Tone Chasers inventory shots + real listings in `guitars.ts`.
- [ ] Wire the contact form to a real Formspree endpoint.
- [ ] Deploy to Netlify/Vercel/Cloudflare Pages (static) for a live pitch link.
- [ ] Optional design steer: push more aggressive/metal vs. more refined/vintage per user.

## Run it
```bash
cd /home/starryveck/toners
pnpm install      # if node_modules missing
pnpm dev          # preview
pnpm build        # static output -> build/
pnpm check        # type-check
```

## Related context
- **Other project — Full Scope Media** at `/home/starryveck/Projects` (a real estate
  photography SvelteKit site, the user's own business; has its own `CLAUDE.md` and git
  history). Note: `/home/starryveck/Projects` is the Full Scope git repo AND contains
  unrelated subfolders (e.g. `rdap`, a third-party Go clone). Don't run destructive commands
  at that level.
- **Persistent memory** for these projects lives at
  `/home/starryveck/.claude/projects/-home-starryveck-Projects/memory/` (see `MEMORY.md`
  index) — includes `toners-tonechasers-pitch.md` and `pnpm-preference.md`.
