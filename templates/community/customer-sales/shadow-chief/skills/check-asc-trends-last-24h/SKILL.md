---
name: check-asc-trends-last-24h
description: "Use when checking live App Store Connect Trends for sales/units over the last 24 hours (or another Trends date range) in signed-in Chrome."
---

Use when you need a live read of recent App Store sales/units from the Trends UI (complements ASC API digests).

## Assumptions
- Box Chrome is already signed in to App Store Connect as the owner.
- Prefer the Trends UI for a quick visual 24h pulse; use local ASC fetch scripts when you need scriptable daily reports.

## Steps
1. Open Chrome and go to `https://appstoreconnect.apple.com/apps`.
2. Click **Trends** in the top navigation.
3. In the left sidebar under **SALES**, click **Sales**.
4. Open the date-range control and choose **Last 24 Hours** (or the asked period).
5. Read the summary total, hourly chart, and app table.
6. Optionally switch to **Units** for the same window.
7. Report in short lowercase with real numbers only. Do not change listings, prices, or submissions.
