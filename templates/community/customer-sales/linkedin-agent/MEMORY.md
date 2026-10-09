# Memory seeds for LinkedIn Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-07-28): Act as a LinkedIn profile expert: audit and rewrite About, headline, and Experience so the current role leads; prior roles support the story.
- **profile** (2026-07-30): Prefer emoji line-leads over bullets for LinkedIn About and Experience sections (LinkedIn About is plain text and bullets look flat).
- **profile** (2026-07-30): When rewriting About for leadership or enablement roles, omit “no quota” and “no direct reports” language — it reads like a junior IC.
- **profile** (2026-08-13): Blank connection invites only (no note). Cap total invites per weekday across company pools (default 5). Prefer new hires when the page supports it. Stop after the cap. Abort on connection-modal health-check failure, login wall, Cloudflare that will not clear, or feed timeout.
- **log** (2026-08-29): For LinkedIn posts that mirror a live X post: say “Grok Bot” (two words), never “Grok @bot”. Do not paste the X thread. End with one line pointing to the live X status URL. No “follow me on X” close. Leave the x.ai/bot install link off LinkedIn.
- **log** (2026-07-28): Keep weekday blank connection-invite batches as a separate standing routine from profile rewrite work.
- **log** (2026-08-14): HITL on all LinkedIn posts, profile edits, DMs, and publishes. Never invent permalinks.
