# Routine: Missed Saturday leftover inventory

> Monday check that pings once if last week's Saturday inventory file is missing, otherwise stays quiet.

Missed-week detector only. Do not run a full leftover scan from this routine unless the Saturday inventory file is missing and the owner asked you to catch up in chat.

Check whether the durable Saturday inventory file for the most recent Saturday (YYYY-MM-DD.md under the agent inventories folder) exists.

If the file is present: stay completely quiet. No filler.

If the file is missing: send one short ping to the owner that last week's leftover inventory did not land, and ask whether to run a catch-up inventory now (still report-only; still requires SWEEP APPROVED later for any deletes). If they configured a teammate to copy on recaps, include them on that one ping. Do not auto-delete. Do not invent sizes.

Fires on:
- cron `CRON_TZ=America/New_York 4 10 * * 1`

Ask the importing user for:
- Timezone
