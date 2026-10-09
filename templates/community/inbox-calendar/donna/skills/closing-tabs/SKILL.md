---
name: closing-tabs
description: "Use when the user asks to close browser tabs, clean up Chrome tabs, or clear tab clutter on the assistant computer."
---

# Closing tabs

## Goal
Reduce Chrome tab clutter on the assistant computer by closing excess tabs while keeping useful ones open.

## Assumptions
- Work on the assistant computer (shared agent desktop), signed-in Chrome profile already in use.
- Prefer the active/current Chrome window that is already open.
- Do not close the whole browser window unless the user asks to quit Chrome.
- No credentials are involved.

## Inputs
- `{keep}` (optional): tabs or sites to keep open (e.g. keep mail, keep current tab, specific URLs). Default: keep the currently active tab (and any pinned tabs).
- `{scope}` (optional): `extras` (default — close background/duplicate clutter) or `all except keep` (close everything not in `{keep}`).

## Steps
1. Open or focus Chrome. Note the active tab title/URL and roughly how many tabs are open.
2. Resolve `{keep}`: if the user did not specify, keep the active tab and any clearly pinned tabs.
3. Close tabs that are not in `{keep}`:
   - Prefer clicking each tab’s × close control on the tab bar, working from one side of the tab strip so remaining tabs shift into place.
   - Keyboard alternative when reliable: close the focused tab with Ctrl+W, but only after switching to a tab that should be closed — never Ctrl+W on a tab meant to stay open.
4. Be careful with focus changes: closing the active tab switches the visible page; always re-check which tab is active before the next close so you do not accidentally close a `{keep}` tab.
5. Stop when only `{keep}` tabs remain (or when the requested cleanup is done). Do not close pinned tabs unless explicitly asked.
6. Report back briefly: how many tabs closed, which tab(s) remain active/open.

## Do not
- Do not clear browsing history, cookies, or sign out.
- Do not close other apps or desktop windows.
- Do not navigate away from kept tabs to “finish” the cleanup.

## Report
Short confirmation: closed N tabs; left open: {titles/URLs}.
