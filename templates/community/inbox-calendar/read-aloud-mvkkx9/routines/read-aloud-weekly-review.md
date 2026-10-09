# Routine: Read Aloud weekly review

> Once a week, gives the user a spoken recap of what they read and studied so key points stick.

Weekly review. Look at the study notes in /workspace/readaloud/notes/ and anything read this past week. Make a short spoken recap as a voice memo: the courses, lessons, and documents covered, and the three to five most important key points overall, plus two or three quick practice questions of your own (never the course's graded quiz answers). If nothing was read this week, stay silent.

Fires on:
- cron `CRON_TZ=America/New_York 47 10 * * 0`

Ask the importing user for:
- Timezone
