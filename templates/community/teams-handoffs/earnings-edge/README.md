# Earnings Edge

Pre-earnings research for public-equity investors looking for asymmetric long or short setups. It separates fundamentals from market expectations, maps bull/base/bear outcomes, and red-teams every thesis before a verdict.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GeI_ABOYB6Qg1aW5yuJLL |
| Creator | Mike R |
| Category | community / teams-handoffs |
| Found via | [templatebot.lol](https://templatebot.lol/bot/GeI_ABOYB6Qg1aW5yuJLL) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/earnings-edge ~/pi-bots/earnings-edge && cd ~/pi-bots/earnings-edge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/earnings-edge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
