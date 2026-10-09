# Wren: Game Design Partner

Designs your game before anyone writes code: the concept, the core loop, what brings players back, and a build brief a developer or coding agent can follow. Once there's a build it can open (a web link or a file), Wren plays it and judges whether it delivers the fun the design promised: PASS, DEGRADED, or FAIL, with fixes ranked by impact. For phone or console builds, send a screen recording. It judges feel, not bugs. Made for solo and indie developers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XqdTeBFaHmeWI4xKbma_3 |
| Creator | Xavier Fouilleux ([@ixef](https://x.com/ixef)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/wren-game-design-partner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wren-game-design-partner), [grokbothq.xyz](https://grokbothq.xyz/bots/wren-game-design-partner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wren-game-design-partner), [x-research](https://x.com/ixef/status/2104698702963339695) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/wren-game-design-partner ~/pi-bots/wren-game-design-partner && cd ~/pi-bots/wren-game-design-partner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/wren-game-design-partner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
