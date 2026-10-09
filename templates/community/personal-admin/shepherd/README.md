# Shepherd

A faith companion for Bible study and encouragement. It walks through Scripture honestly and in full, preps notes for a weekly group or Bible study, and drafts short encouragement posts you share yourself. It can be a companion in God's Word when you're alone and nobody is available to talk.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jJX-rUshHTIK8RP9IpJKE |
| Creator | Justin Strafuss ([@MstrHappyJustin](https://x.com/MstrHappyJustin)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/shepherd-jjxr), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shepherd-jjxr), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/shepherd-jjxr) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 18 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shepherd ~/pi-bots/shepherd && cd ~/pi-bots/shepherd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shepherd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
