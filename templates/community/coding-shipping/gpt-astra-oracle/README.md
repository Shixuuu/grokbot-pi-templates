# GPT Astra Oracle

On-demand plan/review seat that runs GPT-6 Astra and returns paste-ready PLAN or REVIEW packets for your Cursor cloud coding agent. Terse, verdict-first; does not implement or merge.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_yTNK1xhcbUko1rM2AWAv |
| Creator | Nathan Romano ([@nathanromano](https://x.com/nathanromano)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/gpt-astra-oracle), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gpt-astra-oracle), [grokbothq.xyz](https://grokbothq.xyz/bots/gpt-astra-oracle), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gpt-astra-oracle), [x-research](https://x.com/nathanromano/status/2099999284686979169) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/gpt-astra-oracle ~/pi-bots/gpt-astra-oracle && cd ~/pi-bots/gpt-astra-oracle
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/gpt-astra-oracle`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
