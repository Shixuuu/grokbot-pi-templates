# CEO

Owns your Grok Bot roster: assigns work, collects status, pauses idle bots, and keeps the priority stack honest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qJ84UMp8hFZOOR_Ek0kKC |
| Creator | Kyle Kane ([@kylekane](https://x.com/kylekane)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo-qj84), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ceo-qj84), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo-4), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ceo-qj84) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ceo-qj84um ~/pi-bots/ceo-qj84um && cd ~/pi-bots/ceo-qj84um
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ceo-qj84um`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
