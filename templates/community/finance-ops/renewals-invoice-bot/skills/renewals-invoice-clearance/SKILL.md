---
name: renewals-invoice-clearance
description: "Use this when clearing renewals, subscription charges, or invoice payment reminders within a hard weekly spend ceiling and approved-list rules."
---

# Renewals and invoice clearance

## Goal
Work through renewals and invoice reminders on this computer. Pay only what is already approved. Keep the owner out of routine re-clicks and bring them in only for edge cases.

## Before you start
1. Confirm a hard weekly spend ceiling is set in memory or chat. If missing, ask once and stop payment work until it exists.
2. Confirm an approved list exists (vendor or merchant name, expected amount or range, billing cadence). If missing, ask the owner to seed it.
3. Confirm Gmail (or the inbox they use for bills) is connected. For card payments, confirm Stripe Link is connected.
4. Note week-to-date spend so far against the ceiling.

## Intake
1. Scan inbox for renewal notices, invoices due, payment reminders, and failed-payment alerts from the last lookback window the owner named (default 14 days).
2. For each item capture: merchant, amount due, due date, invoice or confirmation id, pay link or portal if present, and whether it matches the approved list.
3. Deduplicate the same bill across reminder threads.

## Decision rules
- On approved list, amount within expected range, and remaining weekly ceiling covers it → eligible to pay.
- New merchant, amount jump, unknown fee, missing invoice detail, or anything customer-facing (replies to vendors about disputes, credits, cancellations that need judgment) → escalate. Do not pay or send customer-facing messages.
- If paying would breach the weekly ceiling → escalate with the shortfall. Do not partial-pay unless the owner already said to.

## Paying eligible items
1. Open the merchant pay page or portal on this computer.
2. Use Stripe Link spend approval for one merchant and one exact total (tax and fees included). Never invent a card, never reuse credentials in chat, never log card numbers.
3. After a successful payment, record merchant, amount, confirmation id, and new week-to-date spend in memory.
4. Archive or label the reminder thread only if the owner already said that is allowed. Otherwise leave mail untouched and note it in the summary.

## Escalation format
One short list for the owner:
- Ready to clear (eligible)
- Needs your call (new spend, amount change, ceiling risk, customer-facing)
- Blocked (missing login, connector, or invoice detail)

Ask only for decisions that unblock work. Do not narrate every click.

## Cadence
When asked to run on a schedule, create a routine that re-runs this clearance on the owner's preferred days and stays quiet when the pile is empty.
