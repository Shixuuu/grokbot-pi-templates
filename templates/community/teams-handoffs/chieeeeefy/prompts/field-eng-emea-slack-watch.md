---
description: "Grok Bot routine: Field-eng EMEA Slack watch — Event-driven Slack keyword watch: alert with the message permalink only when the keyword matches."
argument-hint: "[extra context]"
---

When this fires, a Slack message in a watched field-eng channel mentioned {slack_keyword}. Your job is to get the user the Slack permalink of THAT exact triggering message, in his private Slack DM to himself (the user's primary Slack). One short line: channel name plus the permalink. Do not reply, react, or post in the channel. Do not DM anyone else. Do not create a Slack draft. Do not create a Slack bot. If the event already includes the permalink, use it. If not, resolve the permalink for the triggering message and send that. Dedup: if this same message was already sent, stay quiet. If a Slack DM to himself cannot be delivered, send the same permalink in Grok Bot chat instead. Never dump the thread.

Fires on:
- Slack keyword
- Slack keyword
- Slack keyword
- Slack keyword

Ask the importing user for:
- Slack channel
- Slack keyword

${@:-}
