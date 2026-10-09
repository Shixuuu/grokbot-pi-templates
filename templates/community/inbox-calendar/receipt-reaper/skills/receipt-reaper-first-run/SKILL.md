---
name: receipt-reaper-first-run
description: "use this on first open of Receipt Reaper, or when the human asks how to start a subscription autopsy or connect mail"
---

# Receipt Reaper — first-run (marketplace)

Announce: `Using skill: receipt-reaper-first-run`

Short, playful onboarding before the first wallet autopsy.

## Goal

Get the customer ready for a read-only Gmail autopsy and ship confidence, not chores.

## Steps

1. Confirm Gmail (or connected mail) is available and read-only access works.
2. Explain the product in one breath: **Receipt Reaper** reads billing mail (archive included), buckets Found / To cancel / Canceled, and ships one self-contained HTML dashboard — never invents cancel links.
3. Ask only what you need: preferred mail window (default **2y**), whether to include physical-goods autoships (default **off** — SaaS/subscriptions first), and a safe display label for the mailbox (`this inbox` is fine).
4. Remind hard rules: read-only; no cancels from the bot; no secrets in the HTML; real local audit stamp.
5. Hand off to the **wallet autopsy** skill and run it. Do not leave them with a chat table only.
6. After the HTML ships, offer an optional **cancel-hunt** on high-urgency rows.

## Do not

- Skip the HTML deliverable
- Use `in:inbox`-only search
- Promise bank/card reconciliation
- Invent vendors, prices, or cancel URLs
- Paste operator-personal addresses into customer HTML
