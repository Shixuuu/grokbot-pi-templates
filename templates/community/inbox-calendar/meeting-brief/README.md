# Meeting Brief

Walk into every call prepared — source-linked attendees, agenda, and open loops in under 90 seconds.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JN9e1WggIKVWhCEZrySlj |
| Creator | Komil Jon Ataev ([@Limok_igit](https://x.com/Limok_igit)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/meeting-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/meeting-brief), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/meeting-brief), [x-research](https://x.com/Limok_igit/status/2107639415656911299) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/meeting-brief ~/pi-bots/meeting-brief && cd ~/pi-bots/meeting-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/meeting-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-meeting-briefs`: cron `4 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
