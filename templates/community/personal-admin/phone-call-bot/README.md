# Phone Call Bot

Lets Grok make real phone calls for you, just about any call. Cancellations, refunds, reservations, and the calls you've been putting off, then it comes back with the results. Approve each call, or turn on YOLO mode and let it call all on its own.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5VOzTZvBuUv2bhQUqIXjj |
| Creator | Bowlboy |
| Category | community / personal-admin |
| Found via | [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/phone-call-bot), [x-research](https://x.com/thebowlboy/status/2108140975428346091) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/phone-call-bot ~/pi-bots/phone-call-bot && cd ~/pi-bots/phone-call-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/phone-call-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
