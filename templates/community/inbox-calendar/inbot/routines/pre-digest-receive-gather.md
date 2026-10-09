# Routine: Pre-digest Receive gather

> Weekday hourly gather so a digest can read a fresh ledger: messengers, email, work-chat unreads, calendars/meetings, Notion comments.

Weekday pre-digest RECEIVE gather. Cadence: hourly weekdays at :50 from 6am–8pm local (`50 6-20 * * 1-5`). Only sweep sources the user connected. Skip opted-out sources.

1) Messengers, if connected — unresolved chats only. Do not reopen auto-resolved reads.
2) Email, each connected account — still-in-inbox search, assemble, upsert.
3) Work chat, if Slack and/or Teams is connected — Activity-style unreads, list + badges only. NEVER click unread rows. Full bodies via the chat connector.
4) Meeting notes, if Notion is connected — work and/or personal per Check Meeting Notes; upsert new ones.
5) Notion comments on watched pages, if configured.
6) Stamp ledger freshness metadata so a digest can trust the gather.

Stay silent to the user unless the gather itself is broken. Do not send them a digest from this routine — keep the ledger ready. Family/personal chats the user marked private never get teed outward.

Fires on:
- cron `50 6-20 * * 1-5`

Ask the importing user for:
- Timezone
