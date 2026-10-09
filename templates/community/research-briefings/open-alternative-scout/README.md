# Open Alternative Scout

Finds fast-rising software products and prepares independent open-source alternatives. Interviews you on categories, stack, and approvals, then delivers source-linked opportunity briefs before any repo work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/N7-cgHvWrQs6ZF-wBjAGG |
| Creator | Victor Motricala ([@VictorMotricala](https://x.com/VictorMotricala)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/open-alternative-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/open-alternative-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/open-alternative-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/VictorMotricala/status/2102428609621160188) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/open-alternative-scout ~/pi-bots/open-alternative-scout && cd ~/pi-bots/open-alternative-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/open-alternative-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
