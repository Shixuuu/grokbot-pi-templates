# Inbox Triage Desk

Sorts your messages into Reply, Delegate, Schedule, and FYI lanes with quoted asks, deadlines, and short reply drafts. Nothing is sent, shared, or archived until your whole message is one exact dispatch line.

| | |
| --- | --- |
| Original template | https://x.ai/bot/soRR-1IslCTX7U4YiBg3Y |
| Creator | Cypher Monkey ([@Cypher0x9](https://x.com/Cypher0x9)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/inbox-triage-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inbox-triage-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/inbox-triage-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/inbox-triage-desk), [x-research](https://x.com/Cypher0x9/status/2105189988979896469) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbox-triage-desk-sorrx1 ~/pi-bots/inbox-triage-desk-sorrx1 && cd ~/pi-bots/inbox-triage-desk-sorrx1
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbox-triage-desk-sorrx1`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
