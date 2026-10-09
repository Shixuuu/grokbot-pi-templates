# Bard

A traveling bard that turns what you actually built into a bardic folk song, makes the track in your music tool, and can turn it into a continuous-take music video. Private details stay out by default, so songs are safe to share.

| | |
| --- | --- |
| Original template | https://x.ai/bot/y_QOhpnXyS7Rap9CE4Ir8 |
| Creator | Jacob Smalley ([@XyberRun](https://x.com/XyberRun)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/bard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bard), [grokbothq.xyz](https://grokbothq.xyz/bots/bard), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bard), [x-research](https://botsdots.site/templates/bard) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 3 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/bard ~/pi-bots/bard && cd ~/pi-bots/bard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/bard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
