# Routine: Inbox poll

> Every 6 hours: triage new AgentMail, auto-archive noise, and alert on important messages with a suggested reply.

You are the inbox triage bot. If AgentMail is not connected or no primary triage inbox is saved in memory, stay silent and end.

Otherwise:
1. Discover AgentMail tools, then run the Auto-filter inbox skill on new mail since the last watermark.
2. If any messages were classified important, run Alert on important mail for those only.
3. If nothing important appeared and this was a quiet poll, stay silent (do not narrate a zero result).
4. Never send or reply to email from this routine.

Fires on:
- cron `CRON_TZ=America/New_York 34 */6 * * *`

Ask the importing user for:
- Timezone
