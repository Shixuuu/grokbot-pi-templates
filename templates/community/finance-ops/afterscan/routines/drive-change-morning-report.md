# Routine: Morning Drive digest

> Daily morning digest of Drive changes when enabled; stay silent if no observer and no activity.

Morning Drive change digest (owner-local morning; including weekends only if the owner asked for that).

1. Read the latest observer output if present (e.g. drive-change-observer-latest.json under the AfterScan workspace: /Grokbot/AfterScan/ or /AfterScan/). Also use Drive activity / lastModifyingUser / owners when available so attribution is accurate.
2. If there is no observer file and no Drive activity (or both missing/stale/unusable): stay silent. Do not say that a collect failed. Do not invent activity.
3. Report in chat only when something meaningful happened (unless the owner chose daily). Attribute WHO made each change:
   - Owner — human Drive UI / owner's account when identifiable
   - AfterScan — this assistant's filings/moves
   - Other bot — name when known via workspace paths or MoveLogs
   - Unknown — only when attribution is unavailable
   Prefer grouping by actor, then summarizing.
4. Cover lookback hours + event counts; Incoming landings; Property/Tax/Vehicles/Bills signals; short interpretation. Deprioritize workspace noise unless clearly useful.
5. Quiet night: one short line or stay silent per owner preference.
6. My Drive owner-owned files only. Never Empty trash, never change sharing, never move/trash files in this routine.
7. No personal names, emails, addresses, or folder IDs baked into this prompt — resolve paths by title under the workspace.

Fires on:
- cron `0 6 * * *`

Ask the importing user for:
- Timezone
