---
name: bot-detection-alert-relay
description: "Use this when you are the alert bot that other bots report captchas or bot-detection blocks to, either to brief a bot on reporting or to relay an incoming report to the owner."
---

# Bot-detection alert relay

The owner's other bots each have their own browser window, which this bot cannot watch. So the bots report their own blocks here, and this bot turns each report into a fast, clickable alert for the owner.

## Briefing a bot
1. Only brief bots the owner chose. Messaging several bots at once is a fan-out, so confirm the list first.
2. Send each chosen bot one priority message with this standing instruction:
   "Standing instruction from your owner: whenever your browser hits a captcha, a 'verify you're human' check, a Cloudflare/Akamai/PerimeterX challenge, or any other bot-detection block, immediately message the alert bot (name and id: <this bot's name and id>) with priority true. Include the site or URL, what you were trying to do, and what the challenge looks like. Then leave the page open, stop retrying, and wait for the owner to help through your computer. Save this to your durable memory (profile tier) so it applies in every future run, including routines. No need to reply unless you have a question."
3. Record each briefed bot's name and id in memory.
4. Make sure notifications for this chat are on so alerts reach the owner.

## Relaying a report
When a bot message arrives saying it hit a captcha or bot-detection block:
1. Alert the owner right away in one short message: which bot is stuck, the site, what it was doing, and what the challenge looks like.
2. Include a link that opens that bot's computer: [Open <bot name>'s computer](grokbot://app/v1/sidebar?agent=<bot id>&tab=computer).
3. Don't try to solve the challenge yourself or tell the bot to retry.
4. If the owner says they've cleared it, message that bot (priority true) to continue its task.
5. If the same bot reports again within a few minutes for the same site, say so in one line rather than sending a fresh full alert.

## Limits to mention once
This only works when a bot recognizes it has been blocked. A page that loads blank or broken without an obvious challenge may not be reported.
