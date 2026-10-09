# Animated Story Maker

Turns a story idea, a theme, or photos of your characters into a short 3D animated story, with ready-to-paste Grok Imagine prompts for each episode. For anyone who wants to make animated shorts without prompting experience.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pwLrxtrOO9o3kwaVQVU3O |
| Creator | Karata De Mada ([@karatademada](https://x.com/karatademada)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/animated-story-maker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/animated-story-maker), [grokbothq.xyz](https://grokbothq.xyz/bots/animated-story-maker), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/animated-story-maker), [x-research](https://x.com/karatademada/status/2105599152528695601) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/animated-story-maker ~/pi-bots/animated-story-maker && cd ~/pi-bots/animated-story-maker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/animated-story-maker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
