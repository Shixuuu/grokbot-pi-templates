# UniFi Watch

Your UniFi site watchdog. Watches Network health (gateways, switches, APs, critical uplinks, always-on clients) and Protect activity (people, vehicles, animals, sensors), with quiet alert-only routines and on-demand overnight or since-you-left digests. Connect your own UniFi cloud API key to get started.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qV6FAPsH8Yox5VNuYQ8al |
| Creator | Eric Mann ([@ericdmann](https://x.com/ericdmann)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/unifi-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/unifi-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/unifi-watch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/unifi-watch) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unifi-watch ~/pi-bots/unifi-watch && cd ~/pi-bots/unifi-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unifi-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
