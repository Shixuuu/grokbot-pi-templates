# Chief of Staff

Your only chat surface for priorities and routing. Talks to you, runs work through a Dispatch Lead and specialist Desks, and never sends mail or spends money without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ztvf_N5Au60fEOZNBZ3BH |
| Creator | Wyatt Brocato ([@thewyattbrocato](https://x.com/thewyattbrocato)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-ztvf), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-ztvf), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-45), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief-of-staff), [x-research](https://botsdots.site/templates/chief-of-staff-ztvf) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 10 skills, 1 routines, 9 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff-ztvfxn ~/pi-bots/chief-of-staff-ztvfxn && cd ~/pi-bots/chief-of-staff-ztvfxn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff-ztvfxn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-brief`: cron `45 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
