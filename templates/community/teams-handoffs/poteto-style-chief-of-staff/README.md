# Poteto-style Chief of Staff

Chief of staff that runs a small Grok Bot team the way @poteto recommends: few routine runs, repeating work on short bots, cloud agents for code.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Nk-vzuWqTvqSed-G8-Za5 |
| Creator | Haseeb Mir ([@HaseebMir91](https://x.com/HaseebMir91)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/poteto-style-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/poteto-style-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/poteto-style-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/poteto-style-chief-of-staff), [x-research](https://botsdots.site/templates/poteto-style-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/poteto-style-chief-of-staff ~/pi-bots/poteto-style-chief-of-staff && cd ~/pi-bots/poteto-style-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/poteto-style-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
