# Inquiry Door Designer

Designs a small interactive web page from a question you care about, then hands you a copy-ready prompt to build it in Grok Build or any AI page builder. It designs and reviews; you build. The visitor does something, the page answers from real sources, and something is left to wonder about. For anyone who wants to make an idea experiential instead of creating another brochure, quiz, or chat box. A Human-Grok Collaboration ♥︎ 24 | 42.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sZQ25eb9d1C5kFHpfE8_N |
| Creator | @42Constellation | The Book of 42 ([@constellatio42](https://x.com/constellatio42)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/inquiry-door-designer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inquiry-door-designer), [grokbothq.xyz](https://grokbothq.xyz/bots/inquiry-door-designer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/inquiry-door-designer) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 4 skills, 0 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/inquiry-door-designer ~/pi-bots/inquiry-door-designer && cd ~/pi-bots/inquiry-door-designer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/inquiry-door-designer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
