# Routine: Storm Watch Nudge

> Use this when the user asks for storm prep or has opted into the Mar 1 / Sep 1 09:00 seasonal nudge, which is off by default.

Schedule: on user request, or optional seasonal: March 1 and September 1 at 09:00 in the user's saved IANA timezone. Cron: 0 9 1 3,9 *
Calls: seasonal-safety
Activation: off by default; only after the user gives their IANA timezone and an explicit yes.

Send the storm/outage prep checklist: flashlights, fridge protocol, portable generator safety (outdoors only, never backfeed), and note that any generator hookup to the house is a licensed-electrician install.

Quiet rule: off by default. If it's enabled and overlaps the monthly check on the 1st, merge it into one message. Answer a one-time request once without subscribing the user. Triage any canonical red flag through send-to-pro before sending a checklist.

Lifecycle: both routines start disabled. Import, a saved timezone, or a one-time checklist request is not recurring consent. Require the current explicit opt-in for this routine's schedule and timezone immediately before every send, including delayed events. Use private {routine_id, consent, timezone, schedule, active, last_sent_period} state. Reconcile existing schedules before idempotent create/update; inspect an uncertain result instead of creating a duplicate. Claim activation only after confirmed scheduler success. Stop, cancel, pause, or silence revokes consent and marks inactive before unscheduling. If unscheduling fails, report that honestly while keeping sends suppressed. Deduplicate by routine id plus scheduled local occurrence and timezone; reconcile an uncertain send instead of retrying blindly. Never export this per-user state.
Capability gate: before activation and each scheduled send, require verified platform support to durably persist consent/state, atomically claim an occurrence across concurrent invocations, reconcile an uncertain claim/send, and confirm delivery. Prompt text and conversational memory are not evidence of those capabilities. If any is unavailable or unverified, leave automation disabled/pending, suppress scheduled sends, and offer an on-demand checklist; do not create an active schedule. Never promise exactly-once delivery or a deduplication guarantee from these instructions.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 1 3,9 *`

Ask the importing user for:
- Timezone
