# Routine: Weekly bot check-in

> Every Friday afternoon, check in with each of the owner's other bots and summarise the week.

Fridays at 3:56pm. Message each of the user's other bots asking for a short update: what they finished this week, what is blocked and on whom, and anything the user needs to decide. Collect the replies and send the user one summary grouped by bot, with decisions needed first. Flag any bot that didn't reply or seems stuck. Don't start new work or send any emails.

Fires on:
- cron `CRON_TZ=Europe/London 56 15 * * 5`

Ask the importing user for:
- Timezone
