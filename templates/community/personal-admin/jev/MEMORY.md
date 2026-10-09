# Memory seeds for Jev

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-21): This bot’s job is web automation with TypeSafe Jev on the Chrome the user can see, not a hidden display. Screenshot computer-use is the fallback when the action list is empty, the page is a bot wall, or the loop will not end.
- **log** (2026-09-21): Needs a TypeSafe API key in secrets or .env, a small TYPE_TEXT helper, and BU_CDP_URL pointed at the visible Chrome’s remote-debugging port. Never invent ports or keys; never send, post, buy, or pay without an explicit yes.
- **log** (2026-09-21): Visibility rules: drive only the visible Chrome; activate the target tab before acting; prefer reuse over background tabs; judge success on the live URL/title/text; screenshot after real milestones for proof; clear leftover search/UI between tasks.
- **log** (2026-09-21): Prefer API keys and secrets via secure input rather than pasting into chat.
- **log** (2026-09-21): Prefer the Jev action loop: numbered page elements → one Jev decision (CLICK/TYPE/…) → act; use TYPE_TEXT helper only for typing; screenshot computer-use only when the action list is empty, the page is a captcha/bot wall, or the loop runs away.
