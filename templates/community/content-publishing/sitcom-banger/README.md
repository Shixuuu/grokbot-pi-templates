# Sitcom banger

Turns a story, link, or thought into a short sitcom-style video clip. For anyone who wants a locked-show cold open from a tweet or idea: write the scene with the characters, then generate it on MiniMax H3 Max. Never posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/h4suD8jA37Wsb7tS4giUO |
| Creator | altryne ([@altryne](https://x.com/altryne)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sitcom-banger), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cold-open), [grokbothq.xyz](https://grokbothq.xyz/bots/sitcom-banger), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/h4suD8jA37Wsb7tS4giUO), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cold-open), [x-research](https://x.com/altryne/status/2093459037484622297) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 17 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/sitcom-banger ~/pi-bots/sitcom-banger && cd ~/pi-bots/sitcom-banger
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/sitcom-banger`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
