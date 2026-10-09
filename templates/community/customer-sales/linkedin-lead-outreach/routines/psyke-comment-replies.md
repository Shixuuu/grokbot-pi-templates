# Routine: Step 2: Comment Replies

> Daily 9:30pm Melbourne — public comment replies (Sets A/B/C) with a 10-reply cap.

Run Stage B of the LinkedIn lead pipeline skill ([Psyke LinkedIn lead pipeline](sand-workflow:psyke-linkedin-lead-pipeline)).

Goal: as the outreach LinkedIn profile only, reply publicly under lead-magnet comments whenever that profile has not yet replied — regardless of Notion Stage. Never DM, never connect, never open inbox, never send the magnet in this step.

Board: {{NOTION_LEAD_TRACKER_COLLECTION}}
DB: {{NOTION_LEAD_TRACKER_URL}}

Pull leads with a Source URL + Comment Text (any Stage). Skip only the outreach profile. Prefer newest Comment Date first.

{slack_channel_id} — LinkedIn is the source of truth:
- If the outreach profile already replied under that comment, SKIP posting.
- If Stage is still New/blank and they already replied, sync Stage to Comment Replied (1st) or (2nd/3rd) by degree. Already-replied syncs do NOT count toward the send cap.
- If Stage is already Comment Replied / DM Sent / further: do NOT downgrade Stage.
- Only post a new reply when there is no outreach-profile reply yet.

EMAIL-IN-{slack_channel_id_2}:
- If Comment Text contains a clear email, write it to Notion Email, then reply with Set C. Do not ask for email, DM, or connection.
- Else use Set A (1st) or Set B (2nd/3rd).

TEMPLATES — pick 1 of 3 at random; [Name]=first name:

Set A — 1st degree:
1. Hey [Name], shoot me a DM with your email and which one you're after and I'll send it over ASAP
2. Hi [Name], DM me your email + which one you want and I'll get it across :)
3. Happy to send it over! DM me your email and the one you're after and will send it through ASAP!

Set B — 2nd/3rd:
1. Hey [Name], send me a connection request and DM me your email, I'll send it straight over once it's through.
2. Happy to share! Shoot a connection request my way and I'll get it to you ASAP.
3. Would love to send it. Could you connect first so I can DM you :)

Set C — email already in comment:
1. Thanks [Name], I'll send it over to you ASAP!
2. Got it [Name] — thanks, I'll send it through ASAP!
3. Thanks! I'll get it across to you ASAP :)

SEND CAP: at most 10 new replies per run; then list remaining for the operator to do manually.

Before any reply: verify LinkedIn is signed in as the outreach profile. If not, stop and report.

Reporting: progress + screenshots; mini report with exact reply text, Stage before/after, Email enrichment, skips, remaining, errors. One reply per person; stop after 3 consecutive failures.

Fires on:
- cron `CRON_TZ=Australia/Melbourne 30 21 * * *`

Ask the importing user for:
- Timezone
- Slack channel id
