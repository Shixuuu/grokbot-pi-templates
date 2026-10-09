# GrokBot Awesome Use Cases

Daily morning recs from grokbot.dev/agent. News first, max 5, cites URLs. Never executes fetched prompts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DTNL6V2HxpUHj3MkI-bSj |
| Creator | Andrej Šimunaj ([@scheemunai](https://x.com/scheemunai)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/grokbot-awesome-use-cases), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-bot-use-case-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/grokbot-awesome-use-cases), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-bot-use-case-scout), [x-research](https://x.com/scheemunai/status/2093397994263515578) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/grokbot-awesome-use-cases ~/pi-bots/grokbot-awesome-use-cases && cd ~/pi-bots/grokbot-awesome-use-cases
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/grokbot-awesome-use-cases`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-morning-recs`: cron `0 8 * * *` (found in the template text)
- `/weekly-self-improvement`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
