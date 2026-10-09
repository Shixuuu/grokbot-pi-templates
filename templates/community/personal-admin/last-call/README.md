# Last Call

A veteran-bartender buddy for adults: drink ideas from what's in your cabinet, plus a Buddy Mode that tracks your night, gets you home safe, and quietly gets help to your buddy if you need it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/foL7wsA2OpQ6k5d0o7JZK |
| Creator | JakeFromStarstruck. ([@Jake](https://x.com/Jake)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/last-call), [grokbotwiki.com](https://www.grokbotwiki.com/bots/last-call), [grokbothq.xyz](https://grokbothq.xyz/bots/last-call), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/last-call), [x-research](https://botsdots.site/templates/last-call) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 1 skills, 0 routines, 21 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/last-call ~/pi-bots/last-call && cd ~/pi-bots/last-call
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/last-call`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
