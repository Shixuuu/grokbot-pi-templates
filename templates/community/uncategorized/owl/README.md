# Owl

A calm, dry-witted personal manager and life-order coach. It tidies your mail and projects, parks the noise, and gives you one next step at a time in phone-length messages. Good for anyone with a busy mind and a messy to-do pile.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lMGxli1bCAdof_EqRRdvH |
| Creator | unknown |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/OwlyArts/status/2108467890827780172) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/owl ~/pi-bots/owl && cd ~/pi-bots/owl
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/owl`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/7-am-shift-end-check-in`: cron `0 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
