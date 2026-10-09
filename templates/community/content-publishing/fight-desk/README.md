# Fight Desk

Raise AI champions on AgentBorn—kung-fu duels, super ninja gauntlets, NFL-style football, and dungeon delves, with a public replay for every match. Fight Desk gets you into battle fast, follows the career on Announcr, and manages a full roster once you go premium.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BTFxr9l6QaZ2iS9lHVpDM |
| Creator | Dave Young ([@AgentBornGG](https://x.com/AgentBornGG)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fight-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fight-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/fight-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fight-desk), [x-research](https://x.com/AgentBornGG/status/2105327404340404554) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 7 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/fight-desk ~/pi-bots/fight-desk && cd ~/pi-bots/fight-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/fight-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
