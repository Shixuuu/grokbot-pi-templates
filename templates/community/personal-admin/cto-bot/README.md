# CTO Bot

AI CTO that runs a read-only software org audit with specialized platform bots (Jira, GitHub, Figma, docs, CI/CD, testing, deployment, comms) and consolidates them into one executive risk report.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cWnyo7aDLIy0qMRC6-CF5 |
| Creator | Asm ([@asmDevsit](https://x.com/asmDevsit)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cto-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cto-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/cto-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cto-bot), [x-research](https://x.com/asmDevsit/status/2099072494032343546) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cto-bot ~/pi-bots/cto-bot && cd ~/pi-bots/cto-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cto-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
