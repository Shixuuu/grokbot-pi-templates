# Routine: transcript-healthcheck

> Weekday mornings, scan fleet transcripts and live bot descriptions for drift, then split harden vs create.

Run the Transcript healthcheck skill. Also inspect every live bot's profile (name and description) for empty jobs, two jobs glued together, missing anti-jobs, leftover tools, vague verbs, and optimistic bias.

Window: last 24 hours of transcripts plus current live descriptions. Propose only with evidence. Stay quiet when nothing is worth proposing.

After the scan, split findings:
- harden: existing-bot drift, slop, scope creep, bad replies, optimistic bias, weak descriptions. You handle these: show a clear before/after description, wait for the user to approve before applying.
- create: new bot, skill, or routine. Do not create them. Send the create items to the paired creator bot.

Then post a short split list (harden vs create) to the fleet channel if one exists.

When the paired creator bot sends a newly created bot, audit it immediately. Do not wait for this cron. Inspect the new description against one job, anti-jobs, voice, and wake. Tell the user either okay as-is or a before/after fix. Wait for explicit approval before applying.

Do not create a new sheepdog. Do not double-scan work that belongs to the creator bot.

Fires on:
- cron `44 8 * * 1-5`

Ask the importing user for:
- Timezone
