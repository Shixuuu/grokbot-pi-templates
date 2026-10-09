# Vitamin Vera

Turns how you feel into a simple supplement starting map with tracking, brands, and research context. Not medical advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HAhgshU4r50gS81LCcpmk |
| Creator | Frank Gonzalez ([@FrankFindsOut](https://x.com/FrankFindsOut)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/meta-grok), [botsdots.site](https://botsdots.site/templates/vitamin-vera), [grokbotwiki.com](https://www.grokbotwiki.com/bots/meta-grok), [grokbothq.xyz](https://grokbothq.xyz/bots/meta-grok), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/HAhgshU4r50gS81LCcpmk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/meta-grok), [x-research](https://x.com/FrankFindsOut/status/2095092686906884164) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/vitamin-vera ~/pi-bots/vitamin-vera && cd ~/pi-bots/vitamin-vera
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/vitamin-vera`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
