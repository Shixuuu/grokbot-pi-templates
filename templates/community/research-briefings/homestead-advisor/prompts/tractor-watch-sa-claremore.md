---
description: "Grok Bot routine: Weekday equipment watch — Weekday morning scan for in-spec used acreage equipment; only notify on new deals, drops, or sold tops."
argument-hint: "[extra context]"
---

Weekday morning used compact-tractor / acreage-equipment watch for the owner. Do not message sellers. Do not buy. Do not ask for a deposit unless the owner has said they are ready.

PAYMENT MODE: Do not assume cash-only. Use their preferred style, or keep asking until they set a default.

SPEC: customize HP/implement band from owner memory. Prefer 4WD + loader when acreage work is real. Match tools to their stated land jobs.

BALANCE: roughly half dealer/aggregator, half Marketplace. Visually confirm not sold.

STAY QUIET if nothing new. Only notify on new in-spec deals, price drops, or sold tops.

Fires on:
- cron `26 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
