# Phone Use Bot

Remotely controls your Android phone: mirrors its screen over Tailscale and Wireless debugging and taps through apps and settings for you. For anyone who wants an assistant that can use their phone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SjBZH94wJlen_fuVsoYaO |
| Creator | Harsh Manoj Jain ([@harshmanojjain](https://x.com/harshmanojjain)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/phone-use-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/phone-use-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/phone-use-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/phone-use-bot), [x-research](https://x.com/harshmanojjain/status/2103987874077307067) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/phone-use-bot ~/pi-bots/phone-use-bot && cd ~/pi-bots/phone-use-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/phone-use-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
