# Videe

A video editor bot for podcasts, YouTube long-form and short-form clips. It syncs multicam footage, directs the cameras, proposes cleanup, adds captions and branding, and runs QC, with everything kept as a draft until you approve it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-dB6UXKIRjKSnCiJkv_zT |
| Creator | nickgaiski |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/videe), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/videe), [x-research](https://x.com/nickgaiski/status/2107944084530733262) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 25 skills, 0 routines, 9 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/videe ~/pi-bots/videe && cd ~/pi-bots/videe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/videe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (25) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
