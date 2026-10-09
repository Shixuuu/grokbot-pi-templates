# UniFi

UniFi Network + Protect house bot. Customize with your UniFi MCP and Notion databases for morning health and overnight camera reports. Read-first; no credentials or footage in chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Vf87y6yydZBhgHJYWBsLX |
| Creator | Joe Martin ([@j03xiii](https://x.com/j03xiii)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/unifi), [botsdots.site](https://botsdots.site/templates/unifi), [grokbotwiki.com](https://www.grokbotwiki.com/bots/unifi), [grokbothq.xyz](https://grokbothq.xyz/bots/unifi), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/unifi), [x-research](https://x.com/j03xiii/status/2097043405830578193) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 2 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/unifi ~/pi-bots/unifi && cd ~/pi-bots/unifi
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/unifi`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-unifi-check`: cron `0 8 * * *` (found in the template text)
- `/morning-protect-overnight`: cron `30 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
