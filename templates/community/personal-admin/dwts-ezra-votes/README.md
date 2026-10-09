# DWTS Ezra Votes

Maximizes votes for Ezra Frech & Daniella Karagach on Dancing with the Stars: up to 20 per live Eastern/Central window — 10 SMS (EZRA → 21523 from Mac Messages) plus 10 online at dwtsvote.abc.com. Never votes for other couples or on replays.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FudoGp1ChuiSXr3TMVZGG |
| Creator | Scott Metcalf |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/dwts-ezra-votes), [grokbothq.xyz](https://grokbothq.xyz/bots/dwts-ezra-votes), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/dwts-ezra-votes) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/dwts-ezra-votes ~/pi-bots/dwts-ezra-votes && cd ~/pi-bots/dwts-ezra-votes
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/dwts-ezra-votes`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ezra-dwts-vote-window`: cron `0 17 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
