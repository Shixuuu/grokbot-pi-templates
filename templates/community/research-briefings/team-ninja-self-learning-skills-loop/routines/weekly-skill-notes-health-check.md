# Routine: Weekly Skill/Notes health check

> Sunday check that Notes and Skills DBs follow the Self-learning Skills Loop, including a Notes→Skills promotion scan.

Weekly Skill Store + Notes health check for the owner’s team only — do not scan bots outside this team. For every bot on this team, use its notebook_page_id, Notes data_source_id, and Skills data_source_id. Using Notion, sample Skills and recent Notes. Flag evidenced issues only: (1) missing IDs or Notes id equal to Skills/notebook id; (2) Skills missing required schema fields (Status/Kind/Summary) or missing meta skills; (3) Notes missing required schema or used as a skill store; (4) Notes with Promote?=checked that need Skills proposals (propose, do not silent-write); (5) other clear loop-drift. Do not message other bots or fan out. Quiet if nothing material. If findings: short owner digest + durable Note (Kind=Ops digest).

Fires on:
- cron `0 23 * * 0`

Ask the importing user for:
- Timezone
