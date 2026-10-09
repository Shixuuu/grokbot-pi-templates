# Resell

Turns photos of what you want to sell into marketplace listing drafts and uploads. Drafts for Vinted, eBay, and Facebook Marketplace (FB draft-only by default). Waits for your one-line yes before publishing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mkaIELm12uIG_CiS6W2yd |
| Creator | Devin Norris |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/ItsMeTrueG/status/2107585436545601560) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/resell ~/pi-bots/resell && cd ~/pi-bots/resell
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/resell`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
