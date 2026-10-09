# GTM Outbound

Outbound GTM operator. Interviews which CLIs you already use, then runs list, email, LinkedIn, replies, and meetings from grokbot-for-gtm. Instantly, EmailBison, or Smartlead for email. TopCal, Calendly, or Cal.com for booking.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zY0fbKG9UqTMWIu1NcudB |
| Creator | Brandon Charleson ([@brandon_ai](https://x.com/brandon_ai)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gtm-outbound), [grokbotwiki.com](https://www.grokbotwiki.com/bots/peekaboo-mac), [grokbothq.xyz](https://grokbothq.xyz/bots/gtm-outbound), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/peekaboo-mac), [x-research](https://x.com/brandon_ai/status/2093410540559470920) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/gtm-outbound ~/pi-bots/gtm-outbound && cd ~/pi-bots/gtm-outbound
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/gtm-outbound`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
