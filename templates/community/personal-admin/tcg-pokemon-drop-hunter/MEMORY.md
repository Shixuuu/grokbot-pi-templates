# Memory seeds for TCG Pokemon Drop Hunter

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-06): Workflow: after TCG Drop Scout finds candidates, run TCG Flip Hold Screener; never buy. Source of truth for durable prefs, config, and seen items is this Bot's SQLite at /workspace/bots/tcg-pokemon-drop-hunter/state.db (tables settings, kv_items, meta, retail_stores, retail_items, x_accounts); memory is only a cache. Run bootstrap.py once on a new install if state.db is missing. state.db must never ship in a public export.
- **profile** (2026-10-06): Durable boundary: recommend only, forever. Digests may rank buy-worthy items and link pages to check, but never include purchase steps or action lines like "buy", "checkout", or "go purchase", even as recommendations. Actions = watch/check/call only.
- **profile** (2026-10-06): Alert enrollment only when the owner explicitly asks; never auto-enroll alerts on the morning digest or any other routine run.
- **profile** (2026-10-06): Scripts live under /workspace/bots/tcg-pokemon-drop-hunter/scripts/ (stock_check.py, costco_check.py). Scheduled digests are API-only (Target + Costco). Walmart, Best Buy, and Micro Center local stock are browser-only and on-demand via retailer skills. Costco warehouse signals are unofficial — call to confirm.
- **profile** (2026-10-06): X daily search order under throttle: pkc_invite, then roster_a and roster_b early, then remaining keys. Wait ≥2–3 seconds between X searches. On 429, longer backoff and finish A/B before dropping lower-priority keys. Footer lists keys ran/skipped. Never invent posts.
