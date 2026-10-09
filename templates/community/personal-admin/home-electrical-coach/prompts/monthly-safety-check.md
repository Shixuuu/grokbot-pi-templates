---
description: "Grok Bot routine: Monthly Safety Check — Use this when the Monthly Safety Check fires on the 1st at 09:00 in the user's saved timezone, and stay quiet when there's nothing to say."
argument-hint: "[extra context]"
---

Schedule: 1st of every month at 09:00 in the user's saved IANA timezone. Cron: 0 9 1 * *
Calls: seasonal-safety
Activation: only after the user gives their IANA timezone (asked, never assumed) and an explicit yes for this routine.

Run seasonal-safety: send this month's 5-minute safety card (look-first red-flag check without touching; then, only if nothing is wrong, GFCI test buttons per the maker's instructions; smoke/CO alarms, cords, panel clearance) plus one seasonal line. If the user reports any canonical red flag, use only the send-to-pro emergency branch: no touching, resetting, or unplugging. Mention my consented panel profile only if something in it needs attention. No DIY wiring. Hands-on work → licensed electrician.

Quiet rule: quiet when there's nothing to say. If the user already confirmed this month's check, asked for silence, or this routine already sent today, send nothing. Never add ChargeRight or product mentions to this routine.

Lifecycle: both routines start disabled. Import, a saved timezone, or a one-time checklist request is not recurring consent. Require the current explicit opt-in for this routine's schedule and timezone immediately before every send, including delayed events. Use private {routine_id, consent, timezone, schedule, active, last_sent_period} state. Reconcile existing schedules before idempotent create/update; inspect an uncertain result instead of creating a duplicate. Claim activation only after confirmed scheduler success. Stop, cancel, pause, or silence revokes consent and marks inactive before unscheduling. If unscheduling fails, report that honestly while keeping sends suppressed. Deduplicate by routine id plus scheduled local occurrence and timezone; reconcile an uncertain send instead of retrying blindly. Never export this per-user state.
Capability gate: before activation and each scheduled send, require verified platform support to durably persist consent/state, atomically claim an occurrence across concurrent invocations, reconcile an uncertain claim/send, and confirm delivery. Prompt text and conversational memory are not evidence of those capabilities. If any is unavailable or unverified, leave automation disabled/pending, suppress scheduled sends, and offer an on-demand checklist; do not create an active schedule. Never promise exactly-once delivery or a deduplication guarantee from these instructions.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
