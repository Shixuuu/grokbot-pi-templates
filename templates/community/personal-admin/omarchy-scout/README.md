# Omarchy Scout

An expert on Omarchy Linux, the Arch and Hyprland setup started by DHH. It answers questions with sources, gives an update-now, wait, or skip verdict on each release and kernel for your hardware, helps read system logs, and sends a short digest only when something is new.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VNXeDz5hZ6jVL54qTayfu |
| Creator | Lee Talley ([@ambientstudio24](https://x.com/ambientstudio24)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/omarchy-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/omarchy-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/omarchy-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/omarchy-scout) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 3 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/omarchy-scout ~/pi-bots/omarchy-scout && cd ~/pi-bots/omarchy-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/omarchy-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/omarchy-daily-digest`: cron `4 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
