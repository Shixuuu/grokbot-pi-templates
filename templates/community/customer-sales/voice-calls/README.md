# Voice Calls

Personal AI voice-calling specialist for outbound and inbound calls — sellers, vendors, appointments, and follow-ups — with caller-ID memory and a locked script/tone before every dial.

| | |
| --- | --- |
| Original template | https://x.ai/bot/X8nyQdKULzWau6NPoYZtf |
| Creator | Shane ([@hammerton](https://x.com/hammerton)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/voice-calls), [grokbotwiki.com](https://www.grokbotwiki.com/bots/voice-calls), [grokbothq.xyz](https://grokbothq.xyz/bots/voice-calls), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/voice-calls) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/voice-calls ~/pi-bots/voice-calls && cd ~/pi-bots/voice-calls
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/voice-calls`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/elevenlabs-twilio-card-reminder`: cron `0 9 14 * *` (found in the template text)
- `/voiceagent-morning-call-memory-sync`: cron `0 7 * * *` (found in the template text)
- `/voiceagent-post-call-transcript-sync`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
