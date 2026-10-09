---
name: deadline-urgency-alerts
description: "Use this to compute deterministic CRITICAL/URGENT/WATCH/NORMAL/NOT_CALCULABLE urgency from extracted deadlines only, and to route alerts without inventing deadlines."
---

# Deadline Urgency Alerts

Deterministic urgency. Do **not** improvise tiers. Compute only from `Opportunity.deadline` vs the owner’s local now (default America/Chicago).

## Precondition

If `deadline = UNKNOWN` (source silent or says deadline not stated):

- `urgency = NOT_CALCULABLE`
- Do not alert on urgency
- Still include the Opportunity in digests with urgency shown as NOT_CALCULABLE

**Never invent a deadline.**

## Tiers (exclusive, first match wins)

Let `hours_remaining = deadline − now` (negative = past due).

1. **CRITICAL** — `hours_remaining ≤ 24` (includes past due)
2. **URGENT** — `hours_remaining ≤ 72` and not CRITICAL
3. **WATCH** — `hours_remaining ≤ 168` (7 days) and not CRITICAL/URGENT
4. **NORMAL** — `hours_remaining > 168`

## Routing (what to do — only via connected adapters)

| Urgency | Notify / act |
| --- | --- |
| CRITICAL | Teams + Slack + email (Gmail/Outlook) + calendar deadline hold — draft-first unless owner said send without preview |
| URGENT | Teams + Slack + calendar |
| WATCH | Daily digest only |
| NORMAL | Scheduled weekday digest only |
| NOT_CALCULABLE | No urgency alert; digest row only |

If a listed channel is **not connected**, skip it and note `channel_skipped` in the alert — do not pretend it fired.

## Alert payload

Short table: title/id, agency, deadline, urgency, fit_score, next_step. Attach or link Share Opportunity object when sharing.
