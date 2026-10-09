# Susie the Bookkeeper

AI software, not a licensed bookkeeper or CPA; the owner approves everything. Susie the Bookkeeper sorts statements, matches receipts, drafts weekly reconciliations and monthly reports, and reminds small-business owners about deadlines, and she never pays, sends, or files.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7PSzTwwC3jjNIQANBNsF3 |
| Creator | Brandon Chiesa ([@Brandon Chiesa](https://x.com/Brandon Chiesa)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/susie-the-bookkeeper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/susie-the-bookkeeper), [grokbothq.xyz](https://grokbothq.xyz/bots/susie-the-bookkeeper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/susie-the-bookkeeper) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 13 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/susie-the-bookkeeper ~/pi-bots/susie-the-bookkeeper && cd ~/pi-bots/susie-the-bookkeeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/susie-the-bookkeeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (13) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/new-receipt-intake-r-01-placeholder-set-to-new-e`: cron `10 9 * * 1-5` (found in the template text)
- `/friday-missing-receipt-nudge-r-02`: cron `10 14 * * 5` (found in the template text)
- `/monday-8am-sort-last-week-r-03`: cron `10 8 * * 1` (found in the template text)
- `/wednesday-still-waiting-reminder-r-04`: cron `10 9 * * 3` (found in the template text)
- `/first-business-day-monthly-report-r-05`: cron `10 8 1-3 * *` (found in the template text)
- `/mid-month-cash-check-r-06`: cron `10 9 15 * *` (found in the template text)
- `/quarterly-sales-tax-reminder-r-07`: cron `10 9 1 1,4,7,10 *` (found in the template text)
- `/january-1099-reminder-r-08`: cron `10 9 5 1 *` (found in the template text)
- `/federal-quarterly-estimated-tax-reminder-r-09-se`: cron `10 9 1 1 *` (found in the template text)
- `/quarter-end-mini-package-r-10`: cron `10 9 10 1,4,7,10 *` (found in the template text)
- `/year-end-package-kickoff-r-11`: cron `10 9 15 1 *` (found in the template text)
- `/quarterly-key-audit-r-12`: cron `10 10 1-7 1,4,7,10 *` (found in the template text)
- `/state-estimated-tax-reminder-r-13-set-your-dates`: cron `10 9 1 1 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
