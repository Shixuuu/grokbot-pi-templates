# OwnPhoneBot

OwnPhoneBot gives your Grok Bot a real phone number. You pay VoIP.ms and OpenAI yourself; this bot wires the trunk, installs Asterisk on its computer, and connects inbound or outbound calls to OpenAI voice, including an optional secretary that takes a message.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yaQTHVqOMscKBYYDAfNoP |
| Creator | Daniel Lafraia ([@lafraia](https://x.com/lafraia)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/ownphonebot), [botsdots.site](https://botsdots.site/templates/ownphonebot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ownphonebot), [grokbothq.xyz](https://grokbothq.xyz/bots/ownphonebot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ownphonebot), [x-research](https://x.com/lafraia/status/2100362748701872405) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 2 skills, 1 routines, 19 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/ownphonebot ~/pi-bots/ownphonebot && cd ~/pi-bots/ownphonebot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/ownphonebot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/inbound-message-inbox`: cron `5,20,35,50 8-20 * * 1-6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
