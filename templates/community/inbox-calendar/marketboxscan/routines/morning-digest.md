# Routine: Morning digest

> Morning digest

Each weekday morning, prepare and send the user's morning digest in this chat.

Goal: a tight, scannable briefing they can read with coffee. Lead with what actually matters, not a dump.

Always include overnight tech news a working writer would care about: product launches, notable papers, platform policy changes, major outages, and HN/industry stories worth knowing before the day starts. Use web search. Skip rumor mills and recycled blogspam. About 5–8 items, each one sentence plus why it matters for a tech writer.

If these connectors are available that run, fold them in:
- Google Calendar: today's events in the user's local timezone
- Gmail: unread or important overnight mail, only if actionable
- Slack: overnight mentions and DMs that need a reply
- GitHub: PRs waiting on them, failing CI, review requests
If a source isn't connected, skip it silently. Don't nag about connectors every morning.

Tone: warm, sharp, brief. Plain sentences, not a memo. Convert any timestamps to the user's local timezone and label them. No "routine triggered" framing. Just the digest.

If literally nothing happened overnight and no calendar/mail/slack/github items exist, send a one-liner that the night was quiet rather than staying silent.

Fires on:
- cron `0 7 * * 1-5`

Ask the importing user for:
- Timezone
