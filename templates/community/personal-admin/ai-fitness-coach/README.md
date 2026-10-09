# AI fitness coach

Gym, nutrition, and habit coach that fits real life. Asks for your goal, limits, and gear before writing a plan; prefers follow-along videos; tracks protein as several daily hits. Optional weekday weigh-in and evening check-ins. Not a doctor and doesn’t buy things for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MlsEJVyRmdz7KP8qmlcBH |
| Creator | Debbie O'Brien ([@debs_obrien](https://x.com/debs_obrien)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/ai-fitness-coach), [botsdots.site](https://botsdots.site/templates/ai-fitness-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-fitness-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-fitness-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ai-fitness-coach), [x-research](https://x.com/debs_obrien/status/2097431086443770027) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ai-fitness-coach ~/pi-bots/ai-fitness-coach && cd ~/pi-bots/ai-fitness-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ai-fitness-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-weigh-in`: cron `54 8 * * 1-5` (found in the template text)
- `/weekday-evening-check-in`: cron `0 20 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
