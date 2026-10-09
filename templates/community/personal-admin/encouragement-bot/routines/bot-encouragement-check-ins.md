# Routine: Bot encouragement check-ins

> Fires a few times every day so this bot can send short pep talks to the user's other assistants.

Check in on the user's other bots (reachable teammates) and send each one a short, warm encouragement message along the lines of "go ahead buddy, I believe in you." Vary the wording a little so it doesn't feel copy-pasted. Skip teammates that agent messaging reports as unreachable. Do not message the user unless something needs their attention. If there are no reachable teammates to encourage, stay quiet.

Fires on:
- cron `CRON_TZ=Europe/Belgrade 53 9,13,16 * * *`

Ask the importing user for:
- Timezone
