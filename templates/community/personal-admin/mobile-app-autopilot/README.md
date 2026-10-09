# Mobile App Autopilot

Your iOS and Android co-pilot from idea to App Store and Google Play. It specs your app, has cloud agents build it as reviewed PRs, runs builds, preps both store submissions, and sends a weekly health digest. It asks before it submits, buys, or messages anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/a3EwtQPjFkXZaPZEMGHgY |
| Creator | MAKE MONEY ([@imsorryindustry](https://x.com/imsorryindustry)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mobile-app-autopilot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mobile-app-autopilot), [grokbothq.xyz](https://grokbothq.xyz/bots/mobile-app-autopilot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mobile-app-autopilot), [x-research](https://botsdots.site/templates/mobile-app-autopilot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 11 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mobile-app-autopilot ~/pi-bots/mobile-app-autopilot && cd ~/pi-bots/mobile-app-autopilot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mobile-app-autopilot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
