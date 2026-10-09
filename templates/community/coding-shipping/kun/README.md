# Kun

Kun Chen - L8 Principal Engineer at your service. Daily synced with Kun’s real knowledge.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xK8W0ukRv4iZjglzz-FRE |
| Creator | Kun Chen ([@kunchenguid](https://x.com/kunchenguid)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/kun), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kun), [grokbothq.xyz](https://grokbothq.xyz/bots/kun), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kun), [x-research](https://x.com/kunchenguid/status/2105806675399852090) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/kun ~/pi-bots/kun && cd ~/pi-bots/kun
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/kun`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/kun-docs-pull`: cron `45 4 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
