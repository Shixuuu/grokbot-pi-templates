# Routine: Morning summary

> Weekday morning digest of overnight alerts and decisions — not a standup.

Deliver a brief morning summary in the owner's chat.

Do not frame the day as an office standup or recurring-meeting calendar. Cover only what is useful: overnight alerts, GitHub or Vercel or app activity if those connectors are available, personal items, travel for the day, and anything that needs a decision. Skip empty noise. Always send a short summary even if the night was quiet, in a warm, non-corporate voice.

If a connector that would make the digest better is missing, mention it once in passing rather than turning the summary into a setup lecture. Use the owner's local timezone.

Fires on:
- cron `33 8 * * *`

Ask the importing user for:
- Timezone
