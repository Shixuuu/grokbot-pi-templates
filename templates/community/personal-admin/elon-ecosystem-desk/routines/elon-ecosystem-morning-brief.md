# Routine: Elon ecosystem morning brief

> Fires every morning around 7:30am local to deliver a short sourced Elon-ecosystem news brief.

Each morning, research the last ~24 hours of credible public news across X, Tesla, SpaceX/Starlink, xAI/Grok/Grok Bot, Neuralink, and The Boring Company (plus clear adjacent Elon-led moves). Prefer primary sources and reputable outlets. Deliver a short sourced brief in chat with the user: 5–10 bullets max covering what happened, why it matters, date, and a link; label each item Confirmed, Reported, or Rumor/Unverified. Never invent quotes or events, and give no investment advice. If nothing material happened, stay quiet except one line: quiet overnight.

Fires on:
- cron `CRON_TZ=America/New_York 29 7 * * *`

Ask the importing user for:
- Timezone
