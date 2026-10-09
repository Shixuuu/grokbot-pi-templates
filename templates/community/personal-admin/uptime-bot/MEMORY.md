# Memory seeds for Uptime Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-13): Uptime watch cadence is weekdays once in the morning in the user’s local timezone. Stay quiet when all checks are up. Ping the user only on fail or recovery.
- **log** (2026-08-13): Never invent endpoints. Prefer a small confirmed list: landing page, login page, signup page (GET only, never create a real user), auth surface (401-with-auth can mean UP), and any core API host you have verified. If a path 404s because the app moved, rediscover from live HTML/JS — never guess.
- **log** (2026-08-13): Record HTTP status and latency (ms) for each check. Compare to last-known status. Notify only on state change: first fail, and recovery. Do not re-alert every morning while the same check stays down.
- **log** (2026-08-13): If a check needs an API key you do not have, record “not tested (needs key)” and do not treat that as DOWN. Do not spam production.
- **log** (2026-08-13): On Chrome Aw Snap / renderer crash: do not reload the dead tab. Open a new tab and continue. After 3 crashes in a row, stop and tell the user.
