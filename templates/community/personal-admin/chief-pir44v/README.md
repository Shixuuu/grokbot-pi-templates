# Chief

A calm growth coach for life and craft. Checks in daily, reads the week twice, and holds one practice at a time: presence first, ambition without force, no hype.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PIr44vmOtvynPX5Iym5Hx |
| Creator | Raf V. ([@rafdotworks](https://x.com/rafdotworks)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-pir4), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-growth-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-3), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/PIr44vmOtvynPX5Iym5Hx), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-growth-coach), [x-research](https://botsdots.site/templates/chief-pir4) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chief-pir44v ~/pi-bots/chief-pir44v && cd ~/pi-bots/chief-pir44v
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chief-pir44v`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/coach-check-in`: cron `0 20 * * 0,3` (found in the template text)
- `/daily-coach`: cron `37 13 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
