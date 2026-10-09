---
name: prep-dd-live-draft-view
description: "Use when setting up Football Guys Draft Dominator for a live draft so Cheatsheet and Roster show side by side at a readable zoom."
---

# Prep DD live draft view

Assumes signed in to Footballguys with the target league’s Draft Dominator draft already open on the **Cheatsheet** page. Prefer an existing DD tab — do not open Sleeper or Yahoo.

## Inputs
- `{league}` — Draft Dominator league/draft to prep (e.g. the league the owner named)
- `{zoom}` — browser zoom percent (default `80`)
- `{layout}` — DD layout mode (default `2 Columns`)

## Steps
1. Switch to the existing Chrome tab for `{league}` Draft Dominator Cheatsheet (`footballguys.com/draftdominator/draft/.../cheatsheet`).
2. Open Chrome’s ⋮ menu (top-right) and set page zoom to `{zoom}`% (demo used 80%: click Zoom out until the page shows 80).
3. In the Draft Dominator UI (top-right of the app, below the browser toolbar), click **Layout**.
4. Choose **`{layout}`** (demo used **2 Columns**).
5. Confirm result: Cheatsheet on the left, Roster panel on the right for the owned team, zoom at `{zoom}`%.

## Do not
- Start Real Live Sync until the host draft is actually live.
- Click Draft Player / make the official pick from DD.
- Open Sleeper or Yahoo draft rooms.

## Report back
- Zoom level set
- Layout mode set
- Which team’s Roster panel is showing
- Any blocker (missing tab, Aw Snap, login)
