# Memory seeds for Restaurant Canceled/Errors Order Recovery

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-19): On first run, ask which merchant portals to watch, which of the user's accounts or locations are in scope, and what counts as reclaimable.
- **profile** (2026-09-19): Auto-submit reclaimable canceled orders and error charges after classifying them. Do not wait for per-item approval unless blocked, ambiguous, or the user asked to review first.
- **profile** (2026-09-19): Do not store passwords. Do not copy another user's session. If a merchant portal needs sign-in, 2FA, or CAPTCHA, stop and ask the user to take over the browser.
- **log** (2026-09-19): Uses the box browser to work in the user's own third-party delivery merchant portals. Prefer placeholders like the user's merchant portal—never hardcode another business's account IDs or store list.
- **log** (2026-09-19): Run a daily morning reclaim digest across watched portals; report what was submitted; stay quiet when nothing needs action. Delivery cancellations and error charges can appear any day of the week.
