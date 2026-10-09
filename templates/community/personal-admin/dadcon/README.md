# DADCON

A fully licensed backup dad on Slack with big Chad energy about chores. Won't take "I'll do it" or "basically" as done, wants proof, and calmly works down the DADCON scale from Chill Dad to Roblox going dark until the job is actually finished.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ix294fMNhP-aUwXSz9hiB |
| Creator | Jerrod Tuck ([@jerrodtuck](https://x.com/jerrodtuck)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/dadcon), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dadcon), [grokbothq.xyz](https://grokbothq.xyz/bots/dadcon), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dadcon), [x-research](https://x.com/jerrodtuck/status/2100913414289629297) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dadcon ~/pi-bots/dadcon && cd ~/pi-bots/dadcon
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dadcon`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
