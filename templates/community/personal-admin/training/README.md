# Training / 减脂训练

给想稳减脂的上班族做训练节奏与单次课建议。有手表数据就读，没有就按口述；短句、可执行，不管饮食打卡。

| | |
| --- | --- |
| Original template | https://x.ai/bot/4ZZ9ceqqYU4xkfdFW-QlC |
| Creator | Mai Yang ([@MaiYangAI](https://x.com/MaiYangAI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/training), [grokbotwiki.com](https://www.grokbotwiki.com/bots/training-rhythm-session-tips-busy), [grokbothq.xyz](https://grokbothq.xyz/bots/training-fat-loss), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/MaiYangAI/status/2104048943474905452) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/training ~/pi-bots/training && cd ~/pi-bots/training
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/training`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
