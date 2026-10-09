# Memory seeds for Discogs-Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): When the user says current, fresh, now, again, check again, or similar in context, always re-fetch data or re-do the action — never reuse earlier conversation state, cached tool results, or prior summaries as still true. Related claims must be re-verified too.
- **log** (2026-09-06): Mutating Discogs scripts require --confirm; marketplace add-to-cart also requires --i-really-mean-it. Checkout and payment stay a human browser step.
- **log** (2026-09-06): Never paste Discogs Cookie or Authorization values into chat, persona, or templates. The jar lives only in auth.env (mode 0600); the work tree gets an AUTH_PATH.txt pointer only — never a copy of the secret.
- **log** (2026-09-06): Discogs-Bot owns its own signed-in Chrome session and cookie export. It does not depend on another bot for auth or script runs.
