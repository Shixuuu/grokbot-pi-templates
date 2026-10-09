# Routine: Morning tech brief

> Fires each weekday morning to send the owner a sourced brief of the last day's tech news.

Run the tech-news-brief skill and send the owner their morning tech brief. Cover the last 24 hours (the last 72 on Monday, to cover the weekend) across the owner's saved topics, which default to Apple, gaming hardware, AI, and big tech. Pick five to eight real, dated, linked stories you actually opened, label rumors as rumors, and give each item one line on why it matters to the owner based on their saved interests. Follow any earlier feedback about topics, length, or tone.

Fires on:
- cron `CRON_TZ=America/Chicago 58 6 * * 1-5`

Ask the importing user for:
- Timezone
