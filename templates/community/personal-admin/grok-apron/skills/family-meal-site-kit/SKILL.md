---
name: family-meal-site-kit
description: "Use when scaffolding or republishing the family meal website: copy the canned HTML/CSS/JS shell, fill week JSON + stock images + auto-wired webhook config, data-driven hero mosaic from meals[], never rebuild the app from scratch."
---

# Family meal site kit

**Canned shell first.** Do not invent a new meal-site architecture each import. Copy a known shell, then only swap data (meals, household settings, plan status, taste ledger, webhook config, images).

## On this computer (author / demo box)

Preferred source directory when present:

`/workspace/grok-apron-site-kit/`

Copy these files into the household’s site folder (e.g. `/workspace/<household>-meal-site/`):

- `index.html`, `styles.css`, `app.js`
- `history.html`, `history.js`
- `print.html`, `print.js`, `print.css`
- stub data: `config.js`, `meals-data.js`, `plan-status.js`, `household-settings.js`, `taste-data.js`
- `assets/` (create empty; add this week’s recipe images — stock/category for week one)

If that directory is missing, reconstruct the same file set from a prior scrubbed household site on this box, or write the shell once from **Family meal site flow** rules — then reuse that copy forever. Never start from a blank invent-every-time approach.

## Fresh importer (no kit on disk yet)

1. Create the household site folder.
2. Write the shell files **once** implementing **Family meal site flow** (phases, Keep/Modify-with-required-note/Replace, grocery checklist checked=buy, Edit dinners unlock, optional cart link, webhook posts with simple-request retry / same-origin proxy).
3. Save that folder as the reusable kit for later weeks on this bot.
4. Every later publish: copy shell → overwrite only data files + assets.

## Data files only (every publish)

### `config.js`
**Auto-wire** live `webhookUrl` + `webhookKey` from **this bot’s** Meal plan site feedback routine sidebar / automation fields (never ask the importer) — after Getting started arms feedback at the **end** of onboarding (post-explainer). Also set household name / preview label. Empty `webhookUrl` is a publish bug. Feedback routine must be enabled before ready. Leave kit stubs empty; fill at publish time.

### `household-settings.js`
Export `window.MEAL_HOUSEHOLD_SETTINGS` (keep `window.HOUSEHOLD_SETTINGS` as an alias if needed) with: `householdName` (from onboarding family name, or fallback **Your kitchen** / **Family Table**), headcount, adventurousness (default Balanced / 2 — label **Balanced (default)**), locked store display fields (no author PII). Meal nights come from onboarding **free text**.

**Family name branding (hard rule):** first ready preview must show onboarding `householdName` in header `.brand` text + aria-label + brand-mark initial, `document.title`, footer brand + footer blurb (and meta description when easy). Kit `app.js` must call `applyHouseholdBranding()` on load. Do not ship generic-only “Family Table” when a name was given.

### `meals-data.js` / week JSON
Non-empty `meals[]` with name, night, image, blurb, ingredients[], steps[], time, servings, proteinForm as available. UI must render the array. Export as `window.MEAL_PLAN_MEALS` (and week id/label globals the shell expects).

### `plan-status.js`
phase: `approve` | `grocery` | `cart` (+ flags). First preview starts in `approve`. Prefer `window.MEAL_PLAN_STATUS`.

### `taste-data.js`
Prior ratings array (may be empty on week one). Prefer `window.MEAL_TASTE_LEDGER`.

### `assets/` + hero mosaic (hard rule)
One image per meal; no empty frames. **Hero mosaic must be data-driven from `meals[]` image fields** — `app.js` fills `.hero-mosaic` at runtime. Empty `assets/` is a bug if HTML still points at old shrimp/taco kit filenames. Placeholder gradient / empty state only when there are no meals yet.

### Week-one images (hard rule)
Prefer **stock/category photos** for first wow. Do **not** call GenerateImage or wait on custom plates before sharing the ready link. Share as soon as `meals[]` + wired webhook + stock images exist.

## Shell behavior checklist (must already be in app.js)

- Modify reveals required note; block approve/submit when note missing; include `modifyNote` in payload
- Webhook POST for decisions, lock, grocery, unlock, cart, ratings, settings
- **Webhook delivery:** prefer same-origin `/feedback` proxy; otherwise try normal CORS fetch then **one** simple-request retry (`Content-Type: text/plain`, JSON body including key). Bot webhook must accept that OR hosting must provide the proxy.
- User-facing errors: do **not** say “Browser blocked the direct ping (normal…)… paste into Meal Planner chat” as the happy path. If retry fails: short “Couldn’t reach Grok Apron — try again”; copy button secondary/emergency only. Success only when POST succeeds.
- Collapsible ingredients + instructions; dinner cards visible in grocery/cart phases
- Hero mosaic filled from current `meals[]` images
- No author household PII in titles, footers, or default copy — use this household’s name/store
- `applyHouseholdBranding()` applies `householdName` to header/footer brand, title, and related chrome on load

## Speed contract (with Getting started)

1. As soon as onboarding begins: copy the canned shell into the household folder (placeholders OK). **Do not** arm Meal plan site feedback yet. Bake `householdName` when the family-name answer arrives.
2. As soon as the store is locked: scrape the weekly ad and draft meals at **Balanced** while other questions continue; fill `meals-data.js` + **stock** images as they complete; refresh hero mosaic from `meals[]`.
3. After the last preference question + feedback explainer: arm Meal plan site feedback, auto-wire webhook into `config.js`, confirm branding via `applyHouseholdBranding()`, apply any adventurousness tweaks (at most 1–2 meals if Curious/Adventurous), QC, host, **share link immediately** — do not wait on GenerateImage.

## Do not

- Rebuild HTML/CSS/JS from scratch each week
- Ship author store / author email leftovers in the kit
- Ask the importer for webhook URL or key
- Share a ready link with empty `meals[]` or empty webhook
- Leave hardcoded shrimp/taco mosaic paths when meals have images
- Treat CORS paste-to-chat as primary success
- Block week-one ready link on custom GenerateImage plates
- Allow Modify without a required note
- Arm Meal plan site feedback at hello / before the end-of-onboarding explainer
- Ship a ready preview without onboarding `householdName` in the visible brand when a name was given
