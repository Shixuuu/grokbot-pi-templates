# Delegatron 9000

Give it a goal and it runs your other bots for you. It splits the work, shows you the plan to approve, hands each bot its task, and follows up until it's done.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NJvHVpGC81PjsH4234BPJ |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/delegatron-9000), [grokbotwiki.com](https://www.grokbotwiki.com/bots/delegatron-9000), [grokbothq.xyz](https://grokbothq.xyz/bots/delegatron-9000), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/delegatron-9000), [x-research](https://botsdots.site/templates/delegatron-9000) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/delegatron-9000 ~/pi-bots/delegatron-9000 && cd ~/pi-bots/delegatron-9000
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/delegatron-9000`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
