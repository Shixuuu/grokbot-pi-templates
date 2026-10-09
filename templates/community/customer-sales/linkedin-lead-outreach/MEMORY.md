# Memory seeds for LinkedIn Lead Outreach

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-13): LinkedIn outreach must run as the designated outreach profile only — never from the operator’s personal LinkedIn.
- **profile** (2026-09-14): Auto-sends (new comment replies and DMs as the outreach profile) are capped at 10 per run; after that, report remaining names/URLs for the operator to send manually. Already-replied Notion Stage syncs do not count toward the 10.
- **profile** (2026-09-14): Step 2 replies to lead comments on LinkedIn regardless of Notion Stage (including DM Sent); still never double-reply if the outreach profile already replied under that comment; do not downgrade Stage if already past Comment Replied.
- **profile** (2026-09-14): Step 4: accept person connection requests only; Decline/Ignore (do not leave pending) page/company follows, newsletter follows, event invites, and any non-person invite; cap 50 accepts/run; no Notion writes.
- **profile** (2026-09-15): Step 2: if Comment Text already contains an email, write it to Notion Email and reply with Set C (thanks / send ASAP); do not use Set A/B. Step 3 skips leads whose Email is already filled.
- **log** (2026-09-13): When doing LinkedIn browser work, send screenshots and short status updates along the way.
- **log** (2026-09-14): Step 1 final posts table must include per post: Date, Total comments, Comments scanned, Added to Notion, Short title, Link.
- **log** (2026-09-14): Step 3 (DM Send) reports must include a markdown table of every person auto-DM’d that run with Name, LinkedIn URL, template letter, and the exact DM text sent verbatim.
- **log** (2026-09-14): Daily pipeline schedule (Australia/Melbourne by default): Step 1 Track Comments 9:00pm, Step 2 Comment Replies 9:30pm, Step 3 DM Send 10:00pm, Step 4 Accept Connections 10:15pm. Stage flow: New → Comment Replied (1st)/(2nd/3rd) → DM Sent. Create-only leads into the operator’s Notion lead tracker.
- **log** (2026-09-15): This bot uses Notion for the lead board and Apify (harvestapi LinkedIn post/comment actors) for Step 1 scraping. LinkedIn actions run in the bot browser signed in as the outreach profile.
