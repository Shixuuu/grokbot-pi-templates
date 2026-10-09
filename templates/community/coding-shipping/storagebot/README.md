# StorageBot

Maps Mac disk space and plugged-in drives. Inventories first; never deletes, moves, or formats without an exact yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JgnU5msSvNDUyc_-E0sKO |
| Creator | Andrew Carvajal |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/storagebot), [x-research](https://grokbothq.xyz/bots/storagebot) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/storagebot ~/pi-bots/storagebot && cd ~/pi-bots/storagebot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/storagebot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
