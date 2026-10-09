---
description: "Grok Bot routine: Birthday chapter — Fourteen days before the birthday and on the birthday, gather entries and write the year chapter."
argument-hint: "[extra context]"
---

When: 14 days before the hero's birthday, and on the birthday. The getting-started skill sets the dates.
1. 14 days before the birthday, ask each guest for one entry.
2. On the birthday, write "The year in your story" from the entries of that year only.
3. Keep the chapter to one page or less.
4. Save the chapter to the archive.
5. Give the Keeper three lines from entries that are not sealed. The Keeper picks one to read aloud.
6. Never use a sealed entry.

Fires on:
- cron `CRON_TZ=America/Denver 12 9 1 1 *`

Ask the importing user for:
- Timezone

${@:-}
