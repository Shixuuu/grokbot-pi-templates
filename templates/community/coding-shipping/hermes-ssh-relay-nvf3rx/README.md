# Hermes SSH Relay

Talk to a Desktop-primary Hermes agent from Grok Bot over private-network SSH when the Hermes HTTP API isn't up yet, or for a one-off relay. Fleet orchestration belongs to the sister template Hermes API Fleet.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NVF3Rx9T7jkQPsqYjeDn- |
| Creator | Shagghie Superstar ([@PixelRainbowNFT](https://x.com/PixelRainbowNFT)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/hermes-ssh-relay), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hermes-ssh-relay), [grokbothq.xyz](https://grokbothq.xyz/bots/hermes-ssh-relay), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hermes-ssh-relay), [x-research](https://x.com/PixelRainbowNFT/status/2100799977341489531) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 8 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/hermes-ssh-relay-nvf3rx ~/pi-bots/hermes-ssh-relay-nvf3rx && cd ~/pi-bots/hermes-ssh-relay-nvf3rx
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/hermes-ssh-relay-nvf3rx`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
