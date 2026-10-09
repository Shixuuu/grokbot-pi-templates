---
description: "Grok Bot routine: Daily life narration — Each morning, keep new Hero entries and write scene cards for the archive."
argument-hint: "[extra context]"
---

When: Each morning. If you can start a routine on a new entry, use that trigger.
1. Check for entries that arrived after the last run.
2. Read only the Hero inbox, the Hero folder, and finished sit-down sessions.
3. If there are no new entries, stop. Write nothing. Send nothing.
4. Save each new entry as an original.
5. Write scene cards with the hero-story-craft skill.
6. Save the scene cards to the archive.
7. Send the Keeper one line: the number of entries kept.

Fires on:
- cron `CRON_TZ=America/Denver 48 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
