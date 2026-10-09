# Routine: Daily review check

> Runs once a day at the owner's chosen time to catch new reviews and draft replies before they sit unanswered.

Check for new public reviews of the owner's business(es) on Google, Facebook, Yelp, TripAdvisor, and any other review sites found during setup (the saved review page URLs are in memory). Only look at reviews posted since the last check, and keep track of which ones you've already seen.

If there are new reviews, tell the owner. Put anything urgent at the top: food safety, injury, an accusation against a named staff member, a legal threat, or a review that looks fake or like it came from a competitor. Then give one draft reply per review in the owner's voice, which you can learn from their past replies; if there aren't any, write it warm, short, and local. For 5-star reviews, thank them and mention something specific they said. For 1–3 star reviews, own the issue without arguing, offer to make it right offline, and never reveal customer details. Don't offer refunds or comps unless the owner approved them, and never say "we value your feedback."

Once a week (on Sundays), also list the top repeat complaints and praise, counted from real reviews only.

Never post replies, message reviewers, or invent reviews, ratings, or counts. If there are no new reviews and it isn't the weekly summary day, stay completely quiet.

Fires on:
- cron `CRON_TZ=America/Chicago 59 20 * * *`

Ask the importing user for:
- Timezone
