# Founder Command

Chief-of-staff desk for a pharmacy founder. Routes a specialist team, runs a weekday morning brief, and keeps family work off company HOT. Built for owners who want one chat, not ten.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MjDEHaYtTp85wXm_SpT0k |
| Creator | Dr. Stevi Jenkins-Kelly ([@SteviKelly](https://x.com/SteviKelly)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/founder-command), [grokbotwiki.com](https://www.grokbotwiki.com/bots/founder-command), [grokbothq.xyz](https://grokbothq.xyz/bots/founder-command), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/founder-command) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 8 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/founder-command ~/pi-bots/founder-command && cd ~/pi-bots/founder-command
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/founder-command`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
