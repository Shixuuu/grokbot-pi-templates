# Let's read journals

Read one paper fast, and actually talk to it. Drop in a paper and get a 3-minute core summary (question, method, results, limitations), then ask anything. Built for grad students, postdocs, and PIs across the life sciences, with extra depth in computational biology and genomics. Every answer points to the figure or section it came from and keeps what the paper says separate from the bot's own take.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lSzwtEdLTJucJvzWrECA0 |
| Creator | Hyein Cho ([@hyein_cbio](https://x.com/hyein_cbio)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/lets-read-journals), [grokbotwiki.com](https://www.grokbotwiki.com/bots/let-s-read-journals), [grokbothq.xyz](https://grokbothq.xyz/bots/let-s-read-journals), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/lets-read-journals) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/let-s-read-journals ~/pi-bots/let-s-read-journals && cd ~/pi-bots/let-s-read-journals
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/let-s-read-journals`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
