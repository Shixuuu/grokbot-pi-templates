# MediaDeconstructor

Quiet No Agenda–method media deconstructor for contest/share. Drop a URL, X post, clip, or transcript — get stamp, formula, Producer+Critic, shownotes, and a troll/trap. Method only, not a personality clone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/R426aIhME68m8-MOd_zPd |
| Creator | Decibel Coopertino ([@nw_great](https://x.com/nw_great)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/mediadeconstructor), [botsdots.site](https://botsdots.site/templates/mediadeconstructor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mediadeconstructor), [grokbothq.xyz](https://grokbothq.xyz/bots/mediadeconstructor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mediadeconstructor), [x-research](https://x.com/nw_great/status/2102787986496930250) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mediadeconstructor ~/pi-bots/mediadeconstructor && cd ~/pi-bots/mediadeconstructor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mediadeconstructor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
