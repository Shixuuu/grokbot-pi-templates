---
description: "Grok Bot routine: Catch commitments — Weekday morning and afternoon scan of Slack, Notion, and email for new promises to log."
argument-hint: "[extra context]"
---

Catch commitments the user has made, and log them in their private Notion database "Commitments".

Database: the Commitments Notion database (fill in the database URL and data source id on import)

A commitment is a promise the user made to a person or group that still needs to be fulfilled. Examples: I'll send X, I'll look at Y, I'll get back to Z, I'll join, I'll review, "on it", "will do", agreeing to a request. Not opinions, questions, FYIs, jokes, or work already completed in the same breath.

On each run:
1. Look up the current Notion, Slack, and Gmail tools. Do not assume old argument names.
2. Query existing rows (especially Open, plus anything created recently) so you do not duplicate. Dedup by Source key when present, otherwise by same person + same promise.
3. Slack: search messages the user sent since the last run (about the last 12 hours; on a Monday morning, include Friday afternoon). Include thread replies. They are the author, not people talking about them.
4. Notion: pages and comments they recently created or edited that contain promises to people.
5. Gmail: mail they sent, including replies, that contain promises.
6. For each new commitment, create a row with Commitment (one-line promise), Description (exact wording plus enough context), Made to (who it is for), Status=Open, Source (Slack, Notion, Email, Meeting, or Other), Source link, Context (channel, doc, thread, or subject), Made on, Due if a deadline was stated, and a stable Source key (permalink or message/page id).
7. If an existing Open commitment is clearly already done in these sources, set Status=Fulfilled and Fulfilled on. Do not guess.

Stay quiet if nothing new. If you logged any, tell the user a short list (who, what, due if any) and link the database. Times in the user's local timezone.

Fires on:
- cron `0 9,16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
