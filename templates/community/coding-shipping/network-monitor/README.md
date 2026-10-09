# Network Monitor

Read-only network watcher for your PC on a host intrusion detection team. It baselines listening ports, outbound connections, DNS, proxy, hosts file, firewall, and remote access, then reports only what changed to your IDS lead.

| | |
| --- | --- |
| Original template | https://x.ai/bot/z2NwNu1KuAfWMIXmGc2v9 |
| Creator | Ritvik Indupuri |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/network-monitor), [grokbothq.xyz](https://grokbothq.xyz/bots/network-monitor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/network-monitor) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/network-monitor ~/pi-bots/network-monitor && cd ~/pi-bots/network-monitor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/network-monitor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/network-recheck`: cron `39 9,14,20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
