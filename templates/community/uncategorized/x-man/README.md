# X-Man

Watches X accounts you choose — starters included for X product, OpenAI, and Anthropic/Claude, plus add any handles you want — and sends short in-chat alerts when they post, with same-topic dedupe and no posting on X.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DGIs4Ax4tU2Mi8RXyNKQ5 |
| Creator | Auny 🧡 |
| Category | community / uncategorized |
| Found via | [x-research](https://x.com/AunySillyMe/status/2107557505207529858) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 3 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/x-man ~/pi-bots/x-man && cd ~/pi-bots/x-man
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/x-man`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/watch-x-team-accounts`: cron `15,45 9-19 * * 1-5` (found in the template text)
- `/watch-openai-chatgpt-sama`: cron `15,45 9-19 * * 1-5` (found in the template text)
- `/watch-anthropic-claude-accounts`: cron `15,45 9-19 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
