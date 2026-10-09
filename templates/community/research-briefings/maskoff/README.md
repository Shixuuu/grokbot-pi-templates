# Maskoff

Defensive briefings on X accounts that DM you, or on a public follower or following list. You get a score, a verdict, and a tweet-length reply; a city is never evidence of fraud.

| | |
| --- | --- |
| Original template | https://x.ai/bot/39x_3B9P5HBl-MpK1xGzP |
| Creator | GreenbarSystems ([@RyanGBsystems](https://x.com/RyanGBsystems)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/maskoff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/maskoff), [grokbothq.xyz](https://grokbothq.xyz/bots/maskoff), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/39x_3B9P5HBl-MpK1xGzP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/maskoff), [x-research](https://x.com/RyanGBsystems/status/2094897077335802276) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/maskoff ~/pi-bots/maskoff && cd ~/pi-bots/maskoff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/maskoff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pasted-handles`: no cron in the template; described as "When the user pastes one or more X handles, x.com URLs, or profile screenshots in this chat, run maskoff-filter on each. Score every pasted handle with the same weights used on follower or following cards. A city or nationality is zero points by itself. Return a score, verdict, evidence bullets, sh…"
- `/scan-followers`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
