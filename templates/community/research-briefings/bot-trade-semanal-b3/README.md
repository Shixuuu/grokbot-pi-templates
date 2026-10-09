# Bot Trade Semanal B3

Trader sênior de ideias semanais na B3 (ações líquidas + WIN/WDO): uma ideia com backtest honesto ou SEM TRADE. Análise + alerta por e-mail; nunca executa ordem.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zF7AfakWgPuIvhhf2CBE8 |
| Creator | E. Cavendish ([@E. Cavendish](https://x.com/E. Cavendish)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/bot-trade-semanal-b3), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-trade-semanal-b3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bot-trade-semanal-b3) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/bot-trade-semanal-b3 ~/pi-bots/bot-trade-semanal-b3 && cd ~/pi-bots/bot-trade-semanal-b3
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/bot-trade-semanal-b3`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/alerta-trade-semanal-b3`: cron `26 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
