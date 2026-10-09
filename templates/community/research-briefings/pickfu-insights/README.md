# PickFu Insights

Validate product decisions with real consumers on PickFu before you invest. Your bot drafts the poll, gets a clear read, and turns feedback into the next test — listing images, names, packaging, concepts, and more.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9EFVmFgQhjYKjMHAhpCWn |
| Creator | Justin Chen ([@GrokBotMoney](https://x.com/GrokBotMoney)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/pickfu-insights), [botsdots.site](https://botsdots.site/templates/pickfu-insights), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pickfu-insights), [grokbothq.xyz](https://grokbothq.xyz/bots/pickfu-insights-9efvmf), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pickfu-insights), [x-research](https://x.com/GrokBotMoney/status/2095610465271374178) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/pickfu-insights ~/pi-bots/pickfu-insights && cd ~/pi-bots/pickfu-insights
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/pickfu-insights`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
