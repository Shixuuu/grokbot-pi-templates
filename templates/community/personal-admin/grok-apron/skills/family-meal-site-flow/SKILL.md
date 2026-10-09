---
name: family-meal-site-flow
description: "Portable meal-site phase and UX recipe for importers: approve dinners with real cards, Modify requires a note, auto-wired feedback webhook (never ask URL/key), lock week, grocery review, approve list, optional cart — plus meals[] visibility, hero mosaic from meal images, same-origin feedback proxy preferred. No author household PII; no store defaults."
---

# Family meal site flow

Portable phase / UX recipe for the family meal website any importing bot builds. Pair with **Getting started** (prefs + narrated first build) and **Family meal site hosting** (preview vs permanent).

**No author PII. No default store, city, ZIP, or household names.** The locked store and `headcount` come from this importer’s onboarding answers only.

## Anti-PII
Do not bake sample meals, addresses, or widget defaults from a prior owner or the template author into the site. Demo fixtures, if any, must be clearly fictional generics — never a real person’s name, school, phone, email, or a specific real store number presented as “your store”.

## Feedback webhook (hard rule)
- **Meal plan site feedback** must be **enabled** (never left paused by choice). Getting started arms it **after** the last preference question + short explainer (not at hello). Never ask pause/resume / on-off.
- **Auto-wire** live `webhookUrl` + `webhookKey` from **this bot’s** feedback routine sidebar / automation fields into site `config.js` after that late arm. **Never ask** the importer for the webhook URL or key mid-onboarding.
- Every published site must set those live values so Keep / Modify / Replace / lock / grocery / cart / ratings reach the bot.
- Empty webhook config is a **publish bug**.

### Webhook delivery (hard rule — no paste-as-success)
Direct browser POST to cross-origin Grok Bot webhooks often fails CORS. Required publish path:
1. **Preferred:** same-origin `/feedback` proxy that server-forwards to the webhook with the Authorization header, **or**
2. A **simple-request retry** (e.g. `Content-Type: text/plain` body = JSON string that includes `webhookKey` / `authorization` in the JSON) that still delivers without user paste — the bot webhook must accept this form when no proxy exists.

**Ban:** treating “Browser blocked the direct ping… paste into Meal Planner / Grok Apron chat” as an acceptable **primary** success path. Copy-to-chat is **last-resort emergency only** and must **not** be the default message when CORS fails if a proxy or simple-request path exists. Success UI only when POST actually succeeds (do not claim success on opaque no-cors).

## Data model (week JSON)
Every published week **must** include a non-empty `meals` array when dinners have been planned. Each meal object should carry at least:
- `name` (title)
- `night` (or equivalent scheduling field) — from onboarding free-text nights
- `image` (**required**; URL or asset path; no empty frame)
- `blurb` / short description
- `ingredients[]`
- `steps[]` (instructions)
- Optional: time, servings / feeds-N, protein form, kid notes

The UI **must render `meals[]`**. An empty `meals` array after planning is a **publish bug** — fix and republish before sharing the link. Never ship a “This week’s dinners (reference)” block with zero cards.

### Hero / header mosaic (hard rule)
Hero/header mosaic **must** use current-week meal `image` fields from `meals[]`. Never leave broken hardcoded paths (e.g. stale `assets/lemon-butter-shrimp-…jpg` / taco filenames) when meals have images. Empty `assets/` while HTML still points at old kit filenames is a publish bug. Placeholder gradient / empty state only if no meals yet.

### Week-one images (hard rule)
Share early with **stock/category photos**. Do **not** block the ready link on custom GenerateImage plates for week one. As soon as `meals[]` + wired webhook + stock images exist, share the preview.

### Family name branding (hard rule)
Bake onboarding `householdName` into `household-settings.js`. Kit must apply it via `applyHouseholdBranding()` to header `.brand` (text, aria-label, brand-mark initial), `document.title`, footer brand + blurb, and meta description when easy. First ready preview must show the family name — not generic-only “Family Table” when a name was given. Fallback **Your kitchen** / **Family Table** on Skip.

## Required site phases

### Phase 1 — Approve / review dinners
- Show **each** dinner as a real card: title, image, short blurb, collapsible ingredients, collapsible instructions.
- Controls per card: **Keep** / **Modify** / **Replace**.
- **Modify requires a note (hard rule):**
  - Choosing Modify reveals a required textarea (“What should we change?”).
  - Approve / submit / lock must **block** if any meal is marked Modify with an empty/whitespace note.
  - Show a clear error naming which nights still need a note.
  - Include `modifyNote` on each modify decision in the webhook payload.
- Week stays unlocked until the user locks it.
- **Never** display “locked” with no dinner cards visible.

### Phase 2 — Lock week
- After the user is happy (or has finished modify/replace cycles), **lock week**.
- Locked means grocery can proceed — **not** that dinner UI may go blank.
- Dinner cards remain available as the source of truth for the grocery list.

### Phase 3 — Grocery review
- Pantry-style checklist: **checked = buy** (or equivalent clear affordance for “already have”).
- Consolidated list derived from locked `meals[]` + household prefs.
- **Edit dinners** (go back) **unlocks** the week and returns to Phase 1.

### Phase 4 — Approve grocery list
- Explicit approve before any cart work.
- Do not treat dinner-approve as grocery-approve.

### Phase 5 — Build cart (optional)
- Offer to build a pickup/delivery cart at the **locked** store only after grocery approve.
- Show an **open-cart** link when ready.
- **Never** auto-checkout or pay unless the user explicitly asks.

## Visibility rules (all phases)
- First preview / first publish: real meal content with images + collapsible ingredients + instructions.
- Grocery and cart phases: keep dinner cards visible as reference **or** a clearly labeled dinners section that is **not empty**.
- If the UI would show a locked/reference dinners area with no cards, treat it as a bug: repair data + republish before telling the user the link is ready.

## Chat narration (aligned with hosting)
When moving from saved prefs into the first publish, say in plain language that you are:
1. Pulling this week’s **weekly ad** for their locked store
2. Designing meals that lean on **ad savings**
3. Publishing dinners to a **website** to review, modify, then lock
4. Then grocery list → approve → optional cart

Never ask if they want the website — build and share it.

## Do not
- Pre-populate store, ZIP, or names from the template author
- Invent locator results
- Ask the importer for webhook URL or key
- Publish empty `meals[]` or meals missing `image`
- Ship hero mosaic with hardcoded stale kit filenames when `meals[]` has images
- Treat CORS paste-to-chat as the primary success path
- Allow Modify without a required note
- Publish with feedback routine paused or empty webhook wiring
- Hide all dinner cards after lock / grocery / cart
- Block week-one ready link waiting on GenerateImage / custom plates
- Auto-checkout
- Ask permission to build the site
- Arm Meal plan site feedback at hello / before the end-of-onboarding explainer
- Ship a ready preview without onboarding `householdName` in the visible brand when a name was given
- Block first-week value on DIY cloud hosting
