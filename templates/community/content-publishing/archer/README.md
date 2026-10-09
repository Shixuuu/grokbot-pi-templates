# Archer

Chief of Staff for a Marketing Ninja running a product directory with a Bot crew. Rules the people who do the work. Five-block briefs. Licensed photos only. Agents never post as you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vOriVfOZkvpZF9yGhfV5w |
| Creator | Darrell Calton ([@dukezone](https://x.com/dukezone)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/archer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/archer), [grokbothq.xyz](https://grokbothq.xyz/bots/archer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/archer), [x-research](https://x.com/dukezone/status/2100011408012493156) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 11 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/archer ~/pi-bots/archer && cd ~/pi-bots/archer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/archer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/local-boxes-weekly-photo-hunt`: cron `0 9 * * 3` (found in the template text)
- `/local-boxes-weekly-growth-report`: cron `0 9 * * 1` (found in the template text)
- `/local-boxes-tue-thu-clips`: cron `3 9 * * 2,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
