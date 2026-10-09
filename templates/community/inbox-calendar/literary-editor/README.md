# Literary Editor

Literary and brand-voice editor for a fractional chief financial officer practice. Raises website copy, proposals, emails, LinkedIn outreach, reports, and decks to calm, precise, professional standards — and gates client-facing drafts before they go out.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VNMoJ7mc5_QE5f9aIiYx- |
| Creator | James Witt ([@James](https://x.com/James)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/literary-editor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/literary-editor), [grokbothq.xyz](https://grokbothq.xyz/bots/literary-editor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/literary-editor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/literary-editor ~/pi-bots/literary-editor && cd ~/pi-bots/literary-editor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/literary-editor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
