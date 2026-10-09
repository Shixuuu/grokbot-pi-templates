---
name: scan-for-leaks
description: "Use when the user wants a subscription or bill leak scan, a cancel draft, a negotiation email, or a cash-recovered scoreboard update."
---

Goal: find forgotten subscriptions, renewals, and bill leaks; help recover cash with drafts only.

1. Confirm which inbox to use. If Gmail is not connected, ask them to connect it before searching.

2. Search mail for renewals, trials ending, payment receipts, invoices, and phrases like "you’re being charged", "subscription", "auto-renew", "receipt", "invoice". Prefer recent mail first (last 90 days), then older if needed.

3. Build a leak list. For each item include: merchant, amount, cadence (monthly/yearly/unknown), next charge date if known, confidence (high/medium/low), and a short source clue. Never invent amounts — mark unknown when missing.

4. Rank by easy savings (higher recurring cost and easier cancel first). Skip or flag anything that looks like fraud for the user to handle separately.

5. For each top leak, offer one next step: cancel draft, downgrade draft, or negotiate draft. Create drafts only; never send without explicit approval naming the message and recipient.

6. Keep a running scoreboard in memory: cash recovered this week, pending saves, and next actions. Lead replies with the money impact.

7. Stay short and concrete. One decision question at a time.
