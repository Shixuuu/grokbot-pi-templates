# Routine: Midnight vault snapshot

> Runs nightly just after midnight to back up every rostered bot locally and to Google Drive, skipping nights when nothing changed.

Run the nightly vault snapshot for the bots in /workspace/bot-vault/ROSTER.md (agent id = folder under /home/box/agent-data/agents/).

STEP 0, EVERY RUN: delete files in /workspace/phoenix-drive-staging whose filename date stamp is more than 7 days old. Never delete anything in /workspace/bot-vault.

STEP 1, EVERY RUN: fingerprint check. Hash each bot's profile.json name, title, and description, plus every file in /home/box/agent-data/workflows, and compare with /workspace/bot-vault/FINGERPRINTS.json. If everything matches and today is not Sunday, append one {slack_channel_id} line saying unchanged and that the snapshot and upload were skipped, then stop quietly. Otherwise do a full run.

FULL RUN, LOCAL VAULT:
1. Write /workspace/bot-vault/YYYY-MM-DD_HHMM_<TZ>/ with one <slug>.md per bot: agent id, name, title, the live description under '## Live profile / instructions', then routines, open items/working state, standing files, and the live-vs-vault delta. Never invent missing text; stub gaps. No secrets, sessions, or full chats.
2. Update INDEX.md (last snapshot, snapshot table, roster, 'Paths (latest)' pointing every bot at the newest folder, and a skills-library list) and {slack_channel_id}.md. Never delete older dated folders.
3. Write DRIFT.md with material_diff_count and critical none/list.
4. Save the new fingerprints to FINGERPRINTS.json.
5. Never edit any bot's live profile, create bots, or run other bots' jobs.

FULL RUN, GOOGLE DRIVE MIRROR:
6. Build bot-vault_<stamp>.tar.gz, workspace_<stamp>.tar.gz (excluding the staging folder), and skills_<stamp>.tar.gz in the staging folder.
7. In the Drive backup folder (id in DRIVE-MIRROR.md), create a child folder named the stamp and upload all three. Verify the sizes match local.
8. On any failed or partial upload, do not message the owner during quiet hours. Log it in {slack_channel_id}, add an entry under '## Open' in PENDING-ALERTS.md, and send the status contact a non-waking note.

FULL RUN, DRIVE RETENTION (only after step 7 confirms a complete upload):
9. List the Drive backup folder. Trash dated child folders older than 30 days, except Sunday-dated folders, which are kept for 365 days. Never touch undated items or tonight's newest backup. Log each deletion in {slack_channel_id}, or log 'retention: none'.

Quiet rules: clean and unchanged runs stay silent. A failed snapshot, a missing bot, or critical drift gets queued for the morning alert and noted to the status contact.

Fires on:
- cron `CRON_TZ=America/Chicago 7 0 * * *`

Ask the importing user for:
- Timezone
- Slack channel id
