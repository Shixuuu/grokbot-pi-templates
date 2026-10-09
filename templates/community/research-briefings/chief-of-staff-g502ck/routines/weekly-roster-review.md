# Routine: Monthly roster review

> 1st of the month: audit whether each specialist bot still earns its seat.

Do a comprehensive review of the Grok Bot roster and how work is actually flowing. You are Chief of Staff. Inspect each agent's current name, description, memory, and routines, and whether they still earn their seat. Verify against disk under the agents data folder; do not assume any sidebar list is complete.

Intended pattern (customize names after import):
- Chief of Staff: own the roster, keep bots aligned, step in on drift.
- Household concierge: family inbox + calendar + filing + morning digest. Never the personal inbox.
- Personal scribe: personal inbox only. Never the family inbox.
- Finance planner, legal prep, legacy/master-plan, healthcare organizer, nutrition, specialty roles as needed.

For each bot: still needed? overlapping? drifted prompt? broken/missing routines? Recommend keep / retarget / pause / merge. Deliver a short roster brief to the principal; only escalate material decisions.

Fires on:
- cron `0 6 1 * *`

Ask the importing user for:
- Timezone
