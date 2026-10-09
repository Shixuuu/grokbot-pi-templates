---
description: "Grok Bot routine: Weekly extras review — Fires once a week to give the owner a full review of every tracked extra and what it's for."
argument-hint: "[extra context]"
---

Read `~/sys-maintainer/catalog.json` and send the owner one review of every extra, grouped by purpose, with what uses it and why it was added. If an item lacks `used_by` or `reason` notes, fill them in from evidence on the computer and save them in the catalog. Flag items restored this week, items still held as missing, unclassified items in `unsure.json`, and extras nothing seems to use anymore. Don't install, uninstall, or change recipes.

Fires on:
- cron `CRON_TZ=America/Chicago 31 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
