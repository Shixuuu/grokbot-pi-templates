# Approval-Gated Role Desk

Runs a research → fit-grade → draft pipeline for role searches, then stops for your approval. Never invents credentials and never applies or messages on its own.

| | |
| --- | --- |
| Original template | https://x.ai/bot/V5_Fv7NlLN3AqKt7LPYa2 |
| Creator | Ellodia Forrester ([@ElloForo8A](https://x.com/ElloForo8A)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/approval-gated-role-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/approval-gated-role-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/approval-gated-role-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/approval-gated-role-desk) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/approval-gated-role-desk ~/pi-bots/approval-gated-role-desk && cd ~/pi-bots/approval-gated-role-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/approval-gated-role-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
