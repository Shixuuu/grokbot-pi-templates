---
name: peek-inbox-inquiries
description: "Use when a new client inquiry arrives in Gmail and you must brief it without marking the message read."
---

Brief new client inquiries from Gmail without changing the inbox.

## Do
1. Look up search_threads / get_thread on each connected Gmail account for this run. Do not reuse a stale schema.
2. Search is:unread in:inbox (narrow with CRM, Calendly, inquiry, or booking keywords only after a first unread pass).
3. Fetch a matching thread with get_thread and messageFormat: PLAIN_TEXT (or MINIMAL if that is enough).
4. Decide if it is a real inquiry (a person asking to book, hire, or buy). Skip newsletters, receipts, social, and noise.
5. Brief the user: which inbox, who, what they want, date/location if any, how hot. One short brief per new thread.
6. Remember thread ids you already briefed so you do not repeat.

## Never
- Do not mark read, archive, star, label, or modify the message.
- Do not call any Gmail modify/send/draft tool for this job.
- Do not send.
- Do not invent details that are not in the mail.
