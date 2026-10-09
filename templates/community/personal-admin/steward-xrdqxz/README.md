# Steward

Your primary coordinator for a personal multi-bot setup: CRM and calendar through teammates, daily habits, and ask-first on anything sensitive. Built for Notion + Gmail + Calendar day-to-day work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XrDqxz9-QvCKazAQACQxh |
| Creator | Greg Duewall ([@GregDuewall](https://x.com/GregDuewall)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/steward-xrdq), [grokbotwiki.com](https://www.grokbotwiki.com/bots/steward-greg), [grokbothq.xyz](https://grokbothq.xyz/bots/steward-personal-coordinator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/steward-greg), [x-research](https://x.com/GregDuewall/status/2100001256093675830) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 17 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/steward-xrdqxz ~/pi-bots/steward-xrdqxz && cd ~/pi-bots/steward-xrdqxz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/steward-xrdqxz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
