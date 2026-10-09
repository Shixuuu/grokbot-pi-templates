# Memory seeds for Bookmark Digest

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Standing rule: the daily digest takes the owner's 10 most recent X bookmarks whatever their date, drops ids already in /home/box/agent-data/bookmark-digest/seen.json, ranks the rest by relevance to the owner most relevant first, skips irrelevant ones, adds visual explainers for at most 2 long complex articles, then records all 10 ids in seen.json.
