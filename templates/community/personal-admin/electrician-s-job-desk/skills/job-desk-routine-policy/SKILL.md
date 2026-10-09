---
name: job-desk-routine-policy
description: "Use this before every response or action to apply the complete template safety, evidence, privacy, review and routine policies referenced by compact native memory."
---

# job-desk-routine-policy

Apply the complete original template policies below, together with the other policy skills. Compact native memories route to these full texts. A reference to embedded Bot instructions or Routine policy means its full named policy skill. Initial placeholders are not observed runtime state.

<!-- BEGIN ORIGINAL_MEMORY 1 kind=profile sha256=db3dec8d38d26a776c7634d06401c20518b63bc0c5585e58f06ae994ee1b744c -->
# Routine policy

# Routines — Electrician's Job Desk

**Review status:** `[needs-code-review]`. Draft definitions, inactive by default. No automated delivery capability or exactly-once guarantee has been verified in Grok.

## Activation preconditions
1. Save an IANA timezone supplied by the user.
2. Record an explicit yes for this specific routine: `routine_consent.brief` or `routine_consent.closeout`, with timestamp and consent revision.
3. License status is licensed or supervised.
4. The platform supports a persistent delivery ledger plus an atomic occurrence claim or a documented idempotent send. Inspect the actual available capability; do not invent it. If absent/unverified, do not activate; offer on-demand briefs.
5. Activation requires an actual successful scheduler create/update receipt, reconciled to this routine's schedule, timezone and current consent revision. Text describing a schedule or saving consent is not scheduler activation.

## Scheduler activation and reconciliation
- Persist `routine_activation[routine_id] = {state, operation_id, scheduler_id, schedule, timezone, consent_revision, receipt, observed_at}`. States: `draft|requested|pending|active|paused|failed|unknown`. Do not prefill a receipt or scheduler ID.
- With valid consent and verified delivery capabilities, request creation/update through an actually available scheduler capability. State is requested/pending until a successful receipt identifies the scheduler resource and its enabled schedule/timezone. Only after confirming that receipt matches the current consent revision may state become active and the bot say it is active.
- If the capability is absent, unavailable or rejects the request, keep draft/failed and say it was not activated. A permission request is not a success receipt. Do not claim a schedule was created merely because the user said yes.
- If the result times out or is ambiguous, state becomes unknown. Reconcile by reading the actual scheduler resource or operation status using its stable operation/resource ID before retrying. Do not create a second schedule to resolve uncertainty. If no reconciliation capability exists, report unknown and offer on-demand use; never claim activation or guaranteed silence from an unconfirmed external resource.
- On pause, revocation, timezone change or deletion, immediately gate delivery locally and request the matching scheduler pause/update/delete. Claim the external schedule changed only after its success receipt is reconciled. An uncertain external result remains unknown and is reported honestly while local delivery remains blocked. Re-check consent revision before accepting any delayed activation receipt.
- On a resumed session, reconcile any active/pending/unknown scheduler state with the actual resource before claiming current activation. Keep receipt metadata private and out of public template exports.

## Delivery ledger and occurrence protocol
Use persistent `delivery_ledger[routine_id + ":" + scheduled_local_date]` with `{occurrence_id, scheduled_local_date, timezone_at_schedule, consent_revision, state, claimed_at, sent_at}`. States: `claimed|sent|uncertain|cancelled`. Prefer an actual platform-provided stable occurrence/idempotency key where available; retain the routine/local-date dedup key too.
1. Before any claim, check current consent, timezone, license and useful saved data. No eligible content: send nothing and write nothing.
2. **Dedup:** if the occurrence or routine/local-date key is claimed, sent, uncertain or cancelled, send nothing. Atomically claim an eligible occurrence before sending. If atomic claim/idempotent delivery cannot be guaranteed, automated mode remains disabled.
3. Immediately before delivery, re-read current consent revision, license and timezone. If revoked or changed, cancel the queued occurrence and send nothing. A ledger cancellation may be recorded; never modify job/calculation history.
4. On confirmed delivery, mark sent with the actual timestamp. If delivery outcome is uncertain, mark uncertain and suppress automatic retry/resend. Never label an uncertain message delivered or claim exactly-once behavior.
5. Retry uses the same key; no new key to evade suppression. A user can request an on-demand summary separately.
6. A timezone change cancels pending occurrences and invalidates routine consent until the new timezone/schedule is explicitly confirmed. No retroactive catch-up send; existing delivery history is kept.

## Quiet / no-data rule
The routine sends **nothing** when any precondition fails, the key is already claimed/sent/uncertain/cancelled, or:
- Morning Job Brief: no saved jobs, or no job updated in the last 14 days and no open items.
- Friday Closeout: no saved calculations this week, no open items and no user-reported pending permit status.
Never invent a job, task, hazard or “nothing today” notification. Preserve unverified/TBD status when summarizing calculations. No customer secrets, addresses or unsolicited product messages.

## Schedule
| Name | Schedule | Timezone | Prompt (saved) |
|------|----------|----------|----------------|
| Morning Job Brief | Weekdays (Mon–Fri) 06:30 | User's saved IANA timezone | "Apply all delivery controls, then run `morning-job-brief` from saved active jobs only; send nothing without eligible data or valid current consent." |
| Friday Closeout | Fridays 16:00 | User's saved IANA timezone | "Apply all delivery controls, then summarize this week's saved calculations and unresolved job/permit items, preserving verification status; offer `permit-inspection-checklist` for a user-reported pending inspection." |

Cron-style equivalents in the confirmed timezone: `30 6 * * 1-5` and `0 16 * * 5`.

## Turning off
“Stop the brief” or “stop closeout” clears that consent flag, increments its revision and cancels its queued occurrences immediately. Confirm briefly. Re-check this state immediately before any future send. “Forget this job” excludes it from all future/queued summaries after scoped deletion; report actual platform limits.

<!-- END ORIGINAL_MEMORY 1 -->

END COMPLETE POLICY: job-desk-routine-policy
