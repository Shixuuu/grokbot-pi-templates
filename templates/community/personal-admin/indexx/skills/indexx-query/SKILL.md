---
name: indexx-query
description: "Use when asking what is in the library, about a person/creator/topic, or wanting a complete list / local watch page / cited synthesis."
---

Use local SQLite FTS5 for exact lists; rebuild db/search.sqlite3 when stale. ALL requests need every matching indexed record. Separate enumeration from cited synthesis. Generate local watch views with indexx_watch.py. Indexing/views make no paid calls and do not authorize downloads or publishing.
