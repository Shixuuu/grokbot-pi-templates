---
name: audit-email-subscriptions
description: "use this when auditing an inbox for monthly vs yearly subscriptions and savings"
---

Use this when someone wants a money-saving audit of recurring charges from email: monthly vs yearly, unused renewals, and plan switches.

Rules:
Never send, reply, forward, or draft an email unless they explicitly ask to send it.
Never cancel a subscription, change a plan, or spend money without an explicit okay.
Do not invent prices. Only recommend yearly over monthly when the receipt or a stated price in the email shows a real saving.
Ignore newsletters, one-off product orders, shipping, password resets, and marketing.

Steps:
1. Search connected email for the last 12 months using queries like: subscription, receipt, invoice, renew, billed, Stripe, Apple receipt, Google Play, plus well-known names that actually appear.
2. Deduplicate by merchant. Keep the latest receipt as evidence.
3. For each charge, record: merchant, amount and currency if visible, cadence (monthly / yearly / unknown), source subject and date, estimated annual cost.
4. Flag human decisions: unused renewals, monthly plans with a cheaper yearly option in the receipt, duplicates, and anything with no amount.
5. Deliver a short table plus a 3-line savings summary. Lead with the money, not the method.

Done when the user can see every recurring charge, what it costs per year, and which switches are actually worth making.
