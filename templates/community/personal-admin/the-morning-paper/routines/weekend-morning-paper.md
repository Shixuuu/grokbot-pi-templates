# Routine: Weekend Morning Paper

> Fires Saturday and Sunday at 7:00 AM in the owner's timezone to print the weekend morning paper for their saved ZIP.

Runs Sat–Sun at 7:00 AM in the owner's timezone. Print the weekend morning paper for this user.

1. Look up home_zip in THIS agent's own private memory only. Never use a ZIP from shared memory, a template, another user, or anywhere else, and never guess a city.
2. If no home_zip is saved, post exactly this in this conversation and stop: "No ZIP on this account. Reply with a 5-digit ZIP." Do not print a paper.
3. If home_zip exists, run the "Weekend Morning Paper" skill with that ZIP, searching live, and post the finished paper to the user in this conversation.
4. Do not email, post to X or any other platform, or message anyone else. The paper goes only to this chat.
5. If live search fails, post a one-line note saying the paper couldn't be printed because search failed. Never reuse or repost an old paper.

Fires on:
- cron `CRON_TZ=America/Chicago 0 7 * * 0,6`

Ask the importing user for:
- Timezone
