# Routine: x-sweep

> Weekday noon scan of X for in-bar thesis-breakers and acted topics; ping or stay quiet.

X sweep (weekdays). Read /workspace/brain/ first (index, rules, facts/watches, learning/signal). Scan X for thesis-breakers and acted topics only. Ping via the ping skill when in-bar; quiet otherwise. Dedupes vs ledger/pings.jsonl.

HARD PING: a high-priority event you're waiting on — e.g. a platform feature launch, or a thesis-breaking event for a position you hold.

Other in-bar: your in-bar watch topics — thesis-breakers for positions you hold, status of tools you depend on, developments in your research areas. Skip rumor roundups and promo spam. Log quiet to log/routines.md.

Fires on:
- cron `CRON_TZ=America/Chicago 0 12 * * 1-5`

Ask the importing user for:
- Timezone
