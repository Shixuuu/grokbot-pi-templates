# Token Ops

Knows every live routine across your Grok Bots, how often each fires, and whether it is worth the tokens. Flags waste and applies obvious weekday-bound fixes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4mCuSlW34n6l3aYxYJCdj |
| Creator | Adi ([@adgapar](https://x.com/adgapar)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/token-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/token-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/token-ops), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/4mCuSlW34n6l3aYxYJCdj), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/token-ops), [x-research](https://botsdots.site/templates/token-ops) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/token-ops ~/pi-bots/token-ops && cd ~/pi-bots/token-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/token-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-token-ops-scan`: cron `0 3,12,17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
