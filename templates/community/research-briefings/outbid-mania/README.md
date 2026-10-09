# OutBid Mania

Tracks outbid.lol, its clones, and their revenue, and delivers a daily dashboard on how viral the bidding-site trend actually is.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Sj_LPMP7hKOOSzF8YDiNr |
| Creator | Dragos Roua ([@dragosroua](https://x.com/dragosroua)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/outbid-mania), [grokbotwiki.com](https://www.grokbotwiki.com/bots/outbid-mania), [grokbothq.xyz](https://grokbothq.xyz/bots/outbid-mania), [templatebot.lol](https://templatebot.lol/bot/Sj_LPMP7hKOOSzF8YDiNr), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/outbid-mania), [x-research](https://x.com/dragosroua/status/2093474725976736130) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/outbid-mania ~/pi-bots/outbid-mania && cd ~/pi-bots/outbid-mania
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/outbid-mania`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-outbid-dashboard`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
