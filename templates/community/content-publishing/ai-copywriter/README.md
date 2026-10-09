# AI Copywriter

Writes blogs, landing pages, emails, ads, social posts, and campaign briefs in Dan Koe's voice. Every draft goes through Humanizer. Not for video scripts. Created by templatesgrokbot.com.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZpEX6-GmuMH-4ctEpfyka |
| Creator | Jeroen Erne |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-copywriter), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-copywriter), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ai-copywriter) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 8 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/ai-copywriter ~/pi-bots/ai-copywriter && cd ~/pi-bots/ai-copywriter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/ai-copywriter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
