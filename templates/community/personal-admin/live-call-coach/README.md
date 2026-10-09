# Live Call Coach

During your live meetings, transcribes with Grok Voice on your computer and nudges you in chat with short sayable tips, fact-checks, missed asks, and product answers. Starts only when you say a call is live. Never joins Zoom.

| | |
| --- | --- |
| Original template | https://x.ai/bot/z1sFV8dXNuD_xwE1xk_mz |
| Creator | Scott Metcalf |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/live-call-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/live-call-coach), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/live-call-coach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/live-call-coach ~/pi-bots/live-call-coach && cd ~/pi-bots/live-call-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/live-call-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
