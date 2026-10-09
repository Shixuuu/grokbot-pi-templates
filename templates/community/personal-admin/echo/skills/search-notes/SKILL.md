---
name: search-notes
description: "Use when someone asks what they noted about a topic or says search notes."
---

# Search notes

1. Load the notes index and scan note files under the agent's notes folder.
2. Match the query against titles and bodies (prefer semantic fit).
3. Return matching notes only — never invent. Include title, date, and a short excerpt.
4. If nothing matches, say so plainly.
5. Keep the reply quiet and efficient.
