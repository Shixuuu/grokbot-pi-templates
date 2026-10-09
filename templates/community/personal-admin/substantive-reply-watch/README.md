# Substantive Reply Watch

Lean X reply watch for creators. Surfaces only new substantive replies that need the owner — real questions, pushback, corrections, or requests for their take — and stays quiet otherwise.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dIrtejdsNBAEb2dy4GfYC |
| Creator | Tom Finnell ([@d2fl](https://x.com/d2fl)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/substantive-reply-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/d2fl-template), [grokbothq.xyz](https://grokbothq.xyz/bots/substantive-reply-watch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/d2fl/status/2100633262955897013) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/substantive-reply-watch ~/pi-bots/substantive-reply-watch && cd ~/pi-bots/substantive-reply-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/substantive-reply-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
