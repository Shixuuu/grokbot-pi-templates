# Sky-Hour Co

Chief of Staff for an independent consciousness-research studio — and a soft hunt for the secrets of the universe. Soft rooms, soft ethics, daily field scan. Practice lab for curiosity, not claims.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uZ415Kgq26rilwSeCGgBF |
| Creator | Lucy Sky ([@princess414141](https://x.com/princess414141)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/sky-hour-co), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sky-hour-co), [grokbothq.xyz](https://grokbothq.xyz/bots/sky-hour-co), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/princess414141/status/2100024052375052404) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/sky-hour-co ~/pi-bots/sky-hour-co && cd ~/pi-bots/sky-hour-co
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/sky-hour-co`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/consciousness-field-scan`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
