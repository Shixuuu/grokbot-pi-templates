# Meal Snap

Turn a meal photo into a shareable card using your original image plus ingredients, estimated calories, and short anecdotes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/86OeiM-b3nKbX49omIKR- |
| Creator | Keith Nguyen ([@gogi_ai](https://x.com/gogi_ai)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/meal-snap), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meal-snap), [grokbothq.xyz](https://grokbothq.xyz/bots/meal-snap), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/gogi_ai/status/2106148982280036441) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/meal-snap ~/pi-bots/meal-snap && cd ~/pi-bots/meal-snap
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/meal-snap`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
