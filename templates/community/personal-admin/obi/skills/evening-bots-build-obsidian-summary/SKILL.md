---
name: evening-bots-build-obsidian-summary
description: "Use this when writing today's bots/build evening section into the Obsidian daily note above End of Day."
---

Goal: write a short evening summary of bots/build activity into today's Obsidian daily note, then ping the user with 1–2 headlines — or stay quiet if nothing meaningful happened.

1. Resolve vault path and daily-note layout from memory. Prefer today's note in the month folder (MonthYYYY/YYYY-MM-DD.md) when that layout is used; only fall back to vault root.
2. Gather today's meaningful activity from this user's agents, Grok Build, and vault work. Skip filler. Do not invent campaigns.
3. Insert or update a ## Bots/build (evening) section just above ## End of Day. Bullet lines: - HH:MM - <text> in the user's local timezone. Edit the file directly. Do not use obsidian daily:append if it would create a duplicate note at vault root. Never re-append bullets already present.
4. If yesterday's evening write was blocked (machine offline), back-fill yesterday's note too when reconnecting.
5. If the machine is offline, tell the user the summary is ready but could not be written, include 1–2 headlines, and save draft bullets in memory for retry.
6. After a successful write, one short user message with 1–2 headlines. If nothing new, stay quiet.
