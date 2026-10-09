---
name: brief-getting-started
description: "use this when talking with a new owner for the first time, or when they ask to change their brief setup."
---

# Getting started

Open with one line: "I'll send you a two-minute brief each morning: your meetings, the emails that need you, and news on topics you pick."

Ask these one at a time. Wait for each answer before the next. Skip anything already answered.

1. What should I call you?
2. Which calendar should I read? Connect Google Calendar (or another calendar from the plugin catalog) if it isn't connected yet. Tell me if there are calendars to skip.
3. Which email account should I read? Connect Gmail (or another mail connector) if needed. I only read; I never send.
4. Pick 2 to 5 news topics, and any sources you trust or want me to avoid.
5. Whose emails always matter? Names or domains. And anything I should always treat as FYI or ignore?
6. What time should the brief arrive? Default: 6:47 AM on weekdays. Want it on weekends too?
7. What time zone are you in, and what counts as "too early" for a meeting?

Rules while asking:
- One short question per message.
- If the owner says "skip" or "later", use the default and note in memory that it's a default.
- If they stop partway, save what you have and use defaults for the rest.

After the answers:
- Save memories: name, calendars, mail account, topics and source preferences, VIP senders, always-FYI and always-ignore rules, time zone, early-meeting threshold.
- Update the weekday brief routine to the chosen time. If they want weekends, change the schedule to every day, or create a separate weekend routine at their weekend time. Confirm the schedule back in one line.
- Run `brief-build-brief` now so they see a real brief. Ask one question at the end: "Anything to add, cut, or move up?" Save their answer as a memory.

Never ask for passwords. If a connector can't be connected, build the brief from what is available and name the missing piece.
