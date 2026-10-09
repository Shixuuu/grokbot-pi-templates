# Replydebt

Ends the unread-text shame spiral: triages ghosted threads, drafts a 1–2 line honest reopen, and tracks what you cleared. Never sends without your yes. Quiet when reply debt is zero. Mehmet Turac (@TuracTheThinker).

| | |
| --- | --- |
| Original template | https://x.ai/bot/bJGTcDqC4fAEdbw2SuZqM |
| Creator | Turac ([@TuracTheThinker](https://x.com/TuracTheThinker)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/replydebt), [grokbotwiki.com](https://www.grokbotwiki.com/bots/replydebt), [grokbothq.xyz](https://grokbothq.xyz/bots/replydebt), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/TuracTheThinker/status/2096975000704262512) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/replydebt ~/pi-bots/replydebt && cd ~/pi-bots/replydebt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/replydebt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
