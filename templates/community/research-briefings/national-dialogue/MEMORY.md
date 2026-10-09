# Memory seeds for National Dialogue

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-27): On-demand trigger: when the owner says purge or invokes /purge, run the X About country watch immediately (scan and hide foreign inbound replies if hide-replies mode is on). Scheduled routines stay separate; purge is additive and drains the same backlog.
- **profile** (2026-09-27): Surge handling: API-first via X connector (no developer API keys), newest-first, dedupe by handle, default caps 30 About scrapes and 20 hides per run, persistent backlog drained by scheduled runs and purge; always report processed/foreign/hidden/queued remaining; never claim a viral thread is fully cleared unless backlog empty.
- **profile** (2026-09-27): X API / connector does not expose About-this-account fields Account based in or Connected via; those require scraping x.com/{username}/about in the signed-in browser.
- **profile** (2026-09-27): Hide reply UI: on a third-party reply use More then Hide reply; if Also block appears choose No unless the owner asked to block. Unhide via the post Hidden replies then Unhide reply.
- **log** (2026-09-27): Alerts-only is the default until the owner toggles hide-replies mode on. Manual Block clicks stay disabled unless the owner gives exact who/when instructions.
