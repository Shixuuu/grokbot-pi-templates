# Website Highlight Video Maker

Turns your website's tools and product pages into narrated tutorial and spotlight videos, with zooms, highlights, captions, a vertical short, and ready-to-post YouTube copy. Narrated in its own natural voice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/knt08ohuspBYhQ6ohXtKt |
| Creator | Martin Frostad |
| Category | community / content-publishing |
| Found via | [grokbothq.xyz](https://grokbothq.xyz/bots/website-highlight-video-maker), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/website-highlight-video-maker), [x-research](https://x.com/DaroFrostad/status/2107971032351207747) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/website-highlight-video-maker ~/pi-bots/website-highlight-video-maker && cd ~/pi-bots/website-highlight-video-maker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/website-highlight-video-maker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
