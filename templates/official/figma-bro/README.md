# figma bro

Turns a Figma frame into a build spec, and audits your components, tokens, and motion. Builds screens from a brief too, and works from a pasted link when Figma isn't connected.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pXNvc_U2cGyZmheYrUuF_ |
| Creator | John Bai ([@johnbai](https://x.com/johnbai)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/figma-bro), [grokbottemplates.app](https://grokbottemplates.app/t/figma-bro), [botsdots.site](https://botsdots.site/templates/figma-bro-pxnv), [templatebot.lol](https://templatebot.lol/bot/pXNvc_U2cGyZmheYrUuF_), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/figma-bro) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 8 skills, 2 routines, 4 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/official/figma-bro ~/pi-bots/figma-bro && cd ~/pi-bots/figma-bro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/figma-bro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-library-check`: no cron in the template; described as "Every Monday morning, checks the component library and token set for new duplicates, detached instances, and hardcoded values, and reports only what drifted since last week."
- `/ready-for-dev-sweep`: no cron in the template; described as "Every Friday afternoon, lists the frames marked ready for dev that still have no spec, and offers to write the next one."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
