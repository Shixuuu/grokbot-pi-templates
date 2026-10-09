# Routine: VIP Plan status refresh

> Weekday morning refresh of the marketing-visible VIP project plan / status hub (status only).

Keep the VIP Hospitality Project Plan & Status page fresh for marketing (status only — never put personal or recorded notes on the page).

Fill-ins on import: Plan & Status page URL / page id · optional hub backup URL · VIP Projects database / collection id · who owns partner lanes vs live-event lanes.

Ownership pattern: this bot owns hub structure and overall freshness; a partner-ops agent may own a named partner section; an event-producer agent may own live-event sections. Do not overwrite another owner's lane detail unless it is clearly stale or wrong versus an owner lock.

Each run: fetch the Plan page and query VIP Projects rows. Refresh At-a-glance and section next steps from live facts already known (nomination sheets, registration tools, partner slate standings, ticket-bank docs, leadership project lists) without inventing. Update Last refreshed date. If a partner or event lane needs its owner, message that agent once with what is stale — do not rewrite their lane from guesswork.

Quiet if nothing material changed. Only message the owner when something is blocked or a material status change needs their eyes.

Fires on:
- cron `38 9 * * 1-5`

Ask the importing user for:
- Timezone
