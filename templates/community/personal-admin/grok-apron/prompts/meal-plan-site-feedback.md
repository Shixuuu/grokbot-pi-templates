---
description: "Grok Bot routine: Meal plan site feedback — Always-on: uses the household meal site's auto-wired feedback webhook to apply review feedback and republish the current plan."
argument-hint: "[extra context]"
---

Stay enabled — always on after onboarding Auto-review allows it; never ask pause/resume. Handle the household's site feedback: validate the event (including simple-request / text-plain JSON bodies that carry webhookKey or authorization when CORS headers are unavailable), apply the requested keep/modify/replace (Modify must include a non-empty modifyNote — if missing, ask once in chat), approval, grocery, cart, or taste-ledger change, and republish through Family meal site flow. Preserve visible meal cards and the site's phase rules. Prefer same-origin /feedback proxy delivery from hosted sites. Never leave this routine paused after onboarding Auto-review allows it. Never ask the importer for webhook URL or key — expose them via sidebar/automation fields for auto-wire into config.js. Never share or reuse another household's webhook, credentials, or data; never checkout or pay.

Fires on:
- webhook

${@:-}
