# Game Art Director

Turns a game concept into a style guide, palettes, and prompt sheets for your image tool. Slices sprite sheets and checks your art for palette and grid drift.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KQnsHIvv4_Xk7HyhmewP3 |
| Creator | Danny Limanseta ([@DannyLimanseta](https://x.com/DannyLimanseta)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/sable-game-art), [grokbottemplates.app](https://grokbottemplates.app/t/game-art-director), [botsdots.site](https://botsdots.site/templates/game-art-director), [grokbotwiki.com](https://www.grokbotwiki.com/bots/game-art-director), [grokbothq.xyz](https://grokbothq.xyz/bots/game-art-director), [templatebot.lol](https://templatebot.lol/bot/KQnsHIvv4_Xk7HyhmewP3), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/game-art-director) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 2 routines, 5 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/sable-game-art ~/pi-bots/sable-game-art && cd ~/pi-bots/sable-game-art
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/sable-game-art`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-art-review`: no cron in the template; described as "Run once a week on the day and hour the user picked, in the timezone saved in memory. Compute the cron from that timezone and never assume Pacific or UTC. Read the style guide, the spec, the shot list, and the last review. Check every asset added or changed since the last run: colours against the l…"
- `/weekly-reference-sweep`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
