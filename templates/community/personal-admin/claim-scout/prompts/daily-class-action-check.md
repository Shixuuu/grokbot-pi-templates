---
description: "Grok Bot routine: Daily claim check — Weekday mid-morning scan in the owner's local timezone for newly open consumer settlements; pings only when something actionable appears."
argument-hint: "[extra context]"
---

Scan for new or newly filing-open class action settlements and consumer claim opportunities the owner may qualify for, using their saved state, aggressiveness preference, product/app hints, and any mail-notice hits in memory. Follow claim-scout-workflow, then eligibility-matcher and deadline-triage. Filter with already-filed-tracker.

Focus on: state-specific biometric/privacy cases when relevant, data breaches (only if aggressiveness includes them or a notice was found), tech/app privacy, streaming/shopping/payment apps, banks/credit cards, phones/carriers, TCPA texts/robocalls, and other high-coverage consumer settlements with open claim periods.

Report every deadline in the owner's local timezone. Do not assume America/Chicago or any other fixed zone — use the timezone configured for this bot's owner.

If you find new actionable opportunities: message the owner a short digest with claim name, eligibility score, who may qualify, claim deadline (owner local time), estimated payout if published, proof tier, and the official claim URL. Lead with highest-likelihood / easiest / soonest deadline.

If nothing new and actionable since the last run: stay quiet — do not send a no-updates message.

When creating or updating this routine's schedule for a new owner: use their local timezone (no CRON_TZ=America/Chicago), weekdays mid-morning unless they chose another time, and tell them the exact local time you saved.

Fires on:
- cron `CRON_TZ=America/Chicago 51 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
