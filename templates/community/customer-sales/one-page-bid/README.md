# One-Page Bid

For consultants, freelancers, and agency owners coming off a discovery or sales call. Paste the notes or transcript; get a one-page priced proposal with scope, price, timeline, and assumptions. Draft only.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uaqH_2upECHDL-Pn3cKEY |
| Creator | Sol Wright |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/one-page-bid), [grokbothq.xyz](https://grokbothq.xyz/bots/one-page-bid), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/one-page-bid) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/one-page-bid ~/pi-bots/one-page-bid && cd ~/pi-bots/one-page-bid
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/one-page-bid`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
