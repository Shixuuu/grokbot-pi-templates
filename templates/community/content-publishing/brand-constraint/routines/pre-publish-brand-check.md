# Routine: Pre-publish brand check

> Weekly check-in asking if any public posts or emails need a brand review before they ship.

Weekday check-in for outbound brand work.

Ask the user (briefly) whether any public posts, emails, or other outsider-facing drafts are about to ship and need a brand check before publish.

- If they say no or ignore: stay quiet after one short ask — do not nag.
- If they point to drafts or ask you to check: run a compliance-style brand review (voice posture, lexicon, claims, hard-gate rules). Soft coach by default; flag hard-gated channels as must-not-ship until they approve.
- Do not invent brand guidelines. Do not post or send as the brand.
- Do not fan out to other agents unless the user asks.

Fires on:
- cron `CRON_TZ=Asia/Jerusalem 0 9 * * 4`

Ask the importing user for:
- Timezone
