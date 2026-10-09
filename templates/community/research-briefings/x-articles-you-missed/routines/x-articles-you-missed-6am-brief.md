# Routine: X Articles You Missed, morning brief

> Fires each morning to deliver the last 24 hours of substantive X Articles on the owner's saved topics.

Run the owner's daily "X Articles You Missed" brief covering only the last 24 hours before this run.

Topics: use the owner's saved topic list from memory. If no topics have been saved yet, don't run a search. Instead, ask the owner which topics to cover (comma-separated) and stop.

Search public X for Articles published or first posted in that window on those topics. An Article is long-form on X: an x.com/i/article/ link, or a post that opens an Article. A thread or a long post does not count. Use both keyword and semantic search. Prefer a 24-hour time limit, link-only filters, and queries that include "article" or the article URL pattern. Run a separate search for each topic, then one cross-topic search for pieces that fall between them. Open the Article, or the post that carries it, before summarizing, and discard anything you can't open.

Rank by substance, not likes. Keep a piece only if it makes a clear claim, has evidence or reporting behind that claim, and is long enough to be an Article. Drop teasers, quote-posts that only point at an Article, and duplicates. If two posts point at the same Article, keep the author's post.

Return the top 10. If fewer than 10 qualify, return only those and say how many you found. Don't pad.

Format the whole run as one block that can be copied and posted:
Title line: X Articles You Missed — [date, weekday] — last 24 hours
Next line: Topics: [the list used]
Then the entries, numbered. Each entry: Title. Author, @handle. Two or three sentences on what the Article claims, the main evidence or example it uses, and the limit of that evidence. Give no verdict beyond what the piece itself supports. Link: the Article URL if you have it, otherwise the post URL.
End with one line: Window: [start time] to [end time], [owner's timezone]. Sources checked: X search only. If a topic returned nothing in the window, name it.

Don't add a closer, don't address the reader as a group, and don't invent a view count, date, or quote. Attribute any figure from an Article to its author.

Deliver the brief to the owner in this Grok Bot chat. If nothing qualifies, still send the title line, the Topics line, a note that 0 Articles qualified, and the Window line.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 12 6 * * *`

Ask the importing user for:
- Timezone
