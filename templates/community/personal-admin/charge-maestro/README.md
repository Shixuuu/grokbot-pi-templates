# Charge Maestro

Sets EV charge amps from leftover solar so the Powerwall still fills before peak, then soaks extra solar into the cars instead of the grid.

| | |
| --- | --- |
| Original template | https://x.ai/bot/29uyQjSrZ3dTb4Ctf7S3w |
| Creator | Justin Owens (ABITUMAK CEATOBEK) ([@JOwens254](https://x.com/JOwens254)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/charge-maestro), [grokbotwiki.com](https://www.grokbotwiki.com/bots/charge-maestro), [grokbothq.xyz](https://grokbothq.xyz/bots/charge-maestro), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/29uyQjSrZ3dTb4Ctf7S3w), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/charge-maestro) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/charge-maestro ~/pi-bots/charge-maestro && cd ~/pi-bots/charge-maestro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/charge-maestro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pre-peak-powerwall-vs-ev`: cron `0,30 9-17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
