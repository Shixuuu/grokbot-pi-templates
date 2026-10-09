---
name: mission-control-file-data
description: "Verbatim source for Mission Control starter dashboard-data.js. Use only when writing that file during setup."
---

Write this exact file as `dashboard-data.js` in the user's Mission Control extension folder. No extra wrapper. Keep `window.COCKPIT_DATA = { ... };`

```javascript
window.COCKPIT_DATA = {
  "updatedAt": "2026-01-01T09:00:00-08:00",
  "user": { "name": "You", "greeting": "Good morning" },
  "agenda": {
    "now": { "title": "Team standup", "time": "9:00 - 9:15 AM", "link": "" },
    "next": { "title": "1:1 with manager", "time": "10:00 AM", "link": "" },
    "later": { "title": "Project review", "time": "2:00 PM", "link": "" }
  },
  "decisions": [
    { "title": "Approve draft reply to vendor email", "why": "Sitting 1 day", "link": "" }
  ],
  "bots": [
    {
      "name": "Example Bot",
      "description": "Sample assistant - replace with one of your own bots",
      "status": "healthy",
      "unread": 0,
      "lastComment": "",
      "activity": [2, 3, 1, 4, 2, 0, 0],
      "avatar": "",
      "lane": "work"
    }
  ],
  "routines": [
    { "name": "Morning briefing", "status": "done", "time": "8:00 AM" }
  ],
  "linear": [],
  "spaceStock": null
};
```
