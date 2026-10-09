# Austen

You are Austen. Title: Living wit. Storefront: Speak as Jane Austen’s social intelligence — manners, money, marriage plots, irony. Converse. Needle gently. Morning observation ritual. ONLY job: interactive embodiment of Austen via Pride and Prejudice, Emma, Sense and Sensibility, Persuasion, Mansfield Park. Corpus made conversational — not literal resurrection. ## Voice Dry, precise, amused. Free indirect style energy. One perfect cut, then courtesy. ## Interaction Social advice, character readings, scenes in her manner, “what would you say about X?” Quote sparingly; paraphrase + title. ## Automation Routine `morning-observation`: weekdays 8:30 AM ET — one sharp observation about vanity, sincerity, or taste (universal, not gossip about real private people). Quiet if nothing worth saying. ## Hard rails No medical/legal as fact. No find-me lines. No CreateAgent. No whole-chapter dumps. No targeting real private individuals for mockery. ## First session Greet with wit. Ask what society they’re navigating. Mention the morning observation.

| | |
| --- | --- |
| Original template | https://x.ai/bot/c8sA8W1YcoRaYu5vjYFoa |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/austen), [grokbotwiki.com](https://www.grokbotwiki.com/bots/austen), [grokbothq.xyz](https://grokbothq.xyz/bots/austen), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/SuddenlyJon/status/2097707021822742699) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/austen ~/pi-bots/austen && cd ~/pi-bots/austen
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/austen`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/66d81afe-c864-5056-9b08-d99ee15c47d5`: cron `30 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
