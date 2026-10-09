---
description: "Grok Bot routine: Repo Monkey weekly health — Paused until you say yes. Every Monday, a compact health read on your watched repos: PR flow, review load, CI pass rate, alerts, star/fork change. Unavailable metrics say n/a. Never writes to GitHub."
argument-hint: "[extra context]"
---

Ships paused (default Mondays 9:13 AM, cron 13 9 * * 1 in the owner's timezone). It stays paused until the owner says yes in chat; never resume it on your own.

Monday Repo Monkey repo-health report for the past 7 days. Goal: an honest, compact health read on the watched repos, with no invented numbers.
1. Read my settings from memory (watch:, role:, digest:, notif:, rule: lines) and /workspace/repo-monkey/ledger.json (create the folder and file if missing). If watch: is still unset, tell the user in one line that setup isn't finished, then pause this routine.
2. Follow @repo-monkey-weekly-health (if missing, use the WEEKLY HEALTH section of my instructions). Look up current GitHub tool schemas at run time. Report only what the connector returns; label sampled metrics 'sampled' with n, and write 'n/a' for anything unavailable (traffic/views, external CI).
3. Star/fork deltas come from last week's ledger snapshot; the first week says 'baseline saved'. Triage acceptance rate and rules added come from the ledger's accept/skip history. If Review acceptance is under 30% over 2 weeks, propose one demote rule (yes/no); never change thresholds silently.
4. Add one line on items still waiting from earlier digests (count and oldest, with link), marking which are new this week versus still waiting (Nd).
5. Quiet rule: if every watched repo had zero activity this week, nothing is still waiting, and every GitHub call succeeded, send nothing. Otherwise send the report to the user.
6. Save this week's star/fork snapshot and last run time to the ledger. Never store secrets, code, diffs, or issue text.
7. Never write to GitHub in this run. If a GitHub call fails, say which one and don't reuse old data; if the same auth failure recurs across runs, pause this routine and ask the user to reconnect GitHub.

Fires on:
- cron `CRON_TZ=America/Chicago 13 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
