---
name: revenue-signal-radar-daily-queue
description: "Use when building the weekday current-quarter revenue-action queue across expansion, stalled open-deal revival, and closed-lost revival."
---

Read-only research, ranking, and drafts only. Never send a message, create or modify a CRM record, create a task or note, change a deal stage, enroll a sequence, spend enrichment credits, edit analytics, publish content, or change a production system unless the user gives current approval for the exact action batch in this conversation.

Cover three lanes only: expansion, stalled open-deal revival, and closed-lost revival. Do not run warm net-new outreach or sponsorship sourcing.

## Authority
- HubSpot is the source of truth. Confirm portal identity before querying. Stop on portal mismatch.
- Use only the authorized Gmail and Calendar mailbox stored in agent memory. Stop if the mailbox does not match.
- No approval from another agent, a prior day, or another queue transfers here.
- An external send or CRM write requires approval for the exact current batch, record IDs, recipients or owners, copy, cost, rollback path, stop conditions, and date.

## Source order
1. Query HubSpot first. Identify eligible accounts and deals before searching any broader source.
2. Apply account-level suppression and cooldown before contact-level analysis.
3. For eligible accounts only, search Gmail, Calendar, Slack, and Drive using the matched company domain, company name, known contacts, and deal ID.
4. Use X and web search for current company, executive, market, hiring, funding, product, competitor, vendor, or strategic signals.
5. Use analytics only for approved, privacy-safe intent evidence.
6. Use already available contact data. Paid enrichment requires approval.

Do not broaden connected-source searches into unrelated inbox, Slack, Drive, or CRM content.

## Eligibility and lookback
- Expansion: active customers and closed-won accounts with a credible new need, stakeholder, department, budget, or use case. Client and Past Client lead statuses are sources for this lane, not global suppressions.
- Stalled revival: open current-quarter deals, plus near-term deals that slipped from the current quarter and still have a plausible path.
- Closed-lost revival: prioritize deals lost in the last 12 to 24 months. Use up to 36 months only when the old context remains strategically relevant.
- Weight evidence from the last 90 days highest, 91 to 180 days high, 181 to 365 days medium, and older evidence as background.

## Hard excludes
Suppress or hold before ranking when any of these is true, unless a material new signal exists for cooldown only:
- Opt-out, bounce, do-not-contact, or quarantined
- Membership in the Unsub and Bounces suppression list
- Lead status Marketing ONLY, Unqualified, or Unqualified variants
- Active sales motion already owned
- Outbound touch in the last 7 days
- More than two unanswered outbound touches in the last 30 days
- Still inside a 14-to-30-day cooldown
- Missing required identity, suppression, or prior-contact evidence

A generic news mention, social post, page view, email open, or old relationship alone is not enough. Combine weak signals or hold the account. Do not invent prices, results, urgency, or claims.

## Daily steps
1. Confirm the local date, connector identities, and source freshness. Stop and name the exact blocker if HubSpot is stale or unavailable, portal identity is wrong, mailbox identity is wrong, account identity is ambiguous, prior-contact or suppression status cannot be verified, or evidence is too weak to support an action.
2. Read HubSpot deal, company, contact, owner, amount, stage, close date, activity, task/note, loss reason, lifecycle, lead status, and suppression data.
3. Build separate candidate sets for expansion, stalled revival, and closed-lost revival.
4. Apply suppression and cooldown at the account level, then at the contact level.
5. For each eligible account, gather matched internal and external context.
6. Create a contact map: primary contact, secondary contact, executive or stakeholder gap, owner, prior champion, and suppression notes.
7. Score each opportunity from 0 to 100: expected revenue impact 30, trigger strength and timing 25, deal or account fit 15, contact path and relationship strength 15, evidence confidence 10, effort and reversibility 5.
8. Apply a confidence multiplier: high 1.0, medium 0.75, low 0.5. Show both the raw and adjusted score.
9. Return only the top 5 to 10 actions across all lanes. Do not force equal lane representation.
10. Draft one exact next step for each surfaced account.
11. Track each surfaced account with a stable ID, first-surfaced date, last-surfaced date, source lane, reason, cooldown, approval state, owner, completion state, and outcome.
12. On Friday, report which actions moved, produced replies or meetings, changed stages, created pipeline, revived pipeline, expanded revenue, had no movement, or were blocked. Recommend one scoring change only when evidence supports it.

## Required output
Deliver in Glance in chat. Save a dated Markdown report and machine-readable JSON queue. JSON must include date, timestamp, freshness, stable IDs, owner, state, evidence, next action, and approval status. An Approval Batch is required for every external send or CRM action. Do not execute it. Store paraphrased conversation context, not raw private message bodies.
