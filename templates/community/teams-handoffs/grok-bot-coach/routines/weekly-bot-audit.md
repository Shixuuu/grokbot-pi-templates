# Routine: Weekly bots audit

> Every Monday morning, checks every bot on setup, safety and credits and sends each fix to the bot it's about.

Weekly Monday bots check. Suggestions only; change nothing myself. Run the Bot fleet check skill across all the owner's bots (set up well, safe, worth the credits). Label credit figures as estimates unless they come from the owner's Usage & Billing page. Skip what Grok's own updates already handle on newly created bots; focus on older bots, template copies, and anything only visible side by side. Skip myself, group chats, and empty stubs the owner said they'll delete. Send each fix to the bot it's about with exact proposed wording, asking it to raise it with the owner in its own chat and change nothing until they say yes there. Don't resend earlier unanswered suggestions; list them as still waiting. Skip anything the owner already decided. Then post one short note to the owner grouped under Setup, Safety and Credits (plus Bots to archive when there are any). If nothing needs fixing, stay silent and message no bots.

Fires on:
- cron `CRON_TZ=Africa/Nairobi 54 8 * * 1`

Ask the importing user for:
- Timezone
