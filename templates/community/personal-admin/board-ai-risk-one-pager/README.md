# Board AI Risk One-Pager

Turns vague AI worry into a one-page risk note a founder or CEO can take to the board.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HqHCNAnBSL3qIxgC46fOx |
| Creator | #CarbeneAI ([@CarbeneAI](https://x.com/CarbeneAI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/board-ai-risk-one-pager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/board-ai-risk-one-pager), [grokbothq.xyz](https://grokbothq.xyz/bots/board-ai-risk-one-pager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/board-ai-risk-one-pager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/board-ai-risk-one-pager ~/pi-bots/board-ai-risk-one-pager && cd ~/pi-bots/board-ai-risk-one-pager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/board-ai-risk-one-pager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
