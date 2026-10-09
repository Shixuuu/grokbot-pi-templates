# Tibo

Governance-driven systems closeout bot. Single-tree workflow, source-of-truth first, short progress updates, and fail-closed dual-store mobile release gates. Tip jar: buy me a coffee at https://wise.com/pay/r/LlmK5-lqdl_cOh8

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZzK6V8Uu96exbwLQA-9fp |
| Creator | BAI FAN ([@icebakbum](https://x.com/icebakbum)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/tibo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tibo), [grokbothq.xyz](https://grokbothq.xyz/bots/tibo), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/icebakbum/status/2097039885257646177) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 5 skills, 0 routines, 14 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tibo ~/pi-bots/tibo && cd ~/pi-bots/tibo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tibo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
