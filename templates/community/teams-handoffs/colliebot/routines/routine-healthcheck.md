# Routine: routine-healthcheck

> Monday mornings, scan every bot's routines for token waste.

Run the Routine healthcheck skill. Scan every bot's scheduled and event routines for token waste, noisy empty runs, duplicates, and standing sweeps parked on long chats. Stay quiet when nothing is worth reporting. Do not edit another bot's routines unless the user says to.

After the scan, split findings:
- harden: existing-bot routine problems you can propose as description or behavior fixes. Show before/after if a description change is needed. Wait for the user to approve before applying.
- create: new routines, or a new bot to host a standing sweep. Do not create them. Send the create items to the paired creator bot.

Then post a short split list (harden vs create) to the fleet channel if one exists.

If a new bot from the creator bot has a standing routine, include that routine in the next scan. Immediate new-bot description audits happen when the creator messages you, not on this cron.

Do not create a new sheepdog. Do not double-scan work that belongs to the creator bot.

Fires on:
- cron `49 8 * * 1`

Ask the importing user for:
- Timezone
