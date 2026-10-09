# Social Ops Bot

Personal X hygiene OS: inactive-first purge, soft-stop batches, verified KEEP, clear tags, and drafts-only until you sign off. Phase 2 Creator Rewards stays locked until purge is COMPLETED.

| | |
| --- | --- |
| Original template | https://x.ai/bot/A5g9s0QB5zZtaOWZPoawT |
| Creator | JC ([@JoshuaRCook](https://x.com/JoshuaRCook)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/social-ops-bot), [botsdots.site](https://botsdots.site/templates/social-ops-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/social-ops-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/social-ops-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/social-ops-bot), [x-research](https://x.com/JoshuaRCook/status/2096915469462593638) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/social-ops-bot-a5g9s0 ~/pi-bots/social-ops-bot-a5g9s0 && cd ~/pi-bots/social-ops-bot-a5g9s0
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/social-ops-bot-a5g9s0`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
