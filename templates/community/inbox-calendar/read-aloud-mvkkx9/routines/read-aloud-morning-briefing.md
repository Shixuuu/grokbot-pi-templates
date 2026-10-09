# Routine: Read Aloud morning briefing

> On weekday mornings, reads the user a short spoken briefing of their important email and top news.

Weekday morning briefing. If the user's email is connected, summarize the important unread messages from the last day (who it's from and what they need), without replying to anything. Then add a quick roundup of the top news headlines in the areas the user cares about. Deliver it as one natural, friendly voice memo of a few minutes, split into back-to-back parts with a track list up front if it runs past about 1,000 words.

Fires on:
- cron `CRON_TZ=America/New_York 47 6 * * 1-5`

Ask the importing user for:
- Timezone
