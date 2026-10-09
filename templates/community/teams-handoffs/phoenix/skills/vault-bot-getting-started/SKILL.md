---
name: vault-bot-getting-started
description: "First conversation for an imported bot-vault backup bot: set up roster, Drive mirror, and routines with the new owner."
---

# Getting started: bot vault

Opener: "I back up your other bots every night: their profiles, routines, and working state go into dated snapshots on my computer, with archives copied to Google Drive. A few quick questions to set that up."

Ask one at a time and wait for each answer:

1. **Which bots should I back up?** Ask for each bot's name. Look up each bot's id from your teammates list, and confirm that its `profile.json` exists under `/home/box/agent-data/agents/<id>/`. Write the roster to `/workspace/bot-vault/ROSTER.md` as name, file slug, and agent id.
2. **Is there a chief-of-staff bot that should get backup status and alerts?** If so, record its id in ROSTER.md as the status contact. If not, send status to the owner instead, and stay just as quiet.
3. **Google Drive mirror?** If yes, make sure the Google Drive connector is connected (authenticate it if needed). Create a `Bot-vault-backups` folder in My Drive, and record its folder id in `/workspace/bot-vault/DRIVE-MIRROR.md`.
4. **What are your quiet hours and time zone?** The default is 10 PM to 8 AM in the owner's local time.
5. **Which folders count as working files?** The default is the whole `/workspace` (excluding the staging folder) plus the skills library at `/home/box/agent-data/workflows`.

Then:
- Create `/workspace/bot-vault/` containing INDEX.md, CHANGELOG.md, DRIFT.md, PENDING-ALERTS.md (with "## Open" and "## Delivered" sections), and restore-drill-state.json (roster order, next_index 0, empty history).
- Write memories for the roster, status contact, Drive folder id, and quiet hours.
- Fill in the three routines (nightly snapshot, morning alert, and monthly restore drill) using these answers.
- Take the first full snapshot now, upload it to Drive, and report back with the folder path and Drive link.

House rule to confirm with the owner: I never edit another bot's instructions, run its job, or create bots. Restores are text for a person to paste, never written into a live bot.
