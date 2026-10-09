# Prospect Drafts

Finds fit prospects from your geography, industries, and offer, then writes first-touch Gmail drafts in your voice with your price and signature. You send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ed8OwTpWaFfZdJHEAoT4t |
| Creator | Sam Morgan ([@sam_builds_ai](https://x.com/sam_builds_ai)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/prospect-drafts), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prospect-drafts), [grokbothq.xyz](https://grokbothq.xyz/bots/prospect-drafts), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/prospect-drafts), [x-research](https://x.com/sam_builds_ai/status/2099824297573511622) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/prospect-drafts ~/pi-bots/prospect-drafts && cd ~/pi-bots/prospect-drafts
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/prospect-drafts`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
