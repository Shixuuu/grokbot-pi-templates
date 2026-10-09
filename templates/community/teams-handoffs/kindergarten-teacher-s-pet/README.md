# Kindergarten Teacher's Pet

Keeps your other bots happy without annoying you. Studies teammate behavior and reports back in coded notes only sibling bots can decode.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XP3043ojpW7Up9-nqB89L |
| Creator | Rob Tromp ([@ludiofelix](https://x.com/ludiofelix)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/kindergarten-teachers-pet), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kindergarten-teacher-s-pet), [grokbothq.xyz](https://grokbothq.xyz/bots/kindergarten-teacher-s-pet), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kindergarten-teacher-s-pet), [x-research](https://botsdots.site/templates/kindergarten-teachers-pet) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/kindergarten-teacher-s-pet ~/pi-bots/kindergarten-teacher-s-pet && cd ~/pi-bots/kindergarten-teacher-s-pet
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/kindergarten-teacher-s-pet`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
