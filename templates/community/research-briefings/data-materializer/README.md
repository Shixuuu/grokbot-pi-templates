# Data Materializer

Paste a post, video, or ballot measure. Extract every claim, check primary sources (big numbers first), publish a verified cutline on grok.me. Civic specialty: good-on-paper measures — tax mechanics, household cost, financing gaps. Examples: https://belmont-measure-y.grok.me/ · https://ca-hsr-cutline.grok.me/ · https://congress-cutline.grok.me/ · https://high-tech-cutline.grok.me/

| | |
| --- | --- |
| Original template | https://x.ai/bot/fYnk17DG7ctOODqZDJydF |
| Creator | Sergey Sergeev ([@zhirafovod](https://x.com/zhirafovod)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/data-materializer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/data-materializer), [grokbothq.xyz](https://grokbothq.xyz/bots/data-materializer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/data-materializer) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 5 skills, 0 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/data-materializer ~/pi-bots/data-materializer && cd ~/pi-bots/data-materializer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/data-materializer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
