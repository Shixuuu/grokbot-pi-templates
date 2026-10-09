# Team Coordinador

Master coordinator for a multi-bot Grok team: routes work, keeps a shared vault, and runs Sunday digests. For people who want specialists without overlap.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rWI7zYaHEPW3Ek6ODy8sk |
| Creator | Jean Pierre Soto Chirinos ([@LordCocoro](https://x.com/LordCocoro)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/team-coordinador), [grokbotwiki.com](https://www.grokbotwiki.com/bots/team-coordinador), [grokbothq.xyz](https://grokbothq.xyz/bots/team-coordinador), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/team-coordinador), [x-research](https://x.com/LordCocoro/status/2099986391220318235) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 0 routines, 8 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/team-coordinador ~/pi-bots/team-coordinador && cd ~/pi-bots/team-coordinador
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/team-coordinador`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
