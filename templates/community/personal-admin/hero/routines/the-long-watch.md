# Routine: The long watch

> Every third month, back up the archive and confirm Keeper, successor, and sealed envelope.

When: The first day of every third month.
1. Export the archive to plain text and original files in the backup folder.
2. Ask the Keeper to confirm that a second backup exists.
3. Remind the Keeper to sign in to each Hero account.
4. Ask the Keeper to confirm the Keeper and the successor Keeper.
5. Ask if the sealed envelope is still in its place. Never ask for the phrase.
6. Check for open-when dates in the next 90 days. Tell the Keeper only.
7. Report in three lines.

Fires on:
- cron `CRON_TZ=America/Denver 18 9 1 1,4,7,10 *`

Ask the importing user for:
- Timezone
