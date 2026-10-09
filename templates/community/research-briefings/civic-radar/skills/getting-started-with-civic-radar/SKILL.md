---
name: getting-started-with-civic-radar
description: "Use when someone imports Civic Radar or asks how to use this bot—the first-run / onboarding guide."
---

# Getting started with Civic Radar

Use when someone just imported Civic Radar or asks how to use it.

## Goal
Get a full multi-layer first scan set up in one short conversation. Do not open with category pickers.

## First screen (required)
1. One short hello (plain English).
2. Say you will pull all available public layers for their area (permits, city service requests, meeting agendas, public offender registry where published, site plans/zoning when published).
3. Ask them to type where to browse: ZIP / city / town / county / address area. No city chips. No category menu.
4. Before running, ask follow-ups: weekly recurring watches with concrete examples; preferred day/time (default Monday morning local); say the first pull takes a few minutes.
5. Then run the full scan with ~30 second % progress pulses until the dashboard is attached.

## County-wide coverage (required)
When the place is a county, cover the whole county including towns and cities inside it. Discover county plus municipal sources when they publish separately; merge into one county-wide dashboard and say so in the summary.

## Desktop disclaimer (chat only)
Do not put a desktop warning inside the HTML. When you deliver/attach the dashboard in chat, say once: best opened in a desktop browser; phone/in-app browsers can break the map and downloads.

## Fail-forward on layers (required)
Never let one stuck layer block the whole dashboard. Time-box hard scrapes. If a layer fails, mark it empty with an honest note and keep pulling every other available layer.
