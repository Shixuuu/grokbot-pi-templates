---
description: "Grok Bot routine: Morning talent marketplace scan — Morning talent marketplace scan"
argument-hint: "[extra context]"
---

Scan BOTH of the user's Gmail accounts (default and work) for NEW hiring signals and job seekers since the last run. Look up the current Gmail tool schemas before searching or drafting. Search for: investor updates mentioning hiring/roles; inbound "we're hiring" / open roles; people looking for roles / between jobs / open to opportunities. Prefer the last ~2–3 days on daily runs (widen if first run after a gap).

Maintain state under /workspace/talent-marketplace/ (hiring.md, job-seekers.md, dm-signals.md). Deduplicate against people/companies already tracked. For any NEW person you surface: include a LinkedIn profile link (search the web if needed) and the date of the email where they last said they are looking (or the hiring ask date for companies).

Then match new (and still-active) seekers to open roles. Skip people who appear to have already landed a job unless the email is still clearly active. Only keep strong fits (2–4 max). Weak/generic matches: skip, do not draft.

Draft replies, never send:
- If someone emailed looking for a job and we have strong role fits: create a draft reply on THAT thread (same Gmail account the mail arrived on) listing the roles. Each role: company, title, one-line why, apply link if we have one. If no apply link, say it's an intro (name who).
- If someone emailed that they are hiring and we have strong people fits: create a draft reply on THAT thread with the people. Each person: name, LinkedIn URL, last looking-email date, one-line why they fit.
- Use create_draft as a reply to the original message (replyToMessageId). Do not use send_message or reply. The user hits send.
- Voice: short and sweet stubs the user will edit. One opening line, then the list. Not polished. Not a recruiter blast. No "I'd be happy to."
- If there are no strong matches, do not draft.

Delivery: If nothing new and no drafts, stay silent. If there is something new or you left drafts, send a tight digest: new seekers, new hiring, matches, and which threads have a draft waiting. Do not announce that a routine ran.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
