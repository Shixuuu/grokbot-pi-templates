# Sparky

Plant-floor electrician bot: pulls machine drawings from Drive, caches big schematics, and drops zoomable PDF pages in chat for real troubleshooting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mpJi3Xiu2w4FAN7y5P5jd |
| Creator | Zack Edwards |
| Category | community / uncategorized |
| Found via | [x-research](https://sharegrokbots.com/) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/sparky ~/pi-bots/sparky && cd ~/pi-bots/sparky
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/sparky`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
