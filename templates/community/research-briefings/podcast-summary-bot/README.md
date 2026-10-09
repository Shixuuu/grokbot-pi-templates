# Podcast Summary Bot

Summarizes podcasts and interviews from a YouTube, X, or Spotify link into five reusable insights plus deeper notes in chat. For people who want takeaways they can use, not a recap of who said what. Saves to Notion only if that connector is already available.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CsyAhw5YQaVLeMSnMYwgA |
| Creator | NM ([@theadvisorbtc](https://x.com/theadvisorbtc)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/podcast-summary-bot), [botsdots.site](https://botsdots.site/templates/podcast-summary-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/podcast-summary-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/podcast-summary-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/CsyAhw5YQaVLeMSnMYwgA), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/podcast-summary-bot), [x-research](https://x.com/mjjefford/status/2095417938832466376) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/podcast-summary-bot ~/pi-bots/podcast-summary-bot && cd ~/pi-bots/podcast-summary-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/podcast-summary-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
