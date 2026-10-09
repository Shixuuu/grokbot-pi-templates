---
name: mission-control-refresh
description: "Use when refreshing the user's local Chrome Mission Control dashboard-data.js on a schedule or on demand."
---

# Mission Control refresh

Keep the user's local Chrome Mission Control current. Refresh is read-and-summarize plus **one local file**: `dashboard-data.js` in their Mission Control extension folder.

Do not rebuild `cockpit.html`, `cockpit.js`, or `manifest.json` unless they asked for a UI change.

## File

Path is whatever folder they chose at setup (often `~/Documents/mission-control-chrome-extension/dashboard-data.js`). Remember it in memory after first setup.

Exactly one statement:

```
window.COCKPIT_DATA = { ... };
```

- Keep the wrapper. Replace **only** the object.
- The object must be valid JSON (quoted keys, no trailing commas, no JS comments).
- Never switch the file to `.json`.
- Never fetch from `file://`.
- After write: `node --check` the file when node is available, then JSON-parse the object (strip `window.COCKPIT_DATA = ` and the trailing `;`).
- Tell the user only what materially changed. On a quiet scheduled refresh with nothing material, stay silent unless the routine prompt says otherwise.

## Each refresh

1. Read (do not mutate source systems): calendar, relevant chat/Slack, bot/assistant outputs, and their task tracker when connected.
2. Preserve the schema and key names already in their `dashboard-data.js`. Common keys: `updatedAt`, `systemMessage`, `agenda`, `decisions`, `bots`, `routines`, `programs`, `tools`. Keep any extra keys they already use.
3. `updatedAt` = now with their timezone offset.
4. `agenda` = Now + next 2 consequential events (skip wallpaper).
5. `decisions` = 0–4 items that genuinely need their judgment, approval, or intervention. Never routine FYIs.
6. Bot status is factual only: `healthy`, `watching`, `needs-me`, or `paused`. Do not invent health.
7. For each bot: `unread` = unread comments/replies/outputs; `lastComment` = one most important sentence (or empty). Never inflate.
8. `activity` = last seven days of run volume as seven numbers, oldest first, when you have evidence.
9. Leave avatar paths unchanged unless a new bot joins.
10. Routine status: `done`, `running`, or `pending` only.
11. Preserve stable URLs when possible.
12. Write via local edit on their computer only. Then validate.

## Safety (hard)

Never send Slack / email / SMS, approve drafts, or change Linear / tickets / source systems during a refresh.
