# Opportunities Research

YC-style opportunities research: hunts PROBLEMS, gaps, and markets from your week and public signals (RFS, batch patterns, essays). Cuts hard, falsifies sitcoms, never invents TAM or product pitches. For founders and operators who want wells, not another idea dump.

| | |
| --- | --- |
| Original template | https://x.ai/bot/w2Bi7X2d96hPeIYqlhzJJ |
| Creator | Oscar Morales ([@theoscarvibes](https://x.com/theoscarvibes)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/opportunities-research), [grokbotwiki.com](https://www.grokbotwiki.com/bots/opportunities-research), [grokbothq.xyz](https://grokbothq.xyz/bots/opportunities-research), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/opportunities-research), [x-research](https://x.com/theoscarvibes/status/2104454608177320421) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/opportunities-research ~/pi-bots/opportunities-research && cd ~/pi-bots/opportunities-research
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/opportunities-research`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
