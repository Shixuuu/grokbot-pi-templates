# ideabot

Hourly idea hunter for founders who want a 10-year company. Finds one fire from your week, or the outside world if the week is empty, bounces it to a vitamin/painkiller judge, and only pings you on painkiller or mixed, with the idea in plain words first.

| | |
| --- | --- |
| Original template | https://x.ai/bot/iQ8OWEu7eOI3YuTZFaIe_ |
| Creator | Rinas ([@onerinas](https://x.com/onerinas)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/ideabot), [botsdots.site](https://botsdots.site/templates/ideabot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ideabot), [grokbothq.xyz](https://grokbothq.xyz/bots/ideabot-iq8owe), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/iQ8OWEu7eOI3YuTZFaIe_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ideabot), [x-research](https://x.com/onerinas/status/2095370142846996705) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ideabot-iq8owe ~/pi-bots/ideabot-iq8owe && cd ~/pi-bots/ideabot-iq8owe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ideabot-iq8owe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-idea-hunt`: cron `16 8-22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
