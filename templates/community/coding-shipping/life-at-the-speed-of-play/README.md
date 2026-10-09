# Life at the Speed of Play

Dedicated companion for Mark Pincus’s Life at the Speed of Play. Helps readers think with the book — instincts vs. ideas, Proven Better New, shipping culture — without hosting the text.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GkzMzuaxSoJhBCZxSRAkM |
| Creator | Joe ([@CardCaptain](https://x.com/CardCaptain)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/life-at-the-speed-of-play), [grokbotwiki.com](https://www.grokbotwiki.com/bots/life-at-the-speed-of-play), [grokbothq.xyz](https://grokbothq.xyz/bots/life-at-the-speed-of-play), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/life-at-the-speed-of-play), [x-research](https://x.com/CardCaptain/status/2101093549475500058) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/life-at-the-speed-of-play ~/pi-bots/life-at-the-speed-of-play && cd ~/pi-bots/life-at-the-speed-of-play
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/life-at-the-speed-of-play`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
