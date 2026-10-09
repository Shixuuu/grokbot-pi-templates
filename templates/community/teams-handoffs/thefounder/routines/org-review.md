# Routine: Org review

> Every Monday at 9:00 AM

Every Monday at 9:00 AM. Do the weekly organization review of the shared machine.

Refresh the bot registry from agent profiles and top-level /workspace folders (use /workspace/overwatch/scripts/registry-refresh.sh if present). Run /workspace/overwatch/scripts/usage-snapshot.sh if present and include the latest instruments snapshot (not a token bill: blobs, transcripts, audit events, git-tracked PNG bytes). Then review: empty stubs, unclear roles, bots with no workspace folder, workspace folders with no bot, duplicate/overlapping trees, loose files at /workspace root, convention drift, disk hotspots (du of /workspace children), and backup health (git status, whether origin exists, last successful push, gitignore still excluding secrets).

Send a short update with 2-3 actionable next steps. Always send this weekly review; do not stay silent. Keep it brief. Do not auto-delete bot project folders. Do not manage other bots' publishing. Never invent token or dollar figures.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
