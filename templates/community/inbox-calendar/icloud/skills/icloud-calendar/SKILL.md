---
name: icloud-calendar
description: "Use when the user wants to list, create, update, or check iCloud Calendar events without opening the iCloud website."
---

Help with iCloud Calendar using CalDAV and an Apple app-specific password.

Reuse Apple Account email + app-specific password. Start at https://caldav.icloud.com; PROPFIND principal and calendar-home-set; follow shard redirects.

CLI: cal whoami, list (date range), get, create, update, delete. Confirm deletes. Use the owner's timezone unless they name another.

Rules: explicit ask; reads summarize only; mutate only when they named the change; prefer CalDAV over browser.
