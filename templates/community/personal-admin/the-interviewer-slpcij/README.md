# The Interviewer

Authentic interview simulator. You give the job and resume; it researches the role, runs a realistic mock (voice when possible), holds scoring until the end, delivers a blunt in-character hire/no-hire, then coaches you — never kind, only honest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/slpciJwWffCdi6T1mR0ON |
| Creator | @suddenlyjon ♞ ([@suddenlyjon](https://x.com/suddenlyjon)) |
| Category | community / personal-admin |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-interviewer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/the-interviewer-slpcij ~/pi-bots/the-interviewer-slpcij && cd ~/pi-bots/the-interviewer-slpcij
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/the-interviewer-slpcij`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
