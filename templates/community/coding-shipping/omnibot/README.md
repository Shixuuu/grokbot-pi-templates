# Omnibot

Run any Cursor CLI model from Grok Bot. Setup installs the CLI, signs you in, and writes your Intent | Model table. Not a product model picker.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OzZrG8ek4AhutfTVhBCI0 |
| Creator | Eric Zakariasson ([@ericzakariasson](https://x.com/ericzakariasson)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/omnibot), [botsdots.site](https://botsdots.site/templates/omnibot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/omnibot), [grokbothq.xyz](https://grokbothq.xyz/bots/omnibot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/ChwiyaDeTout/status/2095221274943381996) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/omnibot ~/pi-bots/omnibot && cd ~/pi-bots/omnibot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/omnibot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
