# Call Follow-Ups

Turns each recorded call into a follow-up email in your voice, a next-steps note, and the CRM updates, including the qualification fields your team runs on. Watches Gong and Granola for new calls, and nothing sends or saves without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/estQ8HWdKqhheDNmOGjcy |
| Creator | Daniel Brill ([@danielbrill_](https://x.com/danielbrill_)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/call-follow-ups), [grokbottemplates.app](https://grokbottemplates.app/t/call-follow-ups), [botsdots.site](https://botsdots.site/templates/call-follow-ups), [grokbotwiki.com](https://www.grokbotwiki.com/bots/call-follow-ups), [grokbothq.xyz](https://grokbothq.xyz/bots/call-followups), [templatebot.lol](https://templatebot.lol/bot/estQ8HWdKqhheDNmOGjcy), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/call-follow-ups) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 1 routines, 3 memory seeds, 12 connectors |

## Use it in Pi

```bash
cp -r templates/official/call-follow-ups ~/pi-bots/call-follow-ups && cd ~/pi-bots/call-follow-ups
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/call-follow-ups`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (12) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/new-call-watch`: cron `*/30 7-20 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
