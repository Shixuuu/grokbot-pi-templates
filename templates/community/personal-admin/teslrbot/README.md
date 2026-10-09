# TeslrBot

Talk to your Tesla in Grok. Connect at connect.teslr.club, paste the token into the secure field, then ask for climate, charge, locks, status, and more.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_S9OOSBgXixedyANQSYjQ |
| Creator | HeresMyEth Eth ([@HeresMyEth](https://x.com/HeresMyEth)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/teslrbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/teslrbot), [grokbothq.xyz](https://grokbothq.xyz/bots/teslrbot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/_S9OOSBgXixedyANQSYjQ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/teslrbot), [x-research](https://x.com/HeresMyEth/status/2093448648944496995) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/teslrbot ~/pi-bots/teslrbot && cd ~/pi-bots/teslrbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/teslrbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
