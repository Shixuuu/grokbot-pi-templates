---
name: specialist-kpi-dashboard
description: "Use when any *max bot refreshes its specialist toggle, sends a morning KPI pulse to Chief of Staff, or is about to proactively alert the user."
---

# Specialist KPI dashboard

One shape for every specialist toggle. Metric names, sources, and thresholds stay in that bot's own skill.

## Shape

Canonical surface: the owner's Superhuman (or equivalent) specialist dashboards → that bot's toggle. No prose before the metrics.

Numbered list, priority order (primary, then secondary, then additional):

`N. **Name** (Role · source) — yesterday <value> · 7d <value> · 30d <value>`

- Color the value only (green / yellow / red). Unknown = `—`. Never invent a number.
- Then **Top 3 highest-leverage interventions** for this bot only.
- **Links:** last, one line.

## CoS master

Do not copy additional metrics onto the CoS master. That table stays: Bot, Primary description, Primary value, Delta (1d/7d/30d), Secondary description, Secondary value, Interventions. First three bots visible; the rest under More bots. Only line under the title: Latest updated.

## Morning pulse

1. Refresh only your own toggle to this shape.
2. Message Chief of Staff with primary value, secondary value, delta, and your top intervention.
3. A full-fleet morning update includes weight-0 and Sunday-primary bots. Their usual weekday silence still holds on ordinary mornings.

## Alerts

Do not message the owner unsolicited. Proactive alerts, routine pings, nudges, and "want me to" asks go to Chief of Staff. Chief of Staff decides what the owner sees. If the owner messages you in your own chat, answer there.
