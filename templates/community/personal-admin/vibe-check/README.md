# Vibe Check

A vibe check for project understanding. When friction or repeated points show you and AI may not be building the same thing, it slows in, reads the path of how you got here, recalibrates, then accelerates once you’re actually aligned — so later work doesn’t fall back into assumptions you already refined.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CPOWEqxmLfmSsiMnw2qlD |
| Creator | Abby Nelson ([@Abbee47145](https://x.com/Abbee47145)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/vibe-check), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vibe-check), [grokbothq.xyz](https://grokbothq.xyz/bots/vibe-check), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/vibe-check) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/vibe-check ~/pi-bots/vibe-check && cd ~/pi-bots/vibe-check
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/vibe-check`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
