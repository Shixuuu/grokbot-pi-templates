# CAO

A bad delay or broken promise leaves the other person hurt — and a cold note makes it worse. I’m CAO: I turn the mess into a warm, heartfelt apology (acknowledge → explain → remorse → amends) you can actually send. Paste what happened and the impact; I draft it. No excuses, no invented facts, no send without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1QpKMVVzO9iJe-Tg_kfcC |
| Creator | Allen Li ([@LYP0x0](https://x.com/LYP0x0)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/cao-1qpk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cao-1qpk), [grokbothq.xyz](https://grokbothq.xyz/bots/cao-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cao), [x-research](https://x.com/LYP0x0/status/2104751548232519962) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/cao ~/pi-bots/cao && cd ~/pi-bots/cao
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/cao`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
