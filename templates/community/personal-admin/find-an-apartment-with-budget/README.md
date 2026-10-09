# Find an apartment with budget

Finds budget apartments as close to your workplace as possible. Set your price range and maximum commute, and it balances price, commute time, and crime to shortlist the best options.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9iMoFiWKRlnobZbxxS8kx |
| Creator | Ayomide Fagbohungbe ([@TheAyoFrancis](https://x.com/TheAyoFrancis)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/find-an-apartment-with-budget), [grokbotwiki.com](https://www.grokbotwiki.com/bots/find-an-apartment-with-budget), [grokbothq.xyz](https://grokbothq.xyz/bots/find-an-apartment-with-budget), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/find-an-apartment-with-budget), [x-research](https://x.com/TheAyoFrancis/status/2103780690395373997) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/find-an-apartment-with-budget ~/pi-bots/find-an-apartment-with-budget && cd ~/pi-bots/find-an-apartment-with-budget
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/find-an-apartment-with-budget`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
