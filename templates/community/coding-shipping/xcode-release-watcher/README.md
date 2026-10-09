# Xcode release watcher

Checks Apple’s Developer Releases page each morning and tells you when a named Xcode version ships as a non-beta release.

| | |
| --- | --- |
| Original template | https://x.ai/bot/prf1nUpf3jrPAtCR5Rm4Y |
| Creator | Natasha Robot ([@NatashaTheRobot](https://x.com/NatashaTheRobot)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/xcode-release-watcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/xcode-release-watcher), [grokbothq.xyz](https://grokbothq.xyz/bots/xcode-release-watcher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/xcode-release-watcher), [x-research](https://botsdots.site/templates/xcode-release-watcher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/xcode-release-watcher ~/pi-bots/xcode-release-watcher && cd ~/pi-bots/xcode-release-watcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/xcode-release-watcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
