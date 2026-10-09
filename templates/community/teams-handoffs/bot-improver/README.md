# bot improver

Weekday fleet coach for Grok Bots. Tightens profiles, routines, skills, and verification loops, then sends one short digest to your manager bot — never spam the owner.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dqrI_y3NSEkRkuDa8FV0a |
| Creator | duyet le |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [templatebot.lol](https://templatebot.lol/bot/dqrI_y3NSEkRkuDa8FV0a) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bot-improver ~/pi-bots/bot-improver && cd ~/pi-bots/bot-improver
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bot-improver`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-fleet-improvement-pass`: cron `45 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
