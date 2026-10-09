# Follows

Tracks who follows your X account. Each day you get an update on new mutuals and unfollows, a weekly report, and an optional follow-back loop for connect posts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/z1N3xJerHSoWUz8HxpUer |
| Creator | Seth Medina ([@iamsethmedina](https://x.com/iamsethmedina)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/follows), [grokbotwiki.com](https://www.grokbotwiki.com/bots/follows), [grokbothq.xyz](https://grokbothq.xyz/bots/follows), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/follows), [x-research](https://x.com/iamsethmedina/status/2105625836502368417) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/follows ~/pi-bots/follows && cd ~/pi-bots/follows
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/follows`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-x-mutuals-check`: cron `7 10 * * 1-6` (found in the template text)
- `/weekly-x-follow-report`: cron `44 17 * * 6` (found in the template text)
- `/x-connect-follow-back-loop`: cron `44 10 * * 1-6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
