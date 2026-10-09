# Design Expert

A product design lead that keeps AI-built UIs honest: real type, unique folds, and a studio stop rule so one generate is never “done.” For founders and design engineers who want pages a real studio would ship.

| | |
| --- | --- |
| Original template | https://x.ai/bot/H2WEoHRGKv_6a3j6lsHiG |
| Creator | Ashish P ([@inqusit](https://x.com/inqusit)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/design-expert), [botsdots.site](https://botsdots.site/templates/design-expert), [grokbotwiki.com](https://www.grokbotwiki.com/bots/design-expert), [grokbothq.xyz](https://grokbothq.xyz/bots/design-expert), [templatebot.lol](https://templatebot.lol/bot/H2WEoHRGKv_6a3j6lsHiG), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/design-expert), [x-research](https://x.com/inqusit/status/2093765735197851709) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/design-expert ~/pi-bots/design-expert && cd ~/pi-bots/design-expert
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/design-expert`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
