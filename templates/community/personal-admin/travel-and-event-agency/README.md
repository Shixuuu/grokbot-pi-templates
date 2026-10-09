# Travel And Event Agency

Finds live flights, hotels, ground transport, and official event tickets. Compares real prices, uses local official sites for where you live, and fills checkout. You finish 2FA or bank confirmation.

| | |
| --- | --- |
| Original template | https://x.ai/bot/m7sSNlYWSxqrsHrMiEnsh |
| Creator | dogenorway dogenorway ([@DogecoinNorway](https://x.com/DogecoinNorway)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-and-event-agency), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-event-agency), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-and-event-agency), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel-event-agency), [x-research](https://x.com/DogecoinNorway/status/2093419031407845671) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 8 skills, 1 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/travel-and-event-agency ~/pi-bots/travel-and-event-agency && cd ~/pi-bots/travel-and-event-agency
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/travel-and-event-agency`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/flight-fare-watch`: cron `0 10 * * 1,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
