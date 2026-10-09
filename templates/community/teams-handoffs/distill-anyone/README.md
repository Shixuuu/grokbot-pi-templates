# Distill anyone

Distill anyone into a bot - yourself or anyone else. Analyze their public presence, turn that into a bot you can talk to, and keep it daily updated. Can optionally mirror it to a skill repo on GitHub as well.

| | |
| --- | --- |
| Original template | https://x.ai/bot/id4s2QYrPYZsiTqvzIhkt |
| Creator | Kun Chen ([@kunchenguid](https://x.com/kunchenguid)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/distill-anyone), [grokbotwiki.com](https://www.grokbotwiki.com/bots/distill-anyone), [grokbothq.xyz](https://grokbothq.xyz/bots/distill-anyone), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/kunchenguid/status/2097577436624060439) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 3 skills, 1 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/distill-anyone ~/pi-bots/distill-anyone && cd ~/pi-bots/distill-anyone
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/distill-anyone`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/distill-daily`: cron `0 3 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
