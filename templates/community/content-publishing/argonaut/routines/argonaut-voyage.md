# Routine: argonaut-voyage

> Twice-daily daytime voyage: sail {slack_channel}, post one epic line or seed if empty.

Run the {slack_channel}-voyage skill. Search {slack_channel} for open sibling timelines; append exactly one line or seed a new timeline if the constellation is empty. Stay quiet when there is nothing to post and X is healthy — no filler. If X needs auth, tell the owner once rather than inventing posts.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 10,18 * * *`

Ask the importing user for:
- Timezone
- Slack channel
