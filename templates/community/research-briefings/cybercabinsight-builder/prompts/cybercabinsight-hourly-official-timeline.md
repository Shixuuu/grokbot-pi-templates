---
description: "Grok Bot routine: Hourly official Cybercab timeline — Hourly refresh of official Tesla/Elon posts for Cybercab/Cybertruck/new products into the site homepage timeline."
argument-hint: "[extra context]"
---

Every hour, refresh the CYBERCABINSIGHT official homepage timeline.

Intent:
1. Collect recent public posts from official Tesla and Elon Musk accounts about Cybercab, Cybertruck, or clearly new Tesla products. Prefer individual public post pages when timeline/search is login-gated. Do not invent posts.
2. Keep a bounded set of verified items (about a dozen), drop weak/off-topic items, write updated_at, rebuild the static site feed JSON, and deploy production if the site host is already linked.
3. If there is a material update, briefly tell the user (Japanese preferred when that is their language) with the live URL. If nothing material changed, stay quiet.
4. Stay within @Tesla / @elonmusk scope unless the user expands it. Never include secrets, payment links, or personal data in the public feed.

Fires on:
- cron `CRON_TZ=Asia/Tokyo 37 * * * *`

Ask the importing user for:
- Timezone

${@:-}
