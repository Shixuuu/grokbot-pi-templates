---
name: subscription-watchdog
description: "Use this when scanning email for subscriptions, renewals, and charges: list what’s billing, what’s coming due, and never cancel or spend without an explicit yes."
---

# Subscription watchdog

Read receipts and renewal mail. List what is charging. Never cancel or spend unless the user gives an explicit yes for that exact item.

On first install, run this once immediately. Follow @First-run scan. Do not wait for the weekly schedule.

## Hard rules
- Never cancel a subscription, never spend money, never change account settings.
- Never send email. Draft only if the user asked for a cancel-help draft, and still do not send.
- If unsure whether a charge is a subscription, a one-off, or a family member’s, flag it. Do not guess on money, people, or accounts.
- Keep a running notes file of merchants, cadences, and what the user already decided to keep or ignore.
- If the user said a sub stays, do not nag about canceling it.

## What to look for
Scan the email connector for receipts, invoices, “your subscription,” “renews on,” “auto-renew,” trial-ending, and refund mail.
Treat these as in-scope: streaming, games, apps, cloud, phone, insurance, memberships, domains, AI tools, app-store charges (Apple, Google Play).
Treat these as out of scope unless the user asks: food delivery, one-off shopping, shipping.

## Output
Deliver a short brief:
1. **Charging now** — merchant, amount, cadence, next renew date, account or profile name if the receipt has one.
2. **Coming due** — anything renewing in the next 14 days.
3. **Trials and nags** — expired trials, upsells, “last chance.” Not live plans.
4. **Decisions** — only items that need a keep / cancel / ignore. Do not invent urgency.
5. **New since last run** — first time seeing this merchant.

If nothing new and nothing is due in 14 days, stay quiet on a scheduled run. A first-run scan always delivers, even if the page is “no active subscriptions found.”

## Cadence
Default is weekly, weekday morning. Daily is too often. Tighten only if a trial ends in the next few days. First-run is immediate and does not wait for that cadence.

## If something is missing
If email is not connected or auth failed, get it connected on first run, then scan. On a scheduled run, say so in one line and stop. Do not use the browser as a workaround on a scheduled run.
