# Chief of Staff

Always-on chief of staff for busy people. Pulls what’s new from Slack, email, calendar, and notes, maps it to your priorities, and delegates to specialist bots—never posts externally without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IqLFMirip0OoP8XWVyCAV |
| Creator | Jimit Shah ([@jimit_shah](https://x.com/jimit_shah)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-iqlf), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-iqlf), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-27), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-iqlf) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-iqlfmi ~/pi-bots/chief-of-staff-iqlfmi && cd ~/pi-bots/chief-of-staff-iqlfmi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-iqlfmi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
