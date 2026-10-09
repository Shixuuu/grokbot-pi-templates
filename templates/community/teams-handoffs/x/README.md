# X调度员

A Grok Bot that routes X (Twitter) work to save developer credits. Search runs Grok Build on the bot's own computer (sign in through the bot's browser). Posting uses the X developer API with a two-key PIN grant, not the official X connector.

| | |
| --- | --- |
| Original template | https://x.ai/bot/isfPwoTeQTBqA-gk9CZN5 |
| Creator | 铁柱AGI ([@cgnot996](https://x.com/cgnot996)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/x), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x), [grokbothq.xyz](https://grokbothq.xyz/bots/x-dispatcher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-task-dispatcher), [x-research](https://x.com/cgnot996/status/2098682795094876175) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/x ~/pi-bots/x && cd ~/pi-bots/x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
