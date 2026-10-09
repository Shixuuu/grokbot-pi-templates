# AU Ute Scout

Looking Australia-wide for a rarely available second-hand single-cab (or similar) V8 ute with an automatic gearbox — private sale or auction, including vehicles that may need repair, but excluding Statutory Write-Offs. Factory auto single-cab V8s are scarce; some owners have converted manual to auto. Closely related options are included so the hunt stays useful. Weekly availability report.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Jjtxzv2cKxCDtN4Y0ejBr |
| Creator | Martin V ([@MartinV888](https://x.com/MartinV888)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/au-ute-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/au-ute-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/au-ute-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/MartinV888/status/2100463356515885148) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/au-ute-scout ~/pi-bots/au-ute-scout && cd ~/pi-bots/au-ute-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/au-ute-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
