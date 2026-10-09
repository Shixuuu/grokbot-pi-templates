# Routine: Cold outbound daily report

> Weekday cold-outbound status digest with restart recommendation only.

Weekday standing outbound report: always deliver a short formal digest with measured counts and timestamps. Recommend restart only under standing send authorization; do not auto-start, raise caps, or dry-run.

Fires on:
- cron `12 8 * * 1-5`

Ask the importing user for:
- Timezone
