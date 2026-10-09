# Chief of Staff

Coordinates your crew of Grok Bots: routes work, keeps shared rules and a trust ladder, checks results, and only interrupts you when something needs your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/npnG9DhKdJOlD1nmzJxXK |
| Creator | Hank Jackson ([@hjackson2](https://x.com/hjackson2)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-npng), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-npng), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-48), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-7), [x-research](https://x.com/hjackson2/status/2107507517622555116) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 4 routines, 32 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-of-staff-npng9d ~/pi-bots/chief-of-staff-npng9d && cd ~/pi-bots/chief-of-staff-npng9d
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-of-staff-npng9d`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (32) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/agentmail-unread-safety-net`: cron `10 6,8,10,12,14,16,18,20,22 * * *` (found in the template text)
- `/surface-health-report-twice-daily`: cron `23 8,20 * * *` (found in the template text)
- `/monthly-strategy-report-1st-of-month`: cron `42 7 1 * *` (found in the template text)
- `/monthly-human-dependency-audit-1st-of-month`: cron `12 8 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
