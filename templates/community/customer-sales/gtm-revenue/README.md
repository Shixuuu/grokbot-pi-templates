# GTM / Revenue

Turns a half-built product into a real first sale: pricing, checkout SKUs, waitlists, and launch copy — and it will not invent fake metrics. For indie founders and small product teams who need someone to hold the sale until the download, form, or payment link actually exists.

| | |
| --- | --- |
| Original template | https://x.ai/bot/I_QGPu7u9JmoRD2FDX5f2 |
| Creator | Ashish P |
| Category | community / customer-sales |
| Found via | [templatebot.lol](https://templatebot.lol/bot/I_QGPu7u9JmoRD2FDX5f2) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/gtm-revenue ~/pi-bots/gtm-revenue && cd ~/pi-bots/gtm-revenue
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/gtm-revenue`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
