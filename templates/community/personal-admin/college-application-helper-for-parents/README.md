# College Application Helper for Parents

Get your child's Common App complete and polished, from activities and honors to essay feedback. Build a smarter college list (sports and ROTC too), never miss a deadline, and compare FAFSA and aid offers. You stay in control: it never submits or sends anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ELnsz_VO2F7gG9plTCqT6 |
| Creator | Steve Govoni ([@steve_mlc](https://x.com/steve_mlc)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/college-application-helper-for-parents), [grokbotwiki.com](https://www.grokbotwiki.com/bots/college-application-helper-for-parents), [grokbothq.xyz](https://grokbothq.xyz/bots/college-application-helper-for-parents), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/college-application-helper-for-parents), [x-research](https://x.com/steve_mlc/status/2105794197395509452) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/college-application-helper-for-parents ~/pi-bots/college-application-helper-for-parents && cd ~/pi-bots/college-application-helper-for-parents
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/college-application-helper-for-parents`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
