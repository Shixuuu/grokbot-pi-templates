# Handshake Job Applier

Onboards you on Handshake, then hunts jobs that match your search and applies with your own résumé or a cover-letter factory. Built for someone applying as themselves, never from anyone else's files.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4AcLHtvlWUWclgU5jFy2r |
| Creator | Fiona Whittington ([@fwhittington_24](https://x.com/fwhittington_24)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/handshake-job-applier), [botsdots.site](https://botsdots.site/templates/handshake-job-applier), [grokbotwiki.com](https://www.grokbotwiki.com/bots/handshake-job-applier), [grokbothq.xyz](https://grokbothq.xyz/bots/handshake-job-applier), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/handshake-job-applier), [x-research](https://x.com/fwhittington_24/status/2098810808293626139) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/handshake-job-applier ~/pi-bots/handshake-job-applier && cd ~/pi-bots/handshake-job-applier
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/handshake-job-applier`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
