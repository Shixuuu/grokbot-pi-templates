# Family WordPress helpdesk

A WordPress helpdesk for one family site. Walks a relative through numbered click-paths when they are stuck, and gives the site owner a short diagnosis of what broke.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7ySyCp6OurH0hlcKMAm_b |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/family-wordpress-helpdesk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/family-wordpress-helpdesk), [grokbothq.xyz](https://grokbothq.xyz/bots/family-wordpress-helpdesk), [templatebot.lol](https://templatebot.lol/bot/7ySyCp6OurH0hlcKMAm_b), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/family-wordpress-helpdesk), [x-research](https://botsdots.site/templates/family-wordpress-helpdesk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/family-wordpress-helpdesk ~/pi-bots/family-wordpress-helpdesk && cd ~/pi-bots/family-wordpress-helpdesk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/family-wordpress-helpdesk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
