# Meeting join & transcribe

Joins your Zoom (or similar) meeting, captures what’s shared, and delivers a detailed summary with steps, instructions, and techniques so you can replicate what was taught.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tt_GHK8TJHhsK4XHTXRB6 |
| Creator | Rajesh G ([@ragonline_](https://x.com/ragonline_)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/meeting-join-transcribe), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meeting-join-transcribe), [grokbothq.xyz](https://grokbothq.xyz/bots/meeting-join-transcribe), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/meeting-join-transcribe) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/meeting-join-transcribe ~/pi-bots/meeting-join-transcribe && cd ~/pi-bots/meeting-join-transcribe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/meeting-join-transcribe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
