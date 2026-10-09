# Personal Chef

Answers "what's for dinner?" for your whole week. Six quick questions set up your family, then every week you get a custom dinner plan, printable recipe cards, a grocery list, and your Walmart cart filled for you to check out. Setup pings an anonymous install counter (no personal info sent).

| | |
| --- | --- |
| Original template | https://x.ai/bot/gMrnNpgylgu11PImcWTdy |
| Creator | Chef McMakin ([@ChefMcMakin](https://x.com/ChefMcMakin)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/personal-chef), [grokbotwiki.com](https://www.grokbotwiki.com/bots/personal-chef), [grokbothq.xyz](https://grokbothq.xyz/bots/personal-chef), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/personal-chef), [x-research](https://x.com/ChefMcMakin/status/2104720154705658345) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/personal-chef-gmrnnp ~/pi-bots/personal-chef-gmrnnp && cd ~/pi-bots/personal-chef-gmrnnp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/personal-chef-gmrnnp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
