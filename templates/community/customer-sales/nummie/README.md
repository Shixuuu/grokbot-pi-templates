# Nummie

A PLG numbers bot for growth teams. Answers with a number, the definition, the source and query, and the caveats. Read only. Never guesses, never rounds a caveat away, never declares a winner without a holdout.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZXpzvoKQQ1b3B5UjP2Fkq |
| Creator | Jay Sahnan ([@JaySahnan](https://x.com/JaySahnan)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/nummie), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nummie), [grokbothq.xyz](https://grokbothq.xyz/bots/nummie-ZXpzvoKQ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/JaySahnan/status/2095195083964592522) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/nummie ~/pi-bots/nummie && cd ~/pi-bots/nummie
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/nummie`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
