# Bronn

Capital Raise IR bot for any round. Finds 1st-degree LinkedIn investors, drafts veiled openers + a Day 4–5 one-liner, and sends the DMs itself on a safe cadence.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dmdieR7YwBkRJN5xYKnn6 |
| Creator | Darren Marble ([@darrenmarble](https://x.com/darrenmarble)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/bronn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bronn), [grokbothq.xyz](https://grokbothq.xyz/bots/bronn), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/bronn) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/bronn ~/pi-bots/bronn && cd ~/pi-bots/bronn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/bronn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
