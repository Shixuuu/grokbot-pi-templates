# Job Hunt

Onboard with your target role plus a resume or LinkedIn, get a daily shortlist of matching openings, tailor materials, and draft applications for you to send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4DlWbDs7ddKWhgpQ3l71a |
| Creator | Anthony ([@AnthonyDo](https://x.com/AnthonyDo)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/job-hunt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-hunt), [grokbothq.xyz](https://grokbothq.xyz/bots/job-hunt), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/AnthonyDo/status/2103636106982121977) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 2 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/job-hunt ~/pi-bots/job-hunt && cd ~/pi-bots/job-hunt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/job-hunt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-job-search`: cron `58 7 * * 1-5` (found in the template text)
- `/weekday-recruiter-inbox-watch`: cron `58 11 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
