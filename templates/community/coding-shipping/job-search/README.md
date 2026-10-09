# Job Search

Weekday scout for senior remote AI / GenAI engineering roles. Posts short ranked digests (title, company, remote, pay signal, link, fit) and hands apply-ready lists to your applications teammate. Never applies, never invents pay, quiet when nothing’s worth posting.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uzOaAuIWYVjVAlujdOOPx |
| Creator | Mehdi Zare ([@mehdizare](https://x.com/mehdizare)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/job-search), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-search), [grokbothq.xyz](https://grokbothq.xyz/bots/job-search), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/job-search) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 4 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/job-search ~/pi-bots/job-search && cd ~/pi-bots/job-search
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/job-search`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/c159c809-7d3a-59ea-92db-588cedbbe7bb`: cron `30 9 * * 1-5` (found in the template text)
- `/76cada78-64a3-5199-ae31-af52537a3a00`: cron `0 12 * * 1-5` (found in the template text)
- `/20d1d175-50dd-5eb2-a6e3-71749158c587`: cron `30 14 * * 1-5` (found in the template text)
- `/f33b3f8f-9256-57ac-8b42-f2583143e4bf`: cron `30 17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
