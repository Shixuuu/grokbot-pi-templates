---
name: weekly-family-meal-plan
description: "Plan weekly dinners from the locked store ad, publish the meal site, grocery review, optional cart. Portable importer version (v12: Balanced default, silent 8am, auto webhook after end explainer, free-text nights, stock photos week one, householdName branding)."
---

# Weekly family meal plan

Plan the household's weekly meals from the preferences captured by **Getting started**. Use the household's locked grocery store from Getting started, its weekly ad, its feeds-N/headcount, meal count, nights, dietary rules, kid preferences, adventurousness, and taste ledger. Publish through **Family meal site flow** and follow its visibility and approval contract.

## Operating defaults
- Prefer active cook time under 45 minutes when practical; state longer exceptions.
- Scale every recipe and grocery quantity to the onboarding headcount (feeds-N).
- Use the adventurousness dial: Familiar, **Balanced (default)**, Curious, or Adventurous — the option label must include the word `(default)` next to Balanced. Mix approachable and stretch meals according to the level.
- Meal nights come from onboarding **free text** (no day multi-select options); pin dinners to those nights or Flexible.
- Keep kid-friendly outs when requested: a plain side, skip spicy elements, or build-your-own components.
- Use original recipes and concise meal-kit-style teaching; never copy proprietary card wording.
- Treat the locked store as the only store for the cycle. Do not invent ad items, prices, or inventory.
- **Weekly ad meal plan** is silently armed at **8:00 local** on the locked chain’s usual weekly-ad weekday (common knowledge / lookup; if unknown use Wednesday). Do not ask a cadence question card; one light aside with day+time is enough.
- **Feedback webhook** is auto-wired from this bot’s Meal plan site feedback routine fields into site `config.js` — never ask the importer for URL/key. Empty webhook = publish bug.
- **Week-one images:** use stock/category photos; do not call GenerateImage or block the ready link on custom plates. Share as soon as `meals[]` + wired webhook + stock images exist. Hero mosaic must be data-driven from `meals[]` images.
- **Family name branding:** first ready preview must show onboarding `householdName` in header/footer brand (kit `applyHouseholdBranding()`); not generic-only when a name was given.

## Weekly planning loop
1. Load onboarding preferences, current headcount, adventurousness, dietary constraints, taste ledger, recent cooldowns, and the household's locked store.
2. Pull that store's current weekly ad and identify useful sale items, checking form, labels, and availability.
3. Draft the onboarding number of meals for the selected nights, sharing ingredients where useful.
4. Apply variety, sale-fit, taste, diet, time, and kid-escape checks; reserve stretch craft for the dial-appropriate meals.
5. Write complete cards, then run **Blue Apron QC Option A** before publishing.
6. Build the consolidated grocery list from the approved draft and publish a non-empty preview with **feedback webhook auto-wired**, Modify **required notes**, hero mosaic from `meals[]` images, and **stock** photos for week one.
7. Follow the site review flow: keep/modify/replace, lock week, review groceries, approve the list, then optionally build a cart.
8. After cooking, record ratings and notes in the taste ledger; use them in the next cycle.

## Blue Apron QC — Option A
Run all three checks for every new or changed meal.

### Skill hard rules
- **Form × verb:** declare the protein form and make it agree with the method (for example, raw sausage can brown and crumble; fully cooked links cannot stand in for that raw-craft verb).
- Protein forms should be explicit and consistent between card and grocery line: raw fresh, frozen raw, raw links/raw sausage, or cooked convenience.
- Cooked convenience is allowed only on Familiar or shortcut meals.
- Stretch meals require raw craft when protein-forward: sear, roast from raw, brown and crumble, or another named technique.
- Sale is an opportunity, not a reason to violate form, technique, diet, or taste constraints.
- Grocery lines must match the card's form; add a substitute plan for OOS-prone items.

### Draft gate
Before publish, confirm: every meal has a form that matches its verbs; stretch meals use raw craft; sales pass the form test; active time and dietary/kid rules are respected; and cards and grocery lines agree. Any failure means revise, not publish.

### Card requirements
Each card includes title, night, image, short blurb, feeds-N, active/total time, ingredients, numbered timed steps with heat/vessel cues, visual doneness, plating, protein form, dietary/allium notes when relevant, kid notes, and an efficiency or prep tip. Surface one named stretch technique as the week's teaching skill when useful.

## Variety and taste ledger
- Rotate cuisine lanes, proteins, methods, textures, and colors across the week and recent history; aim for broad variety rather than four near-duplicates.
- Observe cooldowns for repeated hero dishes, protein-plus-method combinations, and back-to-back cuisine lanes.
- `loved` is a strong preference, `good` a soft preference, `meh` a soft avoid, `never` a hard ban, and `skipped`/didn't cook is neutral.
- Plan approval is not a taste rating. Ledger notes are soft guidance; hard bans still win.
- Use sale items only when they fit the intended dish and form; never force a wrong-form bargain into a stretch meal.

## Site funnel
Use **Family meal site flow** as the contract:
1. **Review meals:** publish real cards with images, blurbs, collapsible ingredients, and collapsible instructions. Offer Keep, Modify (**short note required**), and Replace. Keep the week unlocked. Feedback routine enabled; webhook **auto-wired** (never ask URL/key). Prefer same-origin `/feedback` proxy or simple-request retry — paste-to-chat is last-resort emergency only, never the primary success path.
2. **Lock week:** lock only after meal review. Keep the cards visible; lock is not permission for an empty reference area.
3. **Review groceries:** derive a consolidated list from locked meals and household preferences. `checked = buy`; pantry items can be unchecked. Editing dinners unlocks the week.
4. **Approve groceries:** require explicit grocery approval; dinner approval is not grocery approval.
5. **Optional cart:** build pickup or delivery at the locked store only after grocery approval, then show an open-cart link. Never checkout or pay unasked.

First preview and every later phase must retain visible dinner cards. An empty `meals[]`, title-only preview, missing image, missing collapsible recipe sections, unwired webhook, stale hardcoded hero mosaic when meals have images, paste-fallback treated as success, or Modify without a required note is a publish bug; repair and republish before sharing. Do not block week-one ready on GenerateImage.

## OOS, label failure, and meal impact
When shopping or assembling a cart:
1. Try the planned item with the correct form and labels.
2. If OOS or label-failing, find a same-form, label-safe substitute and record it.
3. Recheck the substitute and update the card/list if needed.
4. If no viable substitute exists, classify the impact. Drop optional garnish or stock-up items with a note; for a structural hero protein or essential starch, do not silently drop it. Explain the meal impact and offer a meal swap, an unlocked edit, or an approved alternative.

## Safe boundaries
- Do not checkout, pay, place an order, or send a grocery message without the household's explicit request.
- Do not use another household's store, site, webhook, credentials, or data.
- Do not expose secrets in recipe data or published site content.
- Do not treat a plan lock as a taste preference or silently rewrite the current week when only a dial setting changes.
- Do not leave Meal plan site feedback paused after onboarding.
- Do not ask the importer for webhook URL/key or a planning-cadence card.
- Do not treat CORS paste-to-chat as primary success when a proxy/simple-request path exists.
- Do not block week-one ready link waiting on custom GenerateImage plates.
