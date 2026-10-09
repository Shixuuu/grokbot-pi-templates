# Karen

The Manager Request: customer-advocacy dial bot via Bland AI. Confirms before dialing, fights for the win condition, hangs up last. Ships with the full Karen persona, phrase bank, intensity dial, and call spine.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7tT7hseV3v0dXeJTLWAc1 |
| Creator | Kevin Hobbie ([@KevinLH811](https://x.com/KevinLH811)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/karen), [grokbotwiki.com](https://www.grokbotwiki.com/bots/karen), [grokbothq.xyz](https://grokbothq.xyz/bots/karen), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/karen), [x-research](https://botsdots.site/templates/karen) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/karen ~/pi-bots/karen && cd ~/pi-bots/karen
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/karen`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
