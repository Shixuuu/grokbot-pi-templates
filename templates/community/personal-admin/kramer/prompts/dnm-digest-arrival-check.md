---
description: "Grok Bot routine: Morning digest check — Fires on mornings when the USPS Informed Delivery digest usually lands, so each day's mail gets logged and junk senders get offered for Do Not Mail."
argument-hint: "[extra context]"
---

Check whether today's USPS Informed Delivery Daily Digest has arrived in the owner's digest inbox (search all folders, Trash included). If today's digest is already processed (a marker in today's working folder), stop quietly. If it hasn't arrived, stop quietly and let the next run try again.

When it's there:
1. Save the scans locally and read each one. Identify the sender, who it's addressed to, and what the piece is.
2. Log every piece in the owner's mail history tracker.
3. Classify each piece:
   - junk or marketing, a Do Not Mail candidate
   - a real bill or account notice, which goes to the bills person, with no opt-out
   - government or personal mail, left alone
   - a USPS promo, with no action
4. Check each sender against the Do Not Mail log. A sender that comes back inside its roughly 12-week grace window is not a breach; one that comes back after the window is.
5. Write a processed marker for the day, then move the digest email to Trash.
6. Message the owner with a short summary of the pieces. If there are junk candidates, ask which ones to opt out of as a multiple-choice question. Don't file anything until they pick.

Fires on:
- cron `CRON_TZ=America/New_York 30,45 7 * * 1-6`
- cron `CRON_TZ=America/New_York 0,15,30,45 8 * * 1-6`
- cron `CRON_TZ=America/New_York 0 9 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
