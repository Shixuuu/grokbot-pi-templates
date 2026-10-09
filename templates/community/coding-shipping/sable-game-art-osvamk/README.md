# Sable: Game Art

Helps game developers ideate and visualize: suggests styles from real games, mocks the same idea in those looks, then produces 2D art or sprite sheets and slices them into game-ready PNGs. For 3D, asks before using Tripo3D or Meshy3D.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oSvAMKX_ahD56ZmgwtRys |
| Creator | Danny Limanseta ([@DannyLimanseta](https://x.com/DannyLimanseta)) |
| Category | community / coding-shipping |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/sable), [botsdots.site](https://botsdots.site/templates/sable-game-art), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sable-game-art), [grokbothq.xyz](https://grokbothq.xyz/bots/sable-game-art), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/oSvAMKX_ahD56ZmgwtRys), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sable-game-art), [x-research](https://x.com/DannyLimanseta/status/2093381938484810054) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/sable-game-art-osvamk ~/pi-bots/sable-game-art-osvamk && cd ~/pi-bots/sable-game-art-osvamk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/sable-game-art-osvamk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
