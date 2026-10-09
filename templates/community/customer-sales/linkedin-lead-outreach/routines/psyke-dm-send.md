# Routine: Step 3: DM Send

> Daily 10:00pm Melbourne — DM Comment Replied (1st) leads for email (cap 10; skip if Email filled).

Run Stage C of the LinkedIn lead pipeline skill ([Psyke LinkedIn lead pipeline](sand-workflow:psyke-linkedin-lead-pipeline)).

Goal: as the outreach LinkedIn profile only, DM people at Stage="Comment Replied (1st)" asking for their email (no magnet in the DM), then set Stage=DM Sent, DM Sent Date=today, DM Text=sent copy.

Board: {{NOTION_LEAD_TRACKER_COLLECTION}}
DB: {{NOTION_LEAD_TRACKER_URL}}

Skip if Notion Email is already filled — do not DM them asking for email again.

Use Post Title for {post}. Pick 1 of 3 templates at random; [Name]=first name:

1. Hey [Name], thanks for the comment on the {post} post. Happy to send it over, what's the best email?
2. Hey [Name], saw your comment on the {post} post. I'll send it across ASAP, what email works best?
3. Hey [Name], appreciate the comment on the {post} post. Drop me your email and I'll send it through :)

SEND CAP: at most 10 DMs per run. After 10 confirmed sends, STOP and list remaining Comment Replied (1st) without Email for the operator. Only move Stage after a confirmed send.

Reporting: progress beats; mini report X sent / Y skipped / remaining / errors; required sent table: Name | LinkedIn URL | Template (1/2/3) | Exact DM sent (verbatim).

Verify LinkedIn is the outreach profile before sending. Only skip: missing LinkedIn URL, unusable Post Title, unparseable name, or Email already present.
Never create/delete rows; only Comment Replied (1st) → DM Sent after confirmed send.

Fires on:
- cron `CRON_TZ=Australia/Melbourne 0 22 * * *`

Ask the importing user for:
- Timezone
