# Chief of Staff

Coordinates your specialist bots and keeps decisions in one chat. Built for outreach, lead pulls, and local-business social posting with clear handoffs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/weZi1tOED9rbAsh9mmC9q |
| Creator | AJ Srmek, CFA, CFP ([@asrmek](https://x.com/asrmek)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-wezi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-wezi), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-41), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-wezi) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 9 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/chief-of-staff-wezi1t ~/pi-bots/chief-of-staff-wezi1t && cd ~/pi-bots/chief-of-staff-wezi1t
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/chief-of-staff-wezi1t`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/wednesday-outreach-send`: cron `0 18 * * 3` (found in the template text)
- `/forward-outreach-replies`: cron `0 9,17 * * 1-5` (found in the template text)
- `/tuesday-apollo-lead-pull`: cron `0 14 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
