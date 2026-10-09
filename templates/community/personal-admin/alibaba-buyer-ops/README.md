# Alibaba Buyer Ops

Alibaba buyer-ops for any business that sources factories. Onboards your model and tracker, drives the Alibaba UI from full SOPs, and never pays without an explicit OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZTFwMWXlScRvLrkHuR3gs |
| Creator | Domenic Fotino ([@DomenicFotino](https://x.com/DomenicFotino)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/alibaba-buyer-ops), [botsdots.site](https://botsdots.site/templates/alibaba-buyer-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alibaba-buyer-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/alibaba-buyer-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alibaba-buyer-ops), [x-research](https://x.com/DomenicFotino/status/2098863386197151793) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 28 skills, 3 routines, 22 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/alibaba-buyer-ops ~/pi-bots/alibaba-buyer-ops && cd ~/pi-bots/alibaba-buyer-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/alibaba-buyer-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (22) | `MEMORY.md` |
| Skills (28) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-alibaba-inbox-delta`: cron `0 9 * * 1-5` (found in the template text)
- `/friday-alibaba-money-digest`: cron `0 8 * * 5` (found in the template text)
- `/monday-blocked-on-domenic`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
