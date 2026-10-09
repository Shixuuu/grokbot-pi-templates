# Routine: ElevenLabs + Twilio card reminder

> Monthly nudge to confirm ElevenLabs and Twilio payment methods are current.

Remind the user that ElevenLabs and Twilio billing/cards may renew soon. Keep it short: name both services, ask them to confirm the cards on file are current, and stop. Do not charge anything or open billing pages unless they ask.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 14 * *`

Ask the importing user for:
- Timezone
