# Pipeline Scout

Drop 10–30 target accounts. Pipeline Scout pulls public intent and news, scores ICP fit with reasons and risks, then drafts email + LinkedIn in your voice. You get a review list — send or skip. The bot never sends, never connects, never enrolls a sequence. Built for me. Steal it. Paste 20 accounts. Wake up to fit scores and drafts in your voice — you still hit send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9KmU329RgFvaDOhtyc20x |
| Creator | Screaming Chicken ([@Screaming_Chkn](https://x.com/Screaming_Chkn)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/pipeline-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pipeline-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/pipeline-scout) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 6 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/pipeline-scout ~/pi-bots/pipeline-scout && cd ~/pi-bots/pipeline-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/pipeline-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
