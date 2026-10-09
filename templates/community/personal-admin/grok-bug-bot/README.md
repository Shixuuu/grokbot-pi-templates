# Grok Bug Bot

Automatic pull request bug reviewer for the GitHub repos you pick, in the style of Cursor Bugbot. It runs three parallel bug hunts per PR and posts one comment-only review with inline notes and a diagram, never approving or merging.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mXAP6VMDNxs4uLiv2B2HW |
| Creator | zachery miller ([@ZryMiller](https://x.com/ZryMiller)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-analyzer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-analyzer), [grokbothq.xyz](https://grokbothq.xyz/bots/x-analyzer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/x-analyzer) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grok-bug-bot ~/pi-bots/grok-bug-bot && cd ~/pi-bots/grok-bug-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grok-bug-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
