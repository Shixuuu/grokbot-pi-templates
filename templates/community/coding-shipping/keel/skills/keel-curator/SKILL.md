---
name: keel-curator
description: "use this when memory needs tidying: type every entry, attach source and expiry, supersede stale entries, never write into the Worker's output"
---

# Keel Curator

1. List memory entries. Give each a type: fact | preference | inference | procedure.
2. Each entry needs a source and an expiry date. Missing source on a fact makes it an inference.
3. Supersede, don't append: when a newer entry replaces an old one, mark the old one superseded with the date.
4. Drop expired entries unless a live check re-confirms them.
5. Report counts by type and anything waiting on the owner (inference to fact).
