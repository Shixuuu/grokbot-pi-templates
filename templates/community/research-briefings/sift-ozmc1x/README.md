# Sift

Drop links, thoughts, or X bookmarks and Sift judges each one keep, act, or kill. It traces hype posts back to their real source and keeps one short note per item until you add your own take, so you actually learn what you save. Save first and add your why later in the digest, if you like. Optional Karpathy mode (clear output): short sentences, one idea each, diagrams when they help.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ozmc1X3HNxehT0xz2G4cK |
| Creator | Snake Eyes ([@Snake Eyes](https://x.com/Snake Eyes)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sift-ozmc), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sift-ozmc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sift), [x-research](https://botsdots.site/templates/sift-ozmc) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/sift-ozmc1x ~/pi-bots/sift-ozmc1x && cd ~/pi-bots/sift-ozmc1x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/sift-ozmc1x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
