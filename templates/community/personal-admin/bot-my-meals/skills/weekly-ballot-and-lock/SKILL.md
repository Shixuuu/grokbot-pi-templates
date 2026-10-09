---
name: weekly-ballot-and-lock
description: "Use when proposing, swapping, or locking a Bot My Meals week, or when the app shows Waiting for your Bot / a pending ballot request."
---

# Weekly ballot and lock (Bot My Meals)

Use when the household needs a new week’s dinners, when someone swaps or removes a night, when they ask to lock, or when the app shows Waiting for your Bot… / a pending ballot request.

## Propose
- Read household preferences, stores, and prior menus from memory.
- Before drafting: honor **Saved meals** (see below / `docs/saved-meals.md` on the app repo).
- Identify the **week** you are filling (`week_id` / `starts_on`) — cooking vs planning. Cap is **one cooking + one planning**; never assume a singleton “current” week.
- **Edit nights / People:** For that `week_id`, read **`weeks.night_headcounts`** and **`weeks.special_instructions`**, plus **`ballot_requests.special_instructions`** on the pending ballot. Empty instructions = nothing extra. After the house re-saves **Edit nights**, re-read those fields for that week — do not keep House defaults or an older snapshot. Do not write week plates/notes back onto House defaults.
- Propose 7 nights (or fewer if they have Off nights): **titles** (+ who eats / servings from headcounts, rough time, one-line pitch). Pending ballot = titles first; no full recipes yet.
- Vary weeks. Do not repeat last week’s menu unless they ask.

## Empty Next week (People gate)
- Do not fulfill a planning-week ballot until People per night is saved for that week (gate first; then ballot). Same order when Saved → Request for next week creates a new planning row.

## Overlapping weeks
- Home = cooking week; planning week is the single allowed next week.
- Fulfill `ballot_requests` for the pending week only. Full recipes + shopping lists only after **that** week locks — do not bleed into the other week’s list.
- Waiting / Check now / Wake hints should name which week when both are open.

## Webhook-only Waiting
- Wake = webhook POST on week/plan changes (and Check now when configured). On wake / Check now / lock / `needs_work`, fulfill **that** `week_id` immediately.
- Stay quiet when idle / nothing to fulfill.

## Saved meals
- Household-shared pool — not a private shelf, not a promise every week.
- Cool-down: **21 days** after `last_locked_at` before random re-suggest. Saving does not start the clock. **Request for next week** targets the **planning** week and bypasses cool-down.
- When fulfilling a ballot: include every `ballot_requests.saved_recipe_keys` / `saved_meals.requested_for_week` for that week.
- Optionally sample from `saved_pool_keys` / eligible pool (`last_locked_at` null or ≥21 days ago, no outstanding request).
- Stamp `recipes.recipe_key` when writing dinners back so future saves match.
- Never invent grocery prices or cart claims from the pool.

## Solo or multi-approve
- Members approve, swap, or remove on their phones. Untouched dinners stay as proposed.
- Lock only when the product allows (swaps and dinner requests cleared). Do not force lock early.
- After lock: full recipes (servings, time, ingredients with amounts, numbered steps) + shopping list grouped by their preferred store labels **for that week**.
- Never invent grocery prices. Mention cart adds only when a verified path for that store exists.

## Ballot requests
- When the app has a pending ballot request (Create this week’s meals / plan next week → Waiting for your Bot…), fulfill it promptly for the named week (titles + headcounts/special_instructions), then confirm in chat.
- Stay quiet when idle — no poll loops.
