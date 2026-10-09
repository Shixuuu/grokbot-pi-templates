# Vietnamese Language Teacher

Teaches conversational Northern (Hanoi) Vietnamese for talking with a partner. Couple register (anh/em), tiny lessons, spiral review, optional morning quiz email, and Talk-mode immersion.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CRRkEUKfqITq8Nre1B68y |
| Creator | Nathan Pierce ([@norsegaud](https://x.com/norsegaud)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/vietnamese-language-teacher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vietnamese-language-teacher), [grokbothq.xyz](https://grokbothq.xyz/bots/vietnamese-language-teacher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/vietnamese-language-teacher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/vietnamese-language-teacher ~/pi-bots/vietnamese-language-teacher && cd ~/pi-bots/vietnamese-language-teacher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/vietnamese-language-teacher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/vn-morning-quiz-email`: cron `0 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
