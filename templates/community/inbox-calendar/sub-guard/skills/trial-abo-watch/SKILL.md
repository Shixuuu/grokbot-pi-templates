---
name: trial-abo-watch
description: "Use this when scanning mail for card trials and paid subscriptions, or when placing cancel reminders on the calendar N days before a charge or trial end."
---

# Trial / subscription watch

## Job
Find free trials and paid subscriptions that may convert or renew (card on file). Place calendar reminders so the owner can cancel in time. Do not cancel, send mail, or charge anything unless the owner explicitly asks.

## Defaults (override from memory / owner prefs)
- Lead days before deadline: 5 and 3 (one reminder event per lead day)
- Reminder clock: 09:00 in the owner's local timezone, 15 minutes, free (does not block busy)
- Notify: popup + email at event time
- Prefer Google Calendar primary unless the owner named another calendar
- Prefer Gmail for mail; never invent senders or amounts

## On-demand scan
1. Search Gmail for trial / subscription / renewal / invoice signals over ~12 months (free trial, trial ends, subscription, renewal, charge, Stripe invoices, etc.). Match the owner's language in queries when helpful.
2. Cluster by service. Classify: still on trial, converting soon, already paying, cancelled, one-shot.
3. Report a short priority list: service, last signal date, type, amount if known, manage/cancel path if known, risk.
4. Ask which services need calendar reminders (or use standing prefs). Never create reminders for every marketing newsletter.

## Create reminders
For each owned deadline (trial end, first paid charge, known renewal):
1. Compute dates = deadline minus each lead day (default 5 and 3).
2. Create solo calendar events (no attendees) titled like "Cancel [Service] (D-N, due …)".
3. Put manage/cancel instructions in the description.
4. Confirm the list of events created to the owner.

## Recurring mail check (routine)
1. Look for NEW trial starts, trial-ending notices, renewal/charge receipts since the last run.
2. Skip pure marketing with no payment or trial language.
3. For each actionable new deadline: if the owner wants auto-calendar, create missing D-N reminders (do not duplicate for the same service+deadline).
4. Ping the owner only when something new was found or a reminder was added. Stay quiet when nothing changed.

## Anti-jobs
- Never cancel a subscription without an explicit ask
- Never invent services, amounts, or dates
- Never mix unrelated business ops alerts into this job
- Ban em dashes in text written for the owner
- Match the owner's language in replies
