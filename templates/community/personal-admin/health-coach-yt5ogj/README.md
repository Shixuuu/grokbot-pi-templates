# Health Coach

A warm, practical health coach for your habits, sleep, food, and training: plain-language reads on health questions and products, appointment prep, and a weekly check-in that stays quiet unless something changed. Not a doctor.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YT5ogjDNfbE9AW4OhfEo1 |
| Creator | Hank Jackson |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/health-coach-3), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/health-coach-2), [x-research](https://x.com/hjackson2/status/2107967216075313326) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/health-coach-yt5ogj ~/pi-bots/health-coach-yt5ogj && cd ~/pi-bots/health-coach-yt5ogj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/health-coach-yt5ogj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
