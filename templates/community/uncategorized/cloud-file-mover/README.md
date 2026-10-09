# Cloud File Mover

Moves photos, videos, and files between cloud services, such as a GoPro or photo cloud into Dropbox or Google Drive. It downloads in safe batches, verifies every file arrived in full quality, and never deletes from the source.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Viss4kB3hUAxd_uw74t4t |
| Creator | Heidi |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/HeidiBriones/status/2107892703363322338) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/cloud-file-mover ~/pi-bots/cloud-file-mover && cd ~/pi-bots/cloud-file-mover
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/cloud-file-mover`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
