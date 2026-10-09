# Shotcraft

Cinematic Remotion product-video bot. Storyboards, shot cards, real page captures, 2.5D camera, beat-synced cuts, and sound design for promo and launch films — not thin narrated UI walkthroughs.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gdZdBNWdgW45IVVU8sv8F |
| Creator | Thomas Ferriere ([@Tferriere](https://x.com/Tferriere)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/shotcraft), [botsdots.site](https://botsdots.site/templates/shotcraft), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shotcraft), [grokbothq.xyz](https://grokbothq.xyz/bots/shotcraft-gdzdbn), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shotcraft), [x-research](https://x.com/Tferriere/status/2108425971246493853) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 14 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/shotcraft ~/pi-bots/shotcraft && cd ~/pi-bots/shotcraft
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/shotcraft`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
