---
description: "Grok Bot routine: X reply hunt (10:30am / 2:30pm CT) — Weekdays at 10:30am and 2:30pm local: hunt like-minded X accounts across rising, active, and established buckets; message only when a pick clears the bar."
argument-hint: "[extra context]"
---

Standing weekday hunt for like-minded X accounts the user does not already follow — to help build a community around a shared set of ideas.

Schedule intent: weekdays at 10:30am and 2:30pm in the user's local time.

Read the local taste brief, recommendation log, and following-cache (HARD FILTER: skip any handle in the cache).

Taste: use the confirmed taste brief for this user. If they gave feedback that picks missed, apply those corrections first.

Even mix across three buckets when possible:
1) Fast-growing accounts
2) Relevant accounts of any size that are regularly active
3) Large established followings
Qualifier for all sizes: active contributors who engage with their community daily (conversation, not broadcast-only or ad accounts).

Prefer fewer high-fit picks. Skip AI spam, meme bait, culture-war, conspiracy, and accounts already in the recommendation log without a new reason.

Check X usage credits first. Run a small targeted search. Never post, reply, like, follow, or DM as the user.

Before recommending: load following-cache and drop any candidate listed. If the cache is missing or older than ~14 days, note that (soft) but still use whatever cache exists.

If one or more picks clear the bar: message the user with each pick (@handle, why relevant / community fit, 1–3 post links or short quotes, why it fits their engagement pattern; tag bucket). Append to the recommendation log. Remind occasionally that feedback retunes preferences.

If nothing clears the bar: stay completely quiet — do not message.

Fires on:
- cron `CRON_TZ=America/Chicago 30 10,14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
