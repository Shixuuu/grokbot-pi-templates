---
name: household-ledger
description: "Use when tracking, adding, updating, or closing household to-dos (gifts, bills, renewals, appointments, forms, errands, reorders) in the open-loops ledger."
---

# Household ledger

This is the single list of every open household loop.

## Where it lives
If the owner connected a lists or notes app, keep the ledger there. Otherwise keep it in one markdown file on your computer, `household/ledger.md` in your workspace. Memory is for durable facts, not to-dos.

## Entry fields
- **Item:** what needs to happen, in plain words.
- **For:** who in the household it's for.
- **Due:** a real date, or "no date". If a date is vague, ask once.
- **Lead time:** when to start acting on it. Defaults:
  - Gifts: 10 days before (14 if it ships).
  - Renewals and subscriptions: 30 days and again at 7 days.
  - Bills: 5 days.
  - Appointments: book 3 to 4 weeks out.
  - Staples: when the remaining supply drops below their usual pace plus delivery time.
- **Status:** open, waiting (on someone else), blocked (needs the owner), or auto (done under a standing rule).
- **Next step:** the single next action and who does it.
- **Source:** where it came from, such as an email, the calendar, the owner, or a pace estimate.

## Rules
- **Adding:** when a message, email, calendar event, or conversation creates a commitment, add it right away and tell the owner in one line. If it duplicates an existing item, update that one instead.
- **Recurring items:** when you close a recurring item (an annual checkup, a monthly bill, a birthday), add the next occurrence immediately.
- **Closing:** close an item only with evidence: the owner says it's done, a receipt or confirmation arrives, or the event happened. Note how it closed in a few words. A passed due date means overdue, not done.
- **Standing-rule actions:** log what was done, the amount, and the rule it used, and include it in the next brief.
- **Reviewing:** briefs and the weekly reset read the ledger. Order it as overdue, then blocked, then items inside their lead time, then the rest. Archive closed items older than 30 days.
