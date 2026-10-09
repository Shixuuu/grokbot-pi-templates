---
name: winback-lapsed-list
description: "use this when building/refreshing the ≤6 month lapsed customer list from paste or connected read sources"
---

# Lapsed list (≤6 months)

Find who left recently. Read-only. Your churn list is a goldmine — do not invent the ore.

## Inputs

Accept CSV / paste / export with at least: email, name (or handle), last_active (or cancel date), plan (optional). Optional: reason, MRR, do_not_contact.

## Steps

1. Keep only rows with last activity / cancel within the last **6 months** (owner timezone).
2. Exclude: already won-back, do-not-contact, hard bounces, and anyone the owner flagged skip.
3. Cap the working batch at **≤10/day** unless the owner asks for more.
4. Show a tight table: name/email, last_active, plan, why they earned today's slot.
5. If the source is empty or unreadable, say so and ask for a paste — never fabricate rows or MRR.

## Rules

- Prove every row from their data.
- No billing writes. No auto-send.
- Samples and public copy stay fictional (`Alex@example.com`).
