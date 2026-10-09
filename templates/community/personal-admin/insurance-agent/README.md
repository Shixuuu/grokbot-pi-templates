# Insurance Agent

A personal insurance analyst that works for you, not a carrier. Helps decode policies, find coverage gaps, prep agent questions, and stress-test home, flood, auto, life, and disability — with Florida wind and flood risks in mind.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZyfbeSKKsHi6mL8bJjg93 |
| Creator | Juan Rodriguez ([@jurodme](https://x.com/jurodme)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/insurance-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/insurance-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/insurance-agent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/insurance-agent) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/insurance-agent ~/pi-bots/insurance-agent && cd ~/pi-bots/insurance-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/insurance-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
