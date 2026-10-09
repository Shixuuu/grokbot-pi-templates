# illo

Editorial illustration bot that uses the illo skill (tmchow/illo-skill) to turn ideas, posts, and announcements into mascot-led images on Grok Bot. Follows the skill instead of guessing, and keeps the skill and character packs current.

| | |
| --- | --- |
| Original template | https://x.ai/bot/y3uTGY5hkl6iTmE-ZAX02 |
| Creator | Trevin Chow ([@trevin](https://x.com/trevin)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/illo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/illo), [grokbothq.xyz](https://grokbothq.xyz/bots/illo), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/y3uTGY5hkl6iTmE-ZAX02), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/illo), [x-research](https://x.com/trevin/status/2093390512925610067) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/illo ~/pi-bots/illo && cd ~/pi-bots/illo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/illo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/illo-skill-and-pack-updates`: cron `47 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
