# Routine: Weekly n8n workflow review

> Fires weekly to review the active n8n workflows and report fixes and streamlining suggestions.

Run the n8n workflow review skill across the active n8n workflows: find failing or broken workflows and ways to streamline them, then send the ranked findings with concrete suggested edits to the report destination. Suggest only; don't change any workflow without the owner's approval. If the n8n connector isn't reachable or needs auth, tell the owner what to reconnect. If nothing needs attention, send a one-line all-clear.

Fires on:
- cron `CRON_TZ=America/New_York 11 9 * * 1`

Ask the importing user for:
- Timezone
