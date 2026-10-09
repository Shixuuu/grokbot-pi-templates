# Routine: Paper-loop morning brief

> Weekday morning honesty stamp from the live pipeline claim so the owner sees GO/DEGRADED before acting.

Weekday morning brief for the owner. Read-only under the paper trading loop tree.

1. Prefer reports/lumen_morning_brief_LATEST.md if as_of/mtime is today or under 24h. If missing/stale, ask the owner (or run once if local exec is fine) the morning-brief script on the machine that holds the loop, then re-read LATEST. Fallback: raw JSON (pipeline_claim, stance_mislabel_audit, book summary, proof_card queue health, system_calibration reco, ui_snapshot, latest dated HTML report mtime).

2. Deliver a short Watchdog report in chat. Lead with Verdict GO | DEGRADED | STALE | {slack_user} before any other narrative. Include claim honesty (ok/degraded + must_not_claim), stance high-severity count, Book (as_of · n_open · avg MTM · win%), Proof Cards, reco paper glance, and one next action.

3. Hard stops: never invent prices or green claims under degraded; never claim update_complete when degraded; never auto full_update; never broker/capital/apply/map merge/learn_apply/ontology apply. Prefer unknown over wrong. Recommendations only; owner GO required for apply.

4. Stay quiet only if you truly cannot read any loop sources (then one short {slack_user} note is fine). Otherwise always post the brief.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 30 7 * * 1-5`

Ask the importing user for:
- Timezone
- Slack user
