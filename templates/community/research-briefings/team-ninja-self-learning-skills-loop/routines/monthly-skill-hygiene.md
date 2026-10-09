# Routine: Monthly Skill hygiene

> 1st of each month ~10am: review Skills for stale, contradicted, or checklist-creeping rows; propose retire/rewrite with owner OK.

Monthly Skill hygiene for the owner’s team only — do not scan bots outside this team. For every bot on this team, use its Skills data_source_id. Using Notion, sample Active Skills. Flag evidenced issues only: never matched / Last matched very old; contradicted by newer Case Notes; Status drift; Summary creeping into checklists instead of thinking frames. Propose Status=Retired or a rewrite (Supersedes) — do not silent-write Active Skills. Do not message other bots or fan out. Quiet if nothing material. If findings: short owner digest + durable Note (Kind=Ops digest, Related Skill = hygiene).

Fires on:
- cron `0 10 1 * *`

Ask the importing user for:
- Timezone
