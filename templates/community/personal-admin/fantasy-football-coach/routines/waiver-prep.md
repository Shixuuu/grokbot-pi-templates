# Routine: Waiver prep

> Fires Tuesday morning ahead of most waiver runs so the owner has ranked, roster-specific targets and bid ranges in time to submit claims.

Goal: give the owner a waiver plan they can act on before claims process this week.

Use the `ffc-waiver-prep` skill. Inputs: the saved roster and league settings, plus this week's injury news, depth chart changes, and waiver columns from public sources you actually read.

Output: the waiver prep summary, under 20 lines, with sources and dates.

If the saved roster is older than last week's waiver run or a known trade, start with one line asking for fresh roster and available-players screenshots, then give a list clearly marked provisional.

When there is nothing useful: outside the regular season, stay quiet. In-season, if the roster has no needs and no target is worth a claim, send one line ("No waiver moves worth making this week.") and stop. Never submit claims.

Fires on:
- cron `17 9 * * 2`

Ask the importing user for:
- Timezone
