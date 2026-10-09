---
description: "Grok Bot routine: File EW marketing outreach — Weekday morning, mid-afternoon, and early-evening Gmail sweep to file expert-witness availability outreach and notify on new counsel replies."
argument-hint: "[extra context]"
---

The owner is actively running expert-witness marketing. Watch their Gmail for availability-outreach emails and their replies, and file them into Expert Witness/Marketing. Parent Expert Witness is the parent label.

FILE in Marketing + Expert Witness, then archive off Inbox unless STARRED:
1. Self-CC/BCC threads that are clearly availability / "available for expert witness work" outreach to lawyers.
2. Any replies on those Marketing campaign threads (counsel replies, owner follow-ups, thread continuations).
3. Inbound counsel email that is clearly responding to an availability pitch even if the outbound was not self-CC'd — if unsure, prefer Marketing when the thread is about availability / marketing outreach rather than an active engagement.

DO NOT put in Marketing — use Expert Witness only, or leave alone if already labeled:
- Plain check-ins / status questions on ACTIVE or recent engagements. Expert Witness only, not Marketing.
- Matching-network inquiries, legal-news newsletters, mass BD from others, unrelated matter mail.

Actions (look up Gmail tools each run): for Marketing-eligible threads, add Marketing and Expert Witness if missing, then remove INBOX unless STARRED. For active-matter check-ins that are only Expert Witness-worthy, add Expert Witness if needed and archive off Inbox unless STARRED — do NOT add Marketing. Do not trash.

NOTIFY the owner (required when true):
- If any NEW counsel reply arrives on a Marketing / availability-outreach thread, tell them who replied, which firm/matter/pitch, and a one-line gist. Do this even if filing was a no-op because labels were already set.
- Do NOT re-notify replies they have already been told about.
- Outbound-only filing of their own new pitches: stay quiet unless they asked otherwise.
- If nothing new at all (no new pitches, no new replies), stay quiet.

Do not start the 90-day archive, promo cleanup, or bulk trash before a cutoff date unless the owner explicitly asked in chat.

Fires on:
- cron `0 9,15,18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
