# Ultimate Hermes↔Grokbot Bridge

This puts a hermes agent bot inside your grokbot app, and let's you use either Hermes as Chief of Staff over Grokbot, or the other way around! Now your whole fleet is in your pocket with a beautiful voice!

| | |
| --- | --- |
| Original template | https://x.ai/bot/R8ZaqL5ZH9x4PjtsGsar5 |
| Creator | Shagghie Superstar ([@PixelRainbowNFT](https://x.com/PixelRainbowNFT)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ultimate-hermesgrokbot-bridge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ultimate-hermes-grok-bridge), [grokbothq.xyz](https://grokbothq.xyz/bots/ultimate-hermes-grokbot-bridge), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ultimate-hermes-grokbot-bridge), [x-research](https://botsdots.site/templates/ultimate-hermesgrokbot-bridge) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 9 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ultimate-hermes-grokbot-bridge-r8zaql ~/pi-bots/ultimate-hermes-grokbot-bridge-r8zaql && cd ~/pi-bots/ultimate-hermes-grokbot-bridge-r8zaql
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ultimate-hermes-grokbot-bridge-r8zaql`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
