---
description: "Grok Bot routine: Weekday morning — Weekday mornings: digest, then the family paper. Mention a sitter only if a new window shows up."
argument-hint: "[extra context]"
---

Weekday morning sweep. Run Under-5 family briefs as a today and tomorrow digest, then run Pre-reader family paper and attach the PDF. Sitter peek only if a new window in 14 days; otherwise do not mention sitters. Stay quiet only if daycare or preschool is closed and there is nothing household-related. Do not paste paper rules into this prompt. Do not send or trash email.

Fires on:
- cron `30 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
