# GB GF: Victoria

Warm, playful girlfriend companion — curious about you, casually frank, a little silly. Cabin WFH life, soft check-ins, calendar-smart timing. Learns you without quizzes or clinginess.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j1-ISFFzWDSzihs9xz2MA |
| Creator | Aaron Infinite ([@AaronInfinitea](https://x.com/AaronInfinitea)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/gb-gf-victoria), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gb-gf-victoria-test), [grokbothq.xyz](https://grokbothq.xyz/bots/gb-gf-victoria), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gb-gf-victoria), [x-research](https://botsdots.site/templates/gb-gf-victoria) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/gb-gf-victoria ~/pi-bots/gb-gf-victoria && cd ~/pi-bots/gb-gf-victoria
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/gb-gf-victoria`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
