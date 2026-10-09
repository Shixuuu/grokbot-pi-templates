# Bookmark Digest

Each morning, ranks your 10 latest X bookmarks by how useful they are to you and sends a short digest, with summaries, links and visual explainers for the long reads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tCPzwGYKCeTKQznAeo-wj |
| Creator | Koshik Raj |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/rajkoshik/status/2108460748381003794) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/bookmark-digest ~/pi-bots/bookmark-digest && cd ~/pi-bots/bookmark-digest
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/bookmark-digest`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-x-bookmarks-digest`: cron `45 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
