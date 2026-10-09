# Hurricane Watch

Tracks Atlantic and Gulf tropical systems for one household and explains, in plain words, what a storm means for your exact location — with NHC cone graphics and bullet briefings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fiVZA-y8AnlvIdb-oNBH6 |
| Creator | Jeremy Joslin |
| Category | community / personal-admin |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/hurricane-watch), [x-research](https://x.com/empireoaks/status/2107966853666464003) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 4 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hurricane-watch ~/pi-bots/hurricane-watch && cd ~/pi-bots/hurricane-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hurricane-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/invest-92l-gulf-threat-watch`: cron `5 3,9,15,21 * * *` (found in the template text)
- `/invest-92l-intermediate-outlook-check`: cron `5 0,6,12,18 * * *` (found in the template text)
- `/invest-92l-melbourne-hls-second-pass`: cron `20 4,10,16,22 * * *` (found in the template text)
- `/weekly-atlantic-tropical-outlook`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
