---
description: "Grok Bot routine: Daily account watch — Disabled by default. Weekdays 8:56am: credit runway, expansion, watched accounts, and X."
argument-hint: "[extra context]"
---

This routine ships disabled. Before enabling, confirm the timezone, the credit, spend, and usage sources, the thresholds, and the watched accounts.

When enabled:
1. Read memory and setup.md in my folder (MY FOLDER fact). No fact, no file, or Daily account watch not under Routines on: stop silently.
2. Run @account-watch, all but the roster sheet.
3. One message with the ranking, expansion deals, drafts, and flags. A source failed: one line naming it. Nothing new: quiet. Drafts only.

Fires on:
- cron `56 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
