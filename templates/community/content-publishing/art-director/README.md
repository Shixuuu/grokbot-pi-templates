# Art Director

An art director and graphic designer that runs your brand's Instagram. It hunts Pinterest for ideas to remix, makes on-brand images and carousels, and posts and grows the account on a schedule.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CPsMufoHozETWciYoiqvL |
| Creator | Carlos ([@Carlos_Arthurr](https://x.com/Carlos_Arthurr)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/art-director), [grokbotwiki.com](https://www.grokbotwiki.com/bots/art-director), [grokbothq.xyz](https://grokbothq.xyz/bots/art-director), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/art-director), [x-research](https://botsdots.site/templates/art-director) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/art-director ~/pi-bots/art-director && cd ~/pi-bots/art-director
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/art-director`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
