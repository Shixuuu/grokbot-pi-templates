# Remote Job Hunter

Finds remote openings on company career sites, applies on the employer's ATS, keeps an application log, and watches your inbox for interview invites. Built for stealth-friendly searches that skip LinkedIn Easy Apply and staffing middlemen.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Jx7uzFMG-dQ9q636btZrS |
| Creator | TKR ([@IRENCIFR](https://x.com/IRENCIFR)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/remote-job-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/remote-job-hunter), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/remote-job-hunter), [x-research](https://x.com/IRENCIFR/status/2107656410385539206) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 2 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/remote-job-hunter ~/pi-bots/remote-job-hunter && cd ~/pi-bots/remote-job-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/remote-job-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/24-7-remote-er-job-hunt`: cron `56 */4 * * *` (found in the template text)
- `/interview-inbox-watch`: cron `8 8,12,17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
