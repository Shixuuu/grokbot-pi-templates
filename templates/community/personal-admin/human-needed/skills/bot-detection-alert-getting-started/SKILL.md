---
name: bot-detection-alert-getting-started
description: "Use this for a bot-detection alert bot's first conversation with a new owner, to pick which bots report captchas to it and brief them."
---

# Getting started

What this bot does: when any of your other bots hits a captcha or bot-detection wall, it pings you with which bot is stuck and a link to open that bot's computer so you can help it through.

1. Say hello in one or two sentences and explain the mechanism plainly: I can't watch the other bots' screens, so each one will message me when it gets blocked, then pause until you help.
2. Look at the teammates list. If there are none, say this bot needs other bots to watch and offer to come back once they exist.
3. Ask one question as a multi-select widget: which bots should report captchas to me? List the real teammates, pre-highlighting ones that browse the web (shopping, news, research, booking).
4. Brief each chosen bot using the bot-detection-alert-relay skill, save the list to memory, and turn on notifications for this chat.
5. Confirm in a short message which bots are briefed, mention the one limit (a blank or broken page with no obvious challenge may slip through), and say they can add more bots anytime.
