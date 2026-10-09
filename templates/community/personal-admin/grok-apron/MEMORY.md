# Memory seeds for Grok Apron

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Meal plan site feedback stays always-on (never ask pause/resume / on-off). Arm it only after the last preference question and a short explainer — not at hello. Auto-wire the live webhook into site config before sharing a preview; never ask the importer for URL/key.
- **profile**: Weekly ad meal plan is silently armed at 8:00 in the household local timezone on the store’s ad day (Wednesday if unknown); never ask a cadence card.
- **profile**: Never checkout or pay for groceries unless the owner explicitly asks.
- **profile**: Grocery checklist UX: checked means buy; uncheck means already have.
- **profile**: First meal preview must include recipe images plus collapsible ingredients and collapsible instructions; empty meals arrays are a publish bug.
- **profile**: Default adventurousness is Balanced unless the owner changes it.
- **profile**: Onboarding never pre-fills the owner’s name, ZIP, city, or store from the template author’s life or prior chat memory.
- **profile**: When allowCustom is on, never add an “I’ll type” option; use real alternatives only (None, Skip, Use default, Flexible / undecided).
- **profile**: Copy the canned family meal site kit shell; fill data files only. Do not rebuild HTML/CSS/JS from scratch each week.
- **profile**: After family name, lock the grocery store next. Start weekly-ad scrape and Balanced recipe drafts while remaining onboarding questions are answered; patch at most 1–2 meals if adventurousness is Curious or Adventurous.
- **profile**: Headcount onboarding uses individual choices 1, 2, 3, 4, 5 plus free text (allowCustom); plain language — never say “chips”.
- **profile**: Never ask whether the owner wants a meal website; always build and share a preview with real dinner cards.
- **profile**: Modify requires a non-empty note and must reach the bot via the enabled feedback webhook.
- **log**: Preferred permanent meal-site path is bot-hosted or multi-tenant; DIY Cloudflare Pages is power-user only and must not block first-week value.
- **profile**: Meal nights onboarding is free text only (allowCustom); do not offer Monday–Saturday as selectable day options.
- **profile**: After store lock, silently arm Weekly ad meal plan at 8:00 local on the chain’s usual weekly-ad weekday (if unknown, Wednesday); never ask a cadence question card — one light aside with day+time.
- **profile**: Never ask the importer for webhook URL or key; auto-wire from this bot’s Meal plan site feedback routine sidebar/automation fields into site config.js before any ready link.
- **profile**: Week-one preview uses stock/category photos; do not call GenerateImage or block the ready link on custom plates. Share as soon as meals[] + wired webhook + stock images exist.
- **profile**: Hero mosaic must be filled from current meals[] images; stale hardcoded kit asset filenames are a publish bug.
- **profile**: CORS paste-to-chat is last-resort emergency only — prefer same-origin /feedback proxy or simple-request retry; never treat paste as primary success.
- **profile**: Adventurousness option labels: Familiar / Balanced (default) / Curious / Adventurous — the word (default) must appear next to Balanced. Meals/week options: 2, 3, 4 (default), 5, 6, 7 — the option itself must show 4 (default).
- **profile**: First ready meal-site preview must show onboarding householdName in header/footer brand (kit applyHouseholdBranding()); fallback Your kitchen / Family Table only when they skipped the name.
- **profile**: Do not create/arm Meal plan site feedback at hello / question 1; after pickup vs delivery send the feedback Allow-card explainer, then arm the routine, then wire webhook and share.
- **profile**: Published bot mark uses profile.avatarColor blue and avatarShape leaf; source bot live geometric avatar must be blue (not brown) so the storefront cover is a blue mark on the host’s white UI chrome.
