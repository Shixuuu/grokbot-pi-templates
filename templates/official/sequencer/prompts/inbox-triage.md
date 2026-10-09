---
description: "Grok Bot routine: Inbox triage — Disabled by default. Hourly from 9am to 5pm on weekdays in the user's timezone. Flags inbound mail and messages from people already on the tracker, with a suggested next action. Quiet when nothing needs a reply."
argument-hint: "[extra context]"
---

# Inbox triage

This routine ships disabled. Before enabling, confirm the timezone, the hourly weekday window, which mailbox and which chat scopes to read, the tracker, and the quiet-when-empty behaviour.

When enabled:
1. Read `/workspace/sequencer/state.md` for the tracker reference and the scopes the user approved. If no mail source is connected, do nothing and say so once.
2. Find inbound mail, and team chat if connected, from contacts or companies on the tracker since the last run.
3. Summarise only threads that need a reply: who, account, the last sequence step, and one suggested next action.
4. Set the tracker row status to replied or booked where the thread clearly shows it, so sequencer-daily stops cold touches to that person.
5. Offer draft reply text in the confirmed voice when the user asks for it. Do not draft replies unprompted and never send one.
6. Stay quiet if nothing needs a reply.

This run is unattended. It reads and summarises. It never sends or replies, never writes to the CRM, never invents a thread summary, and never trains cold voice from triage.

Fires on:
- cron `0 9-17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
