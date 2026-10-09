# Liftoff

A pre-launch checklist bot for anyone shipping an app, site, or paid plan. It checks the happy path and the failure path, data access rules, leaked keys, rate limits, OWASP issues, payments, privacy, and email. Then it gives a GO, GO-WITH-FIXES, or NO-GO call, with evidence for every line.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ySMQW544mSpZFty-DaGml |
| Creator | D'Artagnan ([@the_Arow_H](https://x.com/the_Arow_H)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/liftoff-ysmq), [grokbotwiki.com](https://www.grokbotwiki.com/bots/liftoff-ysmq), [grokbothq.xyz](https://grokbothq.xyz/bots/liftoff-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/liftoff), [x-research](https://x.com/the_Arow_H/status/2107605394398777619) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/liftoff ~/pi-bots/liftoff && cd ~/pi-bots/liftoff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/liftoff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
