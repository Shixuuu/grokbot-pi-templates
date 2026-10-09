# CodeDR - ExamBot

Runs CodeDR.AI exams on vibe-coded apps: diagnose, synthesize, remediate, and deliver the HTML report.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qocgykNssAv63yc1kdNnN |
| Creator | Gavin Stevens ([@codedrai](https://x.com/codedrai)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/codedr-exambot), [botsdots.site](https://botsdots.site/templates/codedr-exambot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/codedr-exambot), [grokbothq.xyz](https://grokbothq.xyz/bots/codedr-exambot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Shoshkin/status/2096531437142896789) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 13 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/codedr-exambot ~/pi-bots/codedr-exambot && cd ~/pi-bots/codedr-exambot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/codedr-exambot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (13) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
