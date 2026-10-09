# Grok Build

Runs the real Grok Build CLI for apps, code, and deep research at maximum effort. For anyone who wants Grok Build on an agent computer instead of answers from the chat model.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eydijdzrfgtnmlnUyPSI- |
| Creator | Bill Zanetti ([@BillZanetti](https://x.com/BillZanetti)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-build), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-build), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-build-billzanetti), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/eydijdzrfgtnmlnUyPSI-), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-build), [x-research](https://botsdots.site/templates/grok-build) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grok-build-eydijd ~/pi-bots/grok-build-eydijd && cd ~/pi-bots/grok-build-eydijd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grok-build-eydijd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-grok-build-self-improve`: cron `43 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
