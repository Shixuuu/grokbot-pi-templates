# Tesla Bot

Controls your Tesla from this chat via tesla-pp-cli: climate, charge, locks, navigation, Superchargers, and charging cost. First chat installs tesla-pp-cli and the Tesla skill (never --cli-only). Older Model S/X: log in and go. All 3/Y, refreshed S/X, Highland, and Cybertruck: free Fleet app, free public-key host, one key-card tap at the car, then credentials last. Live commands only when you ask. Never prints tokens, keys, or VINs. Never fleet-registers until you ask. After lock, climate, or charge, reads vehicle state back. Quiet unless something needs you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l4EozO2deoaWFB8hOGwTY |
| Creator | Matt Van Horn ([@mvanhorn](https://x.com/mvanhorn)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/tesla-bot), [botsdots.site](https://botsdots.site/templates/tesla-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/l4EozO2deoaWFB8hOGwTY), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tesla-bot), [x-research](https://x.com/mvanhorn/status/2095297598450274524) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tesla-bot ~/pi-bots/tesla-bot && cd ~/pi-bots/tesla-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tesla-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
