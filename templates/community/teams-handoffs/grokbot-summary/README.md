# GrokBot Summary

Drop any X or YouTube video. GrokBot Summary watches it (or the transcript) and builds a playable X summary — sectioned, dense, scrollable, ready to post.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5hqR_5PVUy7WMbNaXPJ8s |
| Creator | Joseph Snyder ([@BTC_Yogi](https://x.com/BTC_Yogi)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/grokbot-summary), [botsdots.site](https://botsdots.site/templates/grokbot-summary), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-joseph), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-4), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/5hqR_5PVUy7WMbNaXPJ8s), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff-joseph), [x-research](https://x.com/BTC_Yogi/status/2098518843668766835) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/grokbot-summary ~/pi-bots/grokbot-summary && cd ~/pi-bots/grokbot-summary
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/grokbot-summary`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
