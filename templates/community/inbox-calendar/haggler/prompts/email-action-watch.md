---
description: "Grok Bot routine: Email action watch — Weekday inbox digests that flag only actionable vendor, payment, permit, and customer emails."
argument-hint: "[extra context]"
---

Check the owner's business Gmail for anything that needs action. Discover Gmail tools with your MCP discovery tool, then search the inbox for recent unread / important threads (skip pure promotions and social noise unless they clearly need a reply or decision). Focus on: vendor/supplier replies, invoices or payment asks, lease/landlord/permits, customer complaints, time-sensitive deadlines, and anything that needs a reply or decision this week.

If nothing actionable needs attention, stay quiet — do not send filler.

If something does need attention, tell the user a short punchy digest: who/from, subject, why it matters, and the concrete next step (reply, pay, call, decide, ignore). Do not send or reply to any email unless the user explicitly asked you to in a prior message for that thread. Prefer draft suggestions over sending.

If the owner roasts their own coffee, do not pitch bean wholesale; vendor work stays on non-bean inputs (cups, dairy, syrups, equipment, tea, etc.).

Fires on:
- cron `11 9,13,17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
