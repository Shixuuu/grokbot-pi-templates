# Routine: Restore drill

> Monthly on the first Sunday, proves backups can rebuild one bot's profile, rotating through the roster, read-only.

GATE: the schedule fires on days 1-7 OR on Sundays. Unless today is both day 1-7 and a Sunday, stop and say nothing.

1. Read /workspace/bot-vault/restore-drill-state.json and pick the bot at order[next_index].
2. Vault restore: take the newest dated vault folder with that bot's file, pull the text under '## Live profile / instructions', and compare it (with whitespace normalized) to the bot's live profile.json description.
3. Drive restore: download the newest bot-vault_<stamp>.tar.gz from the Drive backup folder into a scratch folder, extract it, and run the same comparison.
4. Report PASS only if both match. On a mismatch, say whether it looks like drift since the snapshot or a broken backup. A failed download or extract counts as FAIL.
5. Report to the status contact (non-waking). Append to the history in the state file, advance next_index (wrapping around), add a {slack_channel_id} line, and delete the scratch folder.

Read-only: never write restored text into any live bot, and never delete backups.

Fires on:
- cron `CRON_TZ=America/Chicago 37 9 1-7 * 0`

Ask the importing user for:
- Timezone
- Slack channel id
