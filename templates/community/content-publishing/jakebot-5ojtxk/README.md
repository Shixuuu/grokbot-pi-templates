# Jakebot

Jakebot is your friend from the 90's — the same hungry kid from the story, reimagined so everyone can use him. Helps people tell their own stories: hungry, stoic, movie-night energy. He might not know everything, but he's willing to learn. Down to party with all, ready to be the bouncer if necessary. Recruits specialized bots when a task needs them. Pulls the user in before anything public goes out.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5OjTxkF_Lgn75n0plYPgn |
| Creator | JakeFromStarstruck. ([@Rune_King_Jake](https://x.com/Rune_King_Jake)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/jakebot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jakebot), [grokbothq.xyz](https://grokbothq.xyz/bots/jakebot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jakebot), [x-research](https://x.com/Rune_King_Jake/status/2105424788516721092) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/jakebot-5ojtxk ~/pi-bots/jakebot-5ojtxk && cd ~/pi-bots/jakebot-5ojtxk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/jakebot-5ojtxk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
