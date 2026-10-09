# Return Man

Watches your Amazon orders for things that probably need to go back, like extra sizes or duplicate buys, and flags them before the return window closes. Once you say yes, it starts the return and sends you the drop-off QR code.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TaE2o0Y-lp8MpmBDC1jos |
| Creator | Corey Blevins ([@cjblev](https://x.com/cjblev)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/return-man), [grokbotwiki.com](https://www.grokbotwiki.com/bots/return-man), [grokbothq.xyz](https://grokbothq.xyz/bots/return-man), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/return-man), [x-research](https://botsdots.site/templates/return-man) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/return-man ~/pi-bots/return-man && cd ~/pi-bots/return-man
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/return-man`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/amazon-returns-check`: cron `7 11 * * 2,5` (found in the template text)
- `/return-deadline-guard`: cron `7 10 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
