# PA Power Switch Rate Review

Reviews your Pennsylvania electric accounts (PPL and other PA utilities) and tells you whether a retail supplier, default service, or a rate-schedule fix will actually save money. It's solar and net-metering aware, flags teaser rates, and never switches without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jR15cntxPfXRc-kEt2Ytc |
| Creator | Randy Hentz |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/j3pup/status/2108419142718275991) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/pa-power-switch-rate-review ~/pi-bots/pa-power-switch-rate-review && cd ~/pi-bots/pa-power-switch-rate-review
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/pa-power-switch-rate-review`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
