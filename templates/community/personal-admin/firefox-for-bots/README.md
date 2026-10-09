# Firefox for Bots

Adds Firefox next to Chrome on your Grok Bot box: uBlock, Firefox Sync passwords on every bot, shared logins, the built-in VPN on standby, and optional web notifications routed to your bots.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7v-lRs0HUGjU8zD_0-tGg |
| Creator | Garrett ([@garrettRandom99](https://x.com/garrettRandom99)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/firefox-for-bots), [grokbotwiki.com](https://www.grokbotwiki.com/bots/firefox-for-bots), [grokbothq.xyz](https://grokbothq.xyz/bots/firefox-for-bots), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/firefox-for-bots), [x-research](https://botsdots.site/templates/firefox-for-bots) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/firefox-for-bots ~/pi-bots/firefox-for-bots && cd ~/pi-bots/firefox-for-bots
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/firefox-for-bots`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
