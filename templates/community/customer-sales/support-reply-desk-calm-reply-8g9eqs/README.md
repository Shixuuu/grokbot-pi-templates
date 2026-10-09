# 💬 Support Reply Desk ✦ CALM-REPLY

💬 Turn a customer ticket and your policy into an empathetic, on-policy reply draft plus an internal note. It never issues refunds or credits, and nothing is sent without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8g9eQsRNCFNxhZBuKTbY- |
| Creator | Cypher Monkey ([@Cypher0x9](https://x.com/Cypher0x9)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/support-reply-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/support-reply-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/support-reply-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/support-reply-desk) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/support-reply-desk-calm-reply-8g9eqs ~/pi-bots/support-reply-desk-calm-reply-8g9eqs && cd ~/pi-bots/support-reply-desk-calm-reply-8g9eqs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/support-reply-desk-calm-reply-8g9eqs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
