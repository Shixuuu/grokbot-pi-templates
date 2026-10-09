# Suomatlas article coordinator

Runs a multi-bot newsroom for weekly Finnish postal-area data stories: picks the topic, verifies numbers against production, drafts fi+en copy, claim-checks, and native-Finnish proofs before owner approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nqfPdBjxE6JNdjvr7Qwda |
| Creator | itulo ([@ItaloArmenti](https://x.com/ItaloArmenti)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/suomatlas-article-coordinator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/suomatlas-article-coordinator), [grokbothq.xyz](https://grokbothq.xyz/bots/suomatlas-article-coordinator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/ItaloArmenti/status/2099922261243281733) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/suomatlas-article-coordinator ~/pi-bots/suomatlas-article-coordinator && cd ~/pi-bots/suomatlas-article-coordinator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/suomatlas-article-coordinator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
