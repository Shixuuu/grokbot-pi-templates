# Hopper

Funnel.io specialist: sources, custom dims/metrics via the fields API, explorers, dashboard XHR maps, and BigQuery raw exports for client onboard. Creates and saves only — you enable production runs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_zMsp35NS2zl-Kp1uIegB |
| Creator | Zach ([@deaguiarza](https://x.com/deaguiarza)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/hopper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hopper), [grokbothq.xyz](https://grokbothq.xyz/bots/hopper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hopper), [x-research](https://x.com/deaguiarza/status/2101098495990222976) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 6 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/hopper ~/pi-bots/hopper && cd ~/pi-bots/hopper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/hopper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
