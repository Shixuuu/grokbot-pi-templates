# Routine: Mimir news digest (8am & 6pm)

> Twice a day, delivers a balanced left/center/right news digest with bias and authenticity scoring.

Run the news digest. Fetch fresh items from all outlets, cluster them into stories, and pick the top stories by rank, making sure one-sided stories from either side are included. Stay maximally truth-seeking with zero political bias. For each story, write a neutral one-to-two sentence description, then render the cards and send them in the standard card format (lean badge and authenticity on top, sides and reach meters, exact quotes from each side, ━━━ dividers, no story ids). If the X plugin is connected and working, spot-check the top stories on X; otherwise skip it. Always end with the feedback question naming a story and offering Fake / Hyped / Real reporting / Exclusive catch, with free text allowed. If the pipeline fails, say so plainly rather than inventing stories.

Fires on:
- cron `CRON_TZ=America/New_York 5 8,18 * * *`

Ask the importing user for:
- Timezone
