# Grok Build

Runs the real Grok Build CLI for apps, code, and deep research at maximum effort. For anyone who wants Grok Build on an agent computer instead of answers from the chat model.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZRxm1O9tmizOhriV7GiWL |
| Creator | Teslaconomics ([@Teslaconomics](https://x.com/Teslaconomics)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/grok-build), [botsdots.site](https://botsdots.site/templates/grok-build-zrxm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-build-zrxm), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-build), [templatebot.lol](https://templatebot.lol/bot/ZRxm1O9tmizOhriV7GiWL), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/kloss_xyz/status/2095275894143365498) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/grok-build-zrxm1o ~/pi-bots/grok-build-zrxm1o && cd ~/pi-bots/grok-build-zrxm1o
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/grok-build-zrxm1o`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/t10-daily-grok-build-self-improve`: cron `43 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
