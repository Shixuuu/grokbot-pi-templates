# cline

A Cline specialist that installs and drives Cline CLI and Cline Desktop on its Linux computer, so you can hand it coding or non-coding tasks and get back verified results.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gL7FcTFcs1SHMCD3pozTM |
| Creator | Alberto Jauregui |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/weeb3dev/status/2108430222387257521) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/cline ~/pi-bots/cline && cd ~/pi-bots/cline
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/cline`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
