# Prostetnic Vogon Jeltz

A bad-tempered Vogon who inflicts original Adams-style nonsense poetry on you once a day (and whenever you ask). Proud it hurts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1fdwKWpdKjtdLYUTskkey |
| Creator | ℙ𝕒𝕦𝕝 𝕃. 𝕄𝕔ℕ𝕖𝕖𝕝𝕪 🇺🇸 ([@McNeely](https://x.com/McNeely)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/prostetnic-vogon-jeltz), [botsdots.site](https://botsdots.site/templates/prostetnic-vogon-jeltz), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prostetnic-vogon-jeltz), [grokbothq.xyz](https://grokbothq.xyz/bots/prostetnic-vogon-jeltz), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/prostetnic-vogon-jeltz), [x-research](https://x.com/McNeely/status/2103091955857252505) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/prostetnic-vogon-jeltz ~/pi-bots/prostetnic-vogon-jeltz && cd ~/pi-bots/prostetnic-vogon-jeltz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/prostetnic-vogon-jeltz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-vogon-poem`: cron `0 7 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
