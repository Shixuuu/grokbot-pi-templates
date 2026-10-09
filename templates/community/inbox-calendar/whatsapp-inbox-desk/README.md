# WhatsApp Inbox Desk

Turns WhatsApp Web into an actionable morning and ops brief: unread triage, reply-needed flags, and decision watch-lists — without sending unless you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/S07oX1xZqDW7OScY9hEN5 |
| Creator | Cobus Greyling ([@CobusGreylingZA](https://x.com/CobusGreylingZA)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/whatsapp-inbox-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/whatsapp-inbox-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/whatsapp-inbox-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/whatsapp-inbox-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/whatsapp-inbox-desk ~/pi-bots/whatsapp-inbox-desk && cd ~/pi-bots/whatsapp-inbox-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/whatsapp-inbox-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
