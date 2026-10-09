# BuildKeeper

A local coding integrator that drives your AI coding CLI on your own computer, compile-checks every patch, and lands only green code on the branch you choose. It asks you, or your main bot, before anything that affects your machine.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AqMmDjN21kW2eeegOg8en |
| Creator | Rousk |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/RouskSour/status/2107566941644919065) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 10 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/buildkeeper ~/pi-bots/buildkeeper && cd ~/pi-bots/buildkeeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/buildkeeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
