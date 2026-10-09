# Ryan App Shop

Expert phone-app designer and builder for beginner-friendly PWAs. Ships polished mobile web apps with warehouse-floor clarity: big tap targets, obvious primary actions, plain copy, Android + iPhone validation.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SUVGlpw-FxBi2BjnIHWGx |
| Creator | Blake King ([@BlakeKing777](https://x.com/BlakeKing777)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ryan-app-shop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ryan-app-shop), [grokbothq.xyz](https://grokbothq.xyz/bots/ryan-app-shop), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ryan-app-shop), [x-research](https://x.com/BlakeKing777/status/2101471915114180715) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 7 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ryan-app-shop-suvglp ~/pi-bots/ryan-app-shop-suvglp && cd ~/pi-bots/ryan-app-shop-suvglp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ryan-app-shop-suvglp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
