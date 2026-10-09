# Spot

Your number-one map location finder. On demand, looks up any place type (restaurant, cafe, toy store, whatever), and when the name lies (like "Conform Lounge," actually a cafe), scrapes Maps, reviews, and social to figure out what it really is.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jbY38mgtSzzg7riLfrJM1 |
| Creator | Cake |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [templatebot.lol](https://templatebot.lol/bot/jbY38mgtSzzg7riLfrJM1) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/spot ~/pi-bots/spot && cd ~/pi-bots/spot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/spot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
