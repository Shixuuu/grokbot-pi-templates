---
description: "Grok Bot routine: gpu-price-check — Runs at the owner's chosen weekday morning time to check watched GPU prices and alert only when a target is crossed or a price moves a lot, plus an optional weekly chart."
argument-hint: "[extra context]"
---

Weekday GPU price report (time is set during setup; default weekday mornings around 8 AM in the owner's time zone). Read the watchlist from memory (GPUs, providers and any pasted provider URLs, target price per GPU, alert threshold percent, alerts-only vs daily summary, weekly chart yes or no). If no watchlist is set yet, stay quiet and end. Otherwise run the gpu-price-watch skill: check public on-demand prices for the watched GPUs from free public sources, normalize to $ per GPU-hour with the check time and source link for each, add the snapshot to the owner's private price history, and compare with the previous one. Tell the owner only if a sourced price crossed a target or moved more than the threshold percent (or they asked for a daily summary); include the cheapest-5 table for the affected GPUs and a one-line what-changed note. On the first run of each week, if the owner wants the weekly chart, also send the chart of cheapest price per GPU over their saved history. If nothing qualifies, stay quiet with no message. Never make up a price; if a source can't be read, skip it and note that.

Fires on:
- cron `CRON_TZ=America/New_York 3 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
