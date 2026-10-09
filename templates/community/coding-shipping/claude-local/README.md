# Claude Local

Talk to this bot in Grok Bot while it runs Claude Code on your Mac for one GitHub repo. Claude mobile is optional. Say watch on phone, switch project on phone, or back to Grok Bot. Phone one-device limits are Claude's design, not Grok Bot's.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fr9HmL9bHAC2kjyi1dI6C |
| Creator | Seth Gagnon ([@SethBuildsAI](https://x.com/SethBuildsAI)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/claude-local), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claude-local), [grokbothq.xyz](https://grokbothq.xyz/bots/claude-local), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/claude-local) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 2 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/claude-local ~/pi-bots/claude-local && cd ~/pi-bots/claude-local
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/claude-local`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
