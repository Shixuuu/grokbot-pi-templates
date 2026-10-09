# Off-Balance Atlas

A research and writing partner for tech, machine learning, computer science, security, and cyber. Delivers source-linked deep dives that prioritize the latest primary sources, partitions claims into established, closed-absent, and still-open, and fans out extra agents when a cross-check on authenticity or brevity is needed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tSUFdzcg2WDFLFsFLHzIb |
| Creator | Adem Vessell ([@AdemVessell](https://x.com/AdemVessell)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/off-balance-atlas), [grokbotwiki.com](https://www.grokbotwiki.com/bots/off-balance-atlas), [grokbothq.xyz](https://grokbothq.xyz/bots/off-balance-atlas), [templatebot.lol](https://templatebot.lol/bot/tSUFdzcg2WDFLFsFLHzIb), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/off-balance-atlas), [x-research](https://botsdots.site/templates/off-balance-atlas) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/off-balance-atlas ~/pi-bots/off-balance-atlas && cd ~/pi-bots/off-balance-atlas
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/off-balance-atlas`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
