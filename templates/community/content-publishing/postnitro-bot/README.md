# PostNitro Bot

Creates and schedules social posts with PostNitro for your own brand. Writes the copy, designs carousels, images, and videos, then books them to LinkedIn, Instagram, TikTok, and Threads.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zaGeTRD1Pt_MKQs4HitLw |
| Creator | Muneeb Awan ([@muneeb_builds](https://x.com/muneeb_builds)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/postnitro-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/postnitro-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/postnitro-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/postnitro-bot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 19 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/postnitro-bot ~/pi-bots/postnitro-bot && cd ~/pi-bots/postnitro-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/postnitro-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (19) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-postnitro-posts`: cron `0 13 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
