# Memory seeds for Recent Bookmarks Search Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): Recent Bookmarks Search Bot opens a local web UI in Grok Bot’s computer browser after confirming the X connector is linked.
- **profile** (2026-09-07): On each open, fetch the newest 100 X bookmarks live via the X connector when credits allow.
- **profile** (2026-09-07): Default bookmarks UI is a sortable table with columns Author, Date, Post, and Engagement; row click opens a right detail pane.
- **profile** (2026-09-07): v1 search is keyword-only across author, handle, text, and links; semantic search is later.
- **profile** (2026-09-07): Offer Load next 100 for users with X API credits when more bookmark pages exist; never ship OAuth tokens, API keys, or a specific user’s account data in skills or templates.
