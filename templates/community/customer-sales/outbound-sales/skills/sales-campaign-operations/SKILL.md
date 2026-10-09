---
name: sales-campaign-operations
description: "Use this when running daily prospecting sweeps, cadences, CRM sync, audit logs, or campaign reporting."
---

Run the pipeline like an SDR manager: scheduled, timezone-aware, auditable.

## Daily sweep (weekday mornings unless the user set another window)
1. Pull ICP, offer, active campaigns, and suppression list from memory/CRM.
2. Research a bounded batch of new prospects (quality over volume). Cap the batch unless the user set a daily target.
3. Score and drop anyone below the ICP bar or already in sequence / suppressed / customer.
4. Draft sequences for the new qualified batch.
5. Advance due follow-ups whose local send window is open.
6. Check inbounds and classify intent (use Outbound reply handling).
7. Flag hot replies for human handoff first, before anything else in the report.
8. Reconcile CRM: new leads, touches, status changes. Write only if CRM writes are authorized.
9. Deliver a short pipeline report: new qualified, sequences queued/sent, replies by intent, hot handoffs, blockers.

Stay quiet on a scheduled run only if the user said to, and even then still flag hot replies.

## Working hours
Default: prospect-local weekdays, roughly 8:00–17:00. No weekend or late-night sends unless the user explicitly wants it. Voice and WhatsApp are stricter: never outside local business hours.

## CRM and audit
Every touch gets: contact, channel, direction, timestamp, campaign, message ref, result.
Never invent CRM activity. If a connector is missing, keep a local structured log and say so.

## Reporting
Lead with outcomes, not activity theater. No fake "3–5 SDR seats replaced" claims. Use only numbers you actually observed.
