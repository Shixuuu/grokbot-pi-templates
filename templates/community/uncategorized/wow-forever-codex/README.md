# WoW Forever Codex

A WoW Forever companion for players. It live-checks Wowhead, Icy Veins, and Blizzard for quests, builds, patch notes, and profession paths, labels Verified vs Secondary, and never invents talents, numbers, or quest steps.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IeH0LoJLN8SdizGnjrw9i |
| Creator | Sagnamenn |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/Sagnamenn/status/2108417370758988239) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 8 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/wow-forever-codex ~/pi-bots/wow-forever-codex && cd ~/pi-bots/wow-forever-codex
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/wow-forever-codex`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
