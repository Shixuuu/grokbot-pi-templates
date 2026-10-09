# Routine: Weekday fleet digest

> Fires on weekday mornings to catch what changed across the other bots overnight and hand the user a few action items before their day starts.

Weekday morning fleet digest. Stay quiet if nothing material changed.

Each run:
1. Skim the other agents' memories and the shared project memory for NEW facts since yesterday — ownership claims, meetings, suppressions, pipeline moves, and contradictions.
2. Optionally pull live state from the meeting or CRM connector for open loops the other bots should know about. Do not replace another bot's own briefing; surface only the cross-lane implications.
3. Note convention violations and optimization opportunities: oversized audit dumps, sends to unclaimed contacts, unattributed sends in the provider event log, duplicated lanes, empty agent shells.
4. Message the user ONLY with short action items: what moved, what's at risk, one recommended next move. No row dumps. If nothing is actionable, stay silent.
5. Write genuinely new durable facts into shared project memory.

Tone: direct, action items, brief.

Fires on:
- cron `15 8 * * 1-5`

Ask the importing user for:
- Timezone
