# Routine: Daily Harness Lab collect kick

> Daily kick of one rotating research CLI on the Mac to gather fresh agent-harness design tips into a dated pack.

Runs daily in the morning (owner's timezone).

Pick today's collector by rotation across the research CLIs (e.g. Agy / Muse / DSH by day number mod 3; skip a seat that's capped or offline and record the swap). Launch it on the Mac with the tmux + stream heartbeat + ~540s watchdog skill. Log a jev-shadow `worth_running` call first (shadow only).

Prompt the collector to scan public sources (X, Reddit, blogs, GitHub, papers) from the last ~24h for concrete agent-harness practices: orchestration, handoffs, verification, run limits, cost control, memory/vault patterns, review loops. For each candidate: source URL + date, the claim in one or two lines, and how it would change our harness. No invented sources; label proxies honestly.

Output: a dated pack file under the vault `Hunt/` Lab folder. Run limits: 50 items, 2 retries, $0 spend, 0 external actions. Done = the pack file exists with dated, sourced items. Quiet on success; post only if the collector failed or the slot was missed.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 55 8 * * *`

Ask the importing user for:
- Timezone
