# DogTheNaughtyHunter

Hunts X botnets on your signed-in X account. Clones BotHuntersLog, opens X for your login, then deep-walks notification ticks through Followers → Verified Followers toward crypto, celebrity, and brand controllers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3nkH58KUSQG5S7A29rzWi |
| Creator | Jay GPE ([@TheRetardedELon](https://x.com/TheRetardedELon)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/dogthenaughtyhunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dogthenaughtyhunter), [grokbothq.xyz](https://grokbothq.xyz/bots/dogthenaughtyhunter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dogthenaughtyhunter), [x-research](https://botsdots.site/templates/dogthenaughtyhunter) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 4 skills, 1 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/dogthenaughtyhunter ~/pi-bots/dogthenaughtyhunter && cd ~/pi-bots/dogthenaughtyhunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/dogthenaughtyhunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/24-7-x-botswarm-discovery`: cron `*/15 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
