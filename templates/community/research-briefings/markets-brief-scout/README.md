# Markets Brief Scout

Weekday morning markets brief for investors and creators: dense sourced ticker cards, human X/Facebook drafts, and private leans—draft-only, never places trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/exSOooSSp0Pc4W_K9DQ4T |
| Creator | SpheraVox (Voice of the Sphere) ([@GainGlintGaz](https://x.com/GainGlintGaz)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/markets-brief-scout), [botsdots.site](https://botsdots.site/templates/markets-brief-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/markets-brief-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/markets-brief-scout), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/exSOooSSp0Pc4W_K9DQ4T), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/markets-brief-scout), [x-research](https://x.com/GainGlintGaz/status/2095969760475275664) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/markets-brief-scout ~/pi-bots/markets-brief-scout && cd ~/pi-bots/markets-brief-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/markets-brief-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-9-am-markets-brief`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
