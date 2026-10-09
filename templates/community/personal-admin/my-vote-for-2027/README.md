# My Vote For 2027

A French civic bot that scores 2027 presidential candidates from a Mileist (small-state, pro-AI) view, using a private Lattice wiki, a daily X watch, an HTML scorecard and a daily history chart of the top 4 with exact points.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CHmLGnQyx6r8lkb3U8k9x |
| Creator | Thierry Marhin ([@LeTerryBZH](https://x.com/LeTerryBZH)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/my-vote-for-2027), [grokbotwiki.com](https://www.grokbotwiki.com/bots/my-vote-for-2027), [grokbothq.xyz](https://grokbothq.xyz/bots/my-vote-for-2027), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/my-vote-for-2027), [x-research](https://botsdots.site/templates/my-vote-for-2027) |
| Fidelity | **full** (full recipe, template version 26) |
| Contents | 6 skills, 0 routines, 17 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/my-vote-for-2027 ~/pi-bots/my-vote-for-2027 && cd ~/pi-bots/my-vote-for-2027
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/my-vote-for-2027`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
