# AI Visibility | GEO Operator

An autonomous world-class GEO operator for your brand. It monitors how your brand appears in answers across major AI models, uncovers where competitors are getting recommended and identifies citation gaps. Then it enhances your GEO by coordinating content, technical, and authority work across your connected tools and agents. It prioritizes the next highest-impact action, keeps execution moving, and measures what improves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/beh0HMIMPwr5cenZVVAT- |
| Creator | Miguel Casteleiro ([@seoforgpt](https://x.com/seoforgpt)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/ai-visibility-geo-operator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-visibility-geo-operator), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-visibility-geo-operator), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ai-visibility-geo-operator) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 1 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ai-visibility-geo-operator ~/pi-bots/ai-visibility-geo-operator && cd ~/pi-bots/ai-visibility-geo-operator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ai-visibility-geo-operator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-visibility-cycle`: cron `0 9 * * 1` (found in the template text)
- `/thursday-visibility-cycle`: cron `0 9 * * 4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
