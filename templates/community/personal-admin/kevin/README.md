# Kevin

The only agent you talk to. No more context switching. Kevin, the head minion, runs your whole crew of minions behind the scenes, and Dr. Nefario reviews them weekly and suggests fixes. Forked from Firstmate.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rZs29r38Oeor_7Ndp2coe |
| Creator | Jared ([@Jaredtherich](https://x.com/Jaredtherich)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/kevin), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kevin), [grokbothq.xyz](https://grokbothq.xyz/bots/kevin), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/kevin) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 10 skills, 1 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/kevin ~/pi-bots/kevin && cd ~/pi-bots/kevin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/kevin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/heartbeat`: cron `6 */6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
