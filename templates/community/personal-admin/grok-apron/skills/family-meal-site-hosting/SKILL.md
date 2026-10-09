---
name: family-meal-site-hosting
description: "Preview-first then permanent family meal link: quality bar (real meal cards with images and collapsible recipes), Modify notes + auto-wired feedback webhook, hero mosaic from meals[], stock photos for week-one share, phase/ visibility contract, canned site kit copy-first, preferred bot-hosted path; DIY Cloudflare Pages is power-user only."
---

# Family meal site hosting

Use when offering a **stable always-on** family meal link after preview, or when setting up optional DIY Pages hosting as a power-user path.

## Product order
1. **Preview first** (getting-started): bot-hosted or short-lived link + chat/print fallback — **no** user cloud account, no API keys in the first session.
2. **Permanent later** (this skill): stable URL for weekly routines and partner sharing.

Quick tunnels (`*.trycloudflare.com`) are **not** permanent. Prefer **bot-hosted preview** first; keep DIY Cloudflare (or similar) as **power-user only**.

## Anti-PII
Site copy, sample data, and demo fixtures must not embed the template author’s name, hometown, store number, or other personal PII. Importer households bring their own locked store and headcount from Getting started.

## Always build (hard rule)
Never ask the owner whether they want a website. Scaffold during onboarding, fill meals, wire feedback, and share the preview. Chat/print is fallback if hosting fails — not an opt-in question.

## Feedback wiring (hard rule)
Before calling a preview “ready”:
1. **Meal plan site feedback** is enabled — Getting started arms it **after** the last preference question and a short explainer (not at hello). Never ask pause/resume / on-off.
2. Site `config.js` includes the live webhook URL + key for **this** household — **auto-wired** from this bot’s feedback routine sidebar / automation fields. **Never ask** the importer for URL or key.
3. Modify requires a note in the UI; payloads include `modifyNote`.
4. Delivery prefers same-origin `/feedback` proxy (or simple-request retry). **Do not** treat paste-to-chat CORS fallback as primary success.

Empty webhook + “feedback paused” labels are publish bugs for a reviewable preview.

## Preview / site quality bar
Every dinner on the **first preview** and on the permanent site must include:
- A **recipe image** (no empty frames) — **stock/category photos for week one**
- **Ingredients** as a collapsible section
- **Instructions** as a separate collapsible section
- Night / time / servings chips (and protein form when known)
- Keep / **Modify (required note)** / Replace controls that can reach the bot

Titles-only previews are incomplete — **fix before sharing**.

### Week-one share early (hard rule)
Share the preview as soon as `meals[]` + wired webhook + **stock images** exist. Prefer stock photos for first wow if custom plates would delay the link. **Do not** call GenerateImage / wait on custom plated shots for week one. **Do not** block the ready link on custom plates. Polish later if needed.

### Hero mosaic (hard rule)
Hero / header mosaic must match this week’s `meals[]` image assets before ready. Never ship broken hardcoded kit paths (shrimp/taco demo filenames) when meals have images.

### Family name branding (hard rule)
First ready preview must show onboarding `householdName` in header brand, title, and footer (kit `applyHouseholdBranding()`). Fallback **Your kitchen** / **Family Table** only when they skipped the name.

## Phase / visibility contract (required)
Bake this funnel into every site the bot builds. Full UX detail lives in **Family meal site flow**; hosting must not ship a site that violates it.

1. **Approve / review dinners** — Show each dinner as a **real card**: title, image, short blurb, expandable/collapsible ingredients, expandable/collapsible instructions, Keep / Modify (with required note) / Replace. Meals **MUST** be visible in the HTML/JSON data (not empty “reference” stubs). **Never** show “locked” (or “This week’s dinners (reference)”) with **zero** dinner cards.
2. User can modify/replace, then **lock week**.
3. **Grocery review** — pantry checklist (checked = buy). **Edit dinners** go-back unlocks the week.
4. **Approve grocery list**.
5. **Build cart** (optional) — then show an **open-cart** link; **never** auto-checkout.

Also require:
- First preview / first publish includes **real meal content** with images + collapsible ingredients + instructions.
- If phase is grocery or cart, **still keep dinner cards visible** as reference **or** clearly show them in a dinners section that is **not empty**.
- Data model: week JSON must include `meals[]` with name, night, image, ingredients[], steps[], etc., and the UI **must render that array**. An **empty `meals` array is a publish bug** — fix before sharing the link.

## Preferred permanent path
Shared multi-tenant meal app (per-household URL) or other bot-hosted permanent link. Owner never creates Cloudflare/Netlify or pastes API keys for the default path. Prefer hosting that can offer a same-origin `/feedback` proxy.

## Power-user escape hatch
DIY Cloudflare Pages (or similar) with `/feedback` + webhook secrets **only** if they explicitly want it. Never block first-week value on this. Never reuse another household’s project, webhook, or deploy credentials.

## Parallel scaffold during onboarding
Copy the **Family meal site kit** canned shell as soon as onboarding starts (placeholders OK; do **not** arm feedback yet). Bake onboarding `householdName` into household settings so the first ready preview shows the family name in header/footer brand (not generic-only when a name was given). After the store is locked, fill real `meals[]` from the weekly ad while remaining questions answer (Balanced draft; patch 1–2 if adventurousness changes). After the end-of-onboarding feedback explainer, arm Meal plan site feedback and auto-wire webhook. Fill hero mosaic from meal images (stock). Do not present the link as ready until dinner cards are visible, feedback is wired, branding shows `householdName`, and mosaic matches `meals[]` — but do **not** wait on GenerateImage.

## Guided build language (chat)
When publishing, narrate in plain steps (weekly ad → meals on ad savings → website to review/modify/lock → grocery → optional cart). Do not open with hosting jargon. Do not ask permission to build the site.

## Do not
- Ask whether they want a website
- Arm Meal plan site feedback at hello / before the end-of-onboarding explainer
- Ship a ready preview without onboarding family name in the visible brand when a name was given
- Ask the importer for webhook URL or key
- Force cloud setup in first-run onboarding
- Call tunnels permanent
- Ship previews without images + collapsible ingredients/instructions
- Publish with empty `meals[]` or a “reference” dinners section with no cards
- Publish with feedback paused or empty webhook wiring
- Treat paste-to-chat as the happy path when CORS fails
- Ship hero mosaic with stale hardcoded filenames when `meals[]` has images
- Block week-one ready link on GenerateImage / custom plates
- Allow Modify without a required note
- Show locked/grocery/cart phases without visible dinner content
- Share one household’s project/webhook with another
- Auto-checkout or pay unless explicitly asked
