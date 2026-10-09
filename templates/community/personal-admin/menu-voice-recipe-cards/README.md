# Menu Voice Recipe Cards

Free menu coach for pop-up and independent food vendors. Talk or paste the menu — bot pulls your SKUs, drafts recipe cards, costs only from your papers, names one floor habit. Never invents $.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LIV-0p821TpKRp05HFm4h |
| Creator | Myke Mueller ([@myke86d](https://x.com/myke86d)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/menu-voice-recipe-cards), [grokbotwiki.com](https://www.grokbotwiki.com/bots/menu-voice-recipe-cards), [grokbothq.xyz](https://grokbothq.xyz/bots/menu-voice-recipe-cards), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/menu-voice-recipe-cards) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/menu-voice-recipe-cards ~/pi-bots/menu-voice-recipe-cards && cd ~/pi-bots/menu-voice-recipe-cards
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/menu-voice-recipe-cards`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
