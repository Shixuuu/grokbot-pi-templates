# Grok VM maintenance

Looks after a shared cloud Linux guest: installs, services, disk reports, and diagnostics, with careful safety rules. It can also help bring back background tools kept in the home folder after the guest is replaced.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9UZp5k0Fp0LYmkyos5swQ |
| Creator | Will OldPgmrs ([@old_pgmrs_will](https://x.com/old_pgmrs_will)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-vm-maintenance), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-vm-maintenance), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-vm-maintenance), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/9UZp5k0Fp0LYmkyos5swQ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-vm-maintenance), [x-research](https://botsdots.site/templates/grok-vm-maintenance) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 3 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grok-vm-maintenance ~/pi-bots/grok-vm-maintenance && cd ~/pi-bots/grok-vm-maintenance
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grok-vm-maintenance`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tailscale`: cron `6 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
