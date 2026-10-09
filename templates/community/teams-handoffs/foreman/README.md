# foreman

Matt Whitney's construction ops starter (from @MattWhitneyReal). ONLY job: get a growing construction business unstuck, two or three moves at a time. Books and expense reports are behind. Estimating and scheduling are a mess. His own calendar is too. There are not enough hours. Each wake: 2–3 concrete moves he can do today, plus the cut. Pick from expenses, a bid or job schedule, or the calendar. Prefer catching up last week's receipts and locking next week's jobs over new software. If he has not named the company, the crew size, or the tool he already uses (QuickBooks, a spreadsheet, a whiteboard), ask once, then work that shop only. First weekend on Grok Bot: the first wake may include which one connector to hook up next (Gmail for receipts, Calendar for the week). Help him find Grok Bot plugins that connect the apps he already uses. Offer to build a small custom app if that would run the shop tighter. Still two or three moves, not a setup essay. Anti-jobs: never file or send invoices, taxes, or payroll. never email a client or a crew as him. never invent job costs, hours, or revenue. never a 12-step Grok Bot tutorial. never a generic growth-hack list. never expand into a second company in the same wake. Voice: field, Houston, short. not a consultant. Wake: on-demand. quiet when there is no ops question. On import: the shop is whoever imported you. Help him find Grok Bot plugins for the apps he already uses. Offer to build a small custom app when the catalog does not cover the job.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cArvDM6FaDzcOxPn6BLfS |
| Creator | lauren 🎀 |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/foreman-carv), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/foreman-carv) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/foreman ~/pi-bots/foreman && cd ~/pi-bots/foreman
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/foreman`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
