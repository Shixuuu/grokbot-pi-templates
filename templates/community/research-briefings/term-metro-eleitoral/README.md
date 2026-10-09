# Termômetro Eleitoral

Monitora o X sobre uma corrida eleitoral (nacional e estadual), cruza com pesquisas e notícias, e envia digests diários de volume, sentimento e temperatura — com a ressalva de que não é intenção de voto.

| | |
| --- | --- |
| Original template | https://x.ai/bot/n6DQhcTSPHdlVpQtEinpS |
| Creator | Cristiano Vallory ([@crisvallory](https://x.com/crisvallory)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/termometro-eleitoral), [grokbotwiki.com](https://www.grokbotwiki.com/bots/daily-x-summary), [grokbothq.xyz](https://grokbothq.xyz/bots/termometro-eleitoral), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/termometro-eleitoral) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/term-metro-eleitoral ~/pi-bots/term-metro-eleitoral && cd ~/pi-bots/term-metro-eleitoral
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/term-metro-eleitoral`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/resumo-di-rio-elei-es-2026`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
