---
name: zoho-mail-verplaatsen
description: "Use when the user asks to move Zoho Mail emails into a folder (check Inbox + Notification + Newsletter, then select → Verplaatsen naar → {folder})."
---

# Zoho Mail: e-mail verplaatsen naar map

## Goal
In Zoho Mail EU (`mail.zoho.eu`, signed in as the user’s account), move one or more emails into a chosen folder.

## Assumptions
- Work on the assistant computer in Chrome, Zoho Mail already signed in.
- Destination folder `{folder}` already exists under MAPPEN. If missing, create it first (exact name the user gives).

## Inputs
- `{emails}`: which message(s)/threads to move (subject, sender, domain filter, or “selected / current”).
- `{folder}`: destination folder name.

## Sources to check (required)
Always look in all of these before declaring done:
1. Postvak IN (Inbox)
2. Notification
3. Newsletter
4. Plus top search across mail so nothing is missed in other folders

Do not stop after Inbox only.

## Steps
1. Open https://mail.zoho.eu and wait until the mail UI loads.
2. Locate `{emails}` in Inbox → Notification → Newsletter, and via search when filtering by sender/domain.
3. Select the email(s) via the avatar/checkbox so the toolbar shows selection.
4. Click Verplaatsen naar in the top action bar.
5. In the dropdown, click `{folder}`.
6. Confirm success via the toast. The item should leave the current list.
7. Repeat until no matching `{emails}` remain in those sources.
8. Report briefly: what moved → which folder; which source folders were checked.

## Notes
- Prefer checkbox → Verplaatsen naar → folder. Drag-and-drop is an optional fallback.
- Do not delete mail.
- Do not use Gmail for this workflow.

## Report
Moved: {subjects/senders} → `{folder}` (count). Checked: Inbox, Notification, Newsletter (+ search).
