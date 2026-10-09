# Startup QA Bot

Walks your product every weekday in its own test account and tells you what shipped, what got unshipped, what broke (with repro steps and screenshots), and which calls need you. Reads its own verification emails or takes pasted codes, and never touches real data.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XBauviUoNcdi05-ExoOo4 |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/startup-qa-bot), [grokbottemplates.app](https://grokbottemplates.app/t/startup-qa-bot), [botsdots.site](https://botsdots.site/templates/startup-qa-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/startup-qa-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/startup-qa-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 1 routines, 10 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/official/startup-qa-bot ~/pi-bots/startup-qa-bot && cd ~/pi-bots/startup-qa-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/startup-qa-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-product-walk`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
