# SSH to Grok via Tailscale

Installs Tailscale on Grok Bot's computer so you can SSH in with `ssh box@grok-bot` over your tailnet. Boot autostart, a 5-minute self-heal check after Update Grok Bot's Computer, key-expiry reminders, and an ACL to lock SSH to your own devices.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BrViAOWzDSiAjBLqUnBgA |
| Creator | Altman Sam ([@app_sail](https://x.com/app_sail)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/ssh-to-grok-via-tailscale), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ssh-to-grok-bot-via-tailscale), [grokbothq.xyz](https://grokbothq.xyz/bots/ssh-to-grok-bot-via-tailscale), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ssh-to-grok-bot-via-tailscale), [x-research](https://x.com/app_sail/status/2103886508264653232) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/ssh-to-grok-via-tailscale ~/pi-bots/ssh-to-grok-via-tailscale && cd ~/pi-bots/ssh-to-grok-via-tailscale
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/ssh-to-grok-via-tailscale`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tailscale`: cron `12 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
