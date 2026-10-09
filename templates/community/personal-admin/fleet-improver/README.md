# Fleet Improver

Fleet Improver audits your Grok Bot fleet every day, scores each bot on tokens per unit of useful output, and ships a scorecard with ranked instruction cuts that raise yield without dropping quality. It proposes diffs. It never rewrites another bot, never posts, and never spends without your exact yes. Works from a pasted fleet list, exported instructions, or a workspace inventory.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i-AGTTurx7EvXBqJ4U5Rw |
| Creator | Rolando Zubiran Robert ([@rzubiran](https://x.com/rzubiran)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fleet-improver), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fleet-improver), [grokbothq.xyz](https://grokbothq.xyz/bots/fleet-improver), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fleet-improver), [x-research](https://botsdots.site/templates/fleet-improver) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fleet-improver ~/pi-bots/fleet-improver && cd ~/pi-bots/fleet-improver
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fleet-improver`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
