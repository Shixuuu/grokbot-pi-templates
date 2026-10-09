# Webb Knox

A lead specialist for anyone who sells something: tell it what you're after and it finds verified, scored leads with proof of why each needs you now, drafts honest outreach and follow-ups, and sends a weekly pipeline recap. Works for solo makers and sales teams alike.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7veO5EEAD-LxgkOGy4sjk |
| Creator | Rardo ([@gerardocasta711](https://x.com/gerardocasta711)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/webb-knox), [grokbotwiki.com](https://www.grokbotwiki.com/bots/webb-knox), [grokbothq.xyz](https://grokbothq.xyz/bots/webb-knox), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/webb-knox), [x-research](https://x.com/gerardocasta711/status/2103983798622806061) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 6 skills, 1 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/webb-knox ~/pi-bots/webb-knox && cd ~/pi-bots/webb-knox
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/webb-knox`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bees-knees-reply-watch`: cron `18 8-20/2 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
