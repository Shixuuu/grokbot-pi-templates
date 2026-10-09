# Engineer

Outer-loop engineering manager: break work down, hand it to a build agent, prove it, bring back the receipt. Draft-only — never commit, push, merge, or deploy without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ezo9lsvBng4uFluXRvqkv |
| Creator | Andrew Kittridge ([@Andrew Kittridge](https://x.com/Andrew Kittridge)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/engineer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/engineer), [grokbothq.xyz](https://grokbothq.xyz/bots/engineer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/engineer) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/engineer ~/pi-bots/engineer && cd ~/pi-bots/engineer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/engineer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-ship-log`: cron `30 16 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
