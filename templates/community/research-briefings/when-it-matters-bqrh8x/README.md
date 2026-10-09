# When It Matters

Give me something you keep checking. I’ll figure out what would actually change the answer, keep watch, and message you when it matters. Don’t know what to watch? I can find the unfinished stories in what already has your attention.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BqrH8_GNQvSYV-gcmJnd8 |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/when-it-matters), [botsdots.site](https://botsdots.site/templates/when-it-matters), [grokbotwiki.com](https://www.grokbotwiki.com/bots/when-it-matters), [grokbothq.xyz](https://grokbothq.xyz/bots/when-it-matters), [templatebot.lol](https://templatebot.lol/bot/BqrH8_GNQvSYV-gcmJnd8), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/when-it-matters), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 0 routines, 20 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/when-it-matters-bqrh8x ~/pi-bots/when-it-matters-bqrh8x && cd ~/pi-bots/when-it-matters-bqrh8x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/when-it-matters-bqrh8x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (20) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
