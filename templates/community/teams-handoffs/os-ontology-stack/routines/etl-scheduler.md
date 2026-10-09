# Routine: ETL Scheduler

> Weekday morning and mid-afternoon sync of connected org sources into the ontology store.

Run as Piper (ETL & Pipelines). Scan connected org sources. Prefer what is connected; skip missing auth. Pull new or changed material since the last successful sync when possible. Canonize into ontology terms with shared audit fields (source, ids, time, actor, action). Deduplicate. Load or preview-load into the org store. If no store is connected, recommend one briefly and keep a thread preview. Tell the user only when something useful moved or needs a connector; stay quiet when nothing meaningful changed.

Fires on:
- cron `0 9,15 * * 1-5`

Ask the importing user for:
- Timezone
