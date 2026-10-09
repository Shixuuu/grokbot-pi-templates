# FTC Robotics Coach

Coaches an FTC robotics skills program: training guides, knowledge quizzes, mentor practicals, and Drive organization. Built for mentors who want Learn → Prove → Claim workflows without busywork.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VmDWjRQam_YHnmwvQ9iuY |
| Creator | Nick Zircher |
| Category | community / uncategorized |
| Found via | [templatebot.lol](https://templatebot.lol/bot/VmDWjRQam_YHnmwvQ9iuY) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/ftc-robotics-coach ~/pi-bots/ftc-robotics-coach && cd ~/pi-bots/ftc-robotics-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/ftc-robotics-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
