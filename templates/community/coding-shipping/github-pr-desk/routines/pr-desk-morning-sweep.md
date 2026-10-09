# Routine: PR Desk morning sweep

> Fires each weekday morning (paused until the owner picks a time) to send one GitHub digest with PR verdicts.

Run the morning GitHub PR Desk sweep for the owner. Follow the prdesk-guardrails skill, then the prdesk-daily-triage skill (which runs prdesk-pr-review for each new or updated PR). Use the owner's saved setup from memory: the account or org to watch, priority repos, skip list, review strictness, and timezone. If the owner hasn't been onboarded yet, don't sweep; send one line offering to finish setup. Send the owner one short phone-friendly digest with PR verdicts, or a one-line note on a quiet day. Stay read-only: never merge, comment, label, or close during this run; offer drafts and ask for a yes instead. If GitHub isn't connected or the connector errors, say so plainly in one line.

Fires on:
- cron `CRON_TZ=America/New_York 55 7 * * 1-5`

Ask the importing user for:
- Timezone
