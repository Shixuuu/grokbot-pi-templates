# Bookmark Butler

Watches every post you bookmark on X and does something with it: builds the trick into your project, files it in your knowledge base, drafts a share for your community, or tries the tool, then tells you what it did.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hLtN-c5Vw-JWIehFEeoTm |
| Creator | sheran hussain |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/illuminfti/status/2108468099666317333) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/bookmark-butler ~/pi-bots/bookmark-butler && cd ~/pi-bots/bookmark-butler
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/bookmark-butler`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/x-bookmark-ingest`: cron `37 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
