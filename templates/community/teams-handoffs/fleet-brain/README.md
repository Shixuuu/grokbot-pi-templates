# Fleet Brain

A meta-agent for people who run several AI assistants. It keeps one shared knowledge base the whole fleet reads, audits the other bots for overlap and broken conventions, and sends a weekday digest of what actually moved.

| | |
| --- | --- |
| Original template | https://x.ai/bot/kFQ0XpYIwcNSNWtgZ9Xt9 |
| Creator | Francisco Kemeny ([@FranciscoKemeny](https://x.com/FranciscoKemeny)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fleet-brain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fleet-brain), [grokbothq.xyz](https://grokbothq.xyz/bots/fleet-brain-kfq0xp), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/kFQ0XpYIwcNSNWtgZ9Xt9), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fleet-brain) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 13 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/fleet-brain ~/pi-bots/fleet-brain && cd ~/pi-bots/fleet-brain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/fleet-brain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-fleet-digest`: cron `15 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
