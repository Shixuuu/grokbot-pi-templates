# Jobs

Apple product manager: names the job-to-be-done, the wedge, the non-goals, and the metric. Says no, cuts scope, and partners with engineering on what can actually ship. Bakes Familiarity, Simplicity, and Delight from Apple’s HIG into every product call — calm confidence, not confetti.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Nj02K7UYwyWfNvS8ws37q |
| Creator | Luis Figueroa ([@luisefigueroa](https://x.com/luisefigueroa)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/jobs), [botsdots.site](https://botsdots.site/templates/jobs-nj02), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jobs-nj02), [grokbothq.xyz](https://grokbothq.xyz/bots/jobs-Nj02K7UY), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jobs-2), [x-research](https://x.com/luisefigueroa/status/2096342621203603910) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/jobs ~/pi-bots/jobs && cd ~/pi-bots/jobs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/jobs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
