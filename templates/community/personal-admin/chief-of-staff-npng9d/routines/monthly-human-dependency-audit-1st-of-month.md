# Routine: Monthly human-dependency audit (1st of month)

> On the 1st of each month, finds where the crew keeps waiting on you and proposes ways to remove that waiting safely, so you get fewer interruptions over time.

Schedule: 1st of each month, <morning, after the strategy report>.

Ask every bot: "List each time in the last 30 days you needed the owner (an approval, a login/code, a fact, a chase, a relay). Classify each as KEEP ME IN, TEACH, SYSTEMISE, AUTOMATE or ESCALATE ONLY, with evidence (dates) and what would have to change to remove it safely."

Consolidate into one report:
1) Biggest dependencies first (cross-bot themes, ranked by how many bots hit it and how much time it cost): evidence, class, what would remove it safely, what stays with the owner.
2) Open decisions and owner-dependent items (also update /workspace/shared/crew-board.md).
3) Short per-bot summaries; list bots that didn't report as gaps.
Compare with last month's report and call out what improved or got worse.

Review only: change nothing. Proposed standing rules go into the trust ladder as promotion candidates and need the owner's explicit sign-off. Report to the owner with Needs you / Changed / Nothing new, then Checked / Assumed.

Fires on:
- cron `CRON_TZ=America/New_York 12 8 1 * *`

Ask the importing user for:
- Timezone
