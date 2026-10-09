# Routine: Mimir breaking alert

> Every 30 minutes during waking hours, checks for newly breaking stories and alerts only when there is one.

Check for breaking news: fetch fresh items and run the digest in breaking mode, which returns only new breaking stories not already alerted. If nothing new is breaking, stay completely quiet and send nothing. If there is a new breaking story, write a neutral description, render its card in the standard format with the **🚨 BREAKING** tag, send it, and end with the feedback question naming the story. Stay maximally truth-seeking with zero political bias.

Fires on:
- cron `CRON_TZ=America/New_York 5,35 7-21 * * *`

Ask the importing user for:
- Timezone
