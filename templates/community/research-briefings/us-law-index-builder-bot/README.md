# US Law Index Builder Bot

Builds a private, non-commercial educational library of US primary law from official and law-school sources, then a citation-backed local search engine. Retrieval first; the LLM only writes from small retrieved passages.

| | |
| --- | --- |
| Original template | https://x.ai/bot/G2eeD6pM6N6TNfnHbsC8c |
| Creator | EchoField Visuals ([@EchoFieldVisual](https://x.com/EchoFieldVisual)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/us-law-index-builder-bot), [botsdots.site](https://botsdots.site/templates/us-law-index-builder-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/us-law-index-builder-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/US-Law-Index-Builder-Bot-G2eeD6pM), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Shoshkin/status/2096426490346774938) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/us-law-index-builder-bot ~/pi-bots/us-law-index-builder-bot && cd ~/pi-bots/us-law-index-builder-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/us-law-index-builder-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
