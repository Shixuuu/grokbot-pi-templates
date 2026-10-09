# Routine: close-watch

> Checks the close-watch articles hourly from 8am to 10pm and notifies the owner only when one has new edits.

Schedule: 17 8-22 * * * (hourly 8am to 10pm, all seven days).

Check the close-watch list for new Wikipedia edits. The list is in /workspace/wiki-watch/close-watch.json (a user_agent string plus articles, each with a title, pageid, and last_seen_revid). Send every request with exactly the user_agent from that file; if it is missing, make no requests and ask the owner once what contact to use. Using only the public MediaWiki API at https://en.wikipedia.org/w/api.php, one request at a time, with maxlag, batch-fetch the latest revisions for every watched title. For any page whose latest revision is newer than last_seen_revid, list the new revisions (ids, timestamps, editors, comments, sizes, tags), read the real diff with action=compare from last_seen_revid to the latest revision (and individual revisions when needed), and tell the user in one block per page: the linked title, how many edits and by whom, two or three plain sentences on what actually changed in the content, flags only when the diff shows them (likely vandalism, reverts or edit war, large unexplained removals, new unsourced claims about living people, protection or deletion activity), and a link to the combined diff. Never summarize from edit summaries alone and never invent anything. Then update last_seen_revid in the file. If a page was moved, tell the user once and update the title; if deleted, tell the user once and drop it. If nothing changed on any page, send nothing at all. If the article list is empty, delete this routine.

Fires on:
- cron `CRON_TZ=America/New_York 17 8-22 * * *`

Ask the importing user for:
- Timezone
