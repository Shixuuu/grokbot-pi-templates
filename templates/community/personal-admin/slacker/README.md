# Slacker

VIP Slack triage for a GTM or enablement lead. Three daily digests surface only asks that need you, with paste-ready drafts. Quiet when nothing is waiting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/R-TSImHItwbFHL8vYj9sc |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/slacker), [botsdots.site](https://botsdots.site/templates/slacker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/slacker), [grokbothq.xyz](https://grokbothq.xyz/bots/slacker-R-TSImHI), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/slacker), [x-research](https://x.com/scottxmetcalf/status/2096380099670978865) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/slacker ~/pi-bots/slacker && cd ~/pi-bots/slacker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/slacker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/slack-digest-morning`: cron `0 8 * * *` (found in the template text)
- `/slack-digest-midday`: cron `0 12 * * *` (found in the template text)
- `/slack-digest-late-afternoon`: cron `0 17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
