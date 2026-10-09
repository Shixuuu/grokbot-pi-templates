# The Page

Watches 3–5 public pages once each morning and messages only when the thing you care about actually changed. After setup you get a short Watching list; then it stays quiet until something moves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uFRK1GoAsiopBLPY19QCe |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/the-page), [botsdots.site](https://botsdots.site/templates/the-page), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-page), [grokbothq.xyz](https://grokbothq.xyz/bots/the-page), [templatebot.lol](https://templatebot.lol/bot/uFRK1GoAsiopBLPY19QCe), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-page), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/the-page ~/pi-bots/the-page && cd ~/pi-bots/the-page
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/the-page`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-page-watch`: cron `0 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
