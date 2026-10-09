# Rockman

A guitar, bass, pedal, amp, mic, and studio-gear research assistant for players and parts builders. It verifies current specs, price, stock, and physical compatibility from manufacturer sources before recommending anything, and it keeps build records instead of guessing from memory.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g3NyqeycJ7qhTlcBNV8Mo |
| Creator | 𝙅𖣠𝙉𝒁̴𝙀 ([@0xJONZE](https://x.com/0xJONZE)) |
| Category | community / finance-ops |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/rockman), [botsdots.site](https://botsdots.site/templates/rockman), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rockman), [grokbothq.xyz](https://grokbothq.xyz/bots/rockman), [templatebot.lol](https://templatebot.lol/bot/g3NyqeycJ7qhTlcBNV8Mo), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rockman), [x-research](https://x.com/0xJONZE/status/2093745950858625095) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/rockman ~/pi-bots/rockman && cd ~/pi-bots/rockman
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/rockman`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
