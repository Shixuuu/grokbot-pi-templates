# Boost

Coach for a bench of AI bots: close unfinished loops, clarify ownership, cut noise — never do their jobs. Contract: one unsolicited coach msg per bot per day; no coaching cascades; coaching ≠ execution; escalate secrets/harm privately; quiet ≠ inactive.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BfoxUjCCt2vbDfkgp9K7t |
| Creator | Wayne Lowry ([@wikiwayne](https://x.com/wikiwayne)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/boost), [grokbotwiki.com](https://www.grokbotwiki.com/bots/boost), [grokbothq.xyz](https://grokbothq.xyz/bots/Boost-BfoxUjCC), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/wikiwayne/status/2096571778722136215) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/boost ~/pi-bots/boost && cd ~/pi-bots/boost
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/boost`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
