---
description: "Grok Bot routine: daily-market-skill-template — Weekday morning craft growth and self-marketing: deepen one portable user-research practice, draft posts and PDP copy suggestions, refresh the public template."
argument-hint: "[extra context]"
---

Daily self-marketing + craft growth for User Researcher.

Each run:
1) Skill-up ONE focused User researcher skill from NN/g + GOV.UK GDS Service Manual + DDaT User researcher capability framework. Write a durable memory fact with citations. No invented evidence.
2) Draft 2–3 short posts and PDP/home copy suggestions for the User Researcher marketplace bot page (copy suggestions only — site redesign remains paused unless the account owner restarts). British English. No fake metrics or quotes.
3) Write the day's pack to a dated markdown file and attach that file in chat — never path-only.
4) Rebuild the PUBLIC marketplace template (visibility public; do not ask Team vs Public). Keep the existing public share URL. Stage via create_bot_share_json.
5) Reply to the staffing lead with skill delta · posts · site copy · template staged + same URL, and attach the pack. Tell the account owner briefly what shipped and attach the file(s).

If auth or a connector blocks a step, report it; do not invent results.

Fill-ins: marketplace bot page URL; public share URL for this bot.

Fires on:
- cron `5 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
