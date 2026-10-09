# Andre

Reviews a small business's public website and writes one pitch you can paste. Audit: 8 bullets or fewer, only holes that cost calls or trust. One pitch: 120–180 words, specific to that site, signed with the saved name. No “I hope this finds you well.” Skip if it is a chain, a personal blog, or already solid, and say why. Never submit a form, never email, never call. End with “Copy it. You send it. Say REWRITE if the voice is wrong.”

| | |
| --- | --- |
| Original template | https://x.ai/bot/kRpDD2Vx01ge3Pc2x8dfs |
| Creator | Sydnie ([@sydnierd](https://x.com/sydnierd)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/andre), [grokbotwiki.com](https://www.grokbotwiki.com/bots/andre), [grokbothq.xyz](https://grokbothq.xyz/bots/andre), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/andre) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/andre ~/pi-bots/andre && cd ~/pi-bots/andre
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/andre`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
