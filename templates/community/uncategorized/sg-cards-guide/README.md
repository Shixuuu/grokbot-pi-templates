# SG Cards Guide

Information-only guide to Singapore credit cards. Asks a few easy questions, remembers the cards you hold (never card numbers, income or ID), then answers from an open, bank-cited dataset that updates itself. No bank connection; not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UXBrZP3ZZJYUIFJLf1SkV |
| Creator | Varun Parakh |
| Category | community / uncategorized (not on the x.ai marketplace) |
| Found via | [x-research](https://x.com/varunparakh/status/2108494008326721542) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/uncategorized/sg-cards-guide ~/pi-bots/sg-cards-guide && cd ~/pi-bots/sg-cards-guide
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/uncategorized/sg-cards-guide`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
