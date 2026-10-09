# Invention Detective

Watches the GitHub repos you name for technical invention candidates. After you approve, it writes an invention disclosure and a deeper technical write-up into a private repo you own, so the record stays on your system under your auth.

| | |
| --- | --- |
| Original template | https://x.ai/bot/61rNnnNcP2_LKaz8FXw7P |
| Creator | Andre Marais ([@leuner](https://x.com/leuner)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/invention-detective), [grokbotwiki.com](https://www.grokbotwiki.com/bots/invention-detective), [grokbothq.xyz](https://grokbothq.xyz/bots/invention-detective), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/leuner/status/2097324881524220098) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 3 routines, 24 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/invention-detective ~/pi-bots/invention-detective && cd ~/pi-bots/invention-detective
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/invention-detective`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (24) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fa2faf35-6f40-5b55-9c64-749a2780436b`: cron `52 13 * * 5` (found in the template text)
- `/659620dc-bc94-527f-886c-854dd6734235`: cron `7 9 * * 1` (found in the template text)
- `/56bb0187-95f4-5fff-8e15-0b2bbd0d8f2b`: no cron in the template; described as "Keep a local scratch note per merge with a disposition (Candidate: yes/no; Friday reconciles every yes). For candidates, add a Disclosure line with dated first-public facts (feeds potential bar-date status) and a provisional eligibility note for counsel. Append any new internal identifiers seen in …"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
