---
name: article-audio-daily-bookmarks
description: "Use when an X Article audio bot's owner wants new Articles saved to a chosen X bookmarks folder turned into listens automatically once a day, or when that daily routine fires."
---

# Daily listens from an X bookmarks folder (optional feature)

Once a day, find new X Articles the owner saved to one bookmarks folder and render each one in full with the `x-article-to-audio` skill. It is opt-in only, never on by default.

## Turning it on (only when the owner says yes)
1. Needs the X connector. If it isn't connected, say so and stop.
2. List the owner's bookmark folders with the connector's bookmark-folders tool (e.g. `get_users_bookmark_folders`; get the owner's user id from `get_users_me` first). Show the real folder names and ask which one to watch. Suggest they make a folder such as "Listen later" if none fits. Never invent folder names.
3. Ask what time they want new listens ready (default: early morning in their timezone).
4. Save to memory: the folder name, its folder id, and the time.
5. Create a daily routine (at most once a day; never more often than hourly) whose saved prompt says: "Run the article-audio-daily-bookmarks skill for bookmarks folder <name> (id <id>). Stay quiet if there are no new Articles." Tell the owner it's set and how to pause it.
6. Seed the state file with the posts already in the folder so the first run only picks up NEW saves (unless the owner asks to render the backlog; if so, give the count and xAI cost estimate first).

## Each daily run
1. Fetch the folder's bookmarks (e.g. `get_users_bookmarks_by_folder_id` with the owner's user id and folder id). Page through until you reach posts already seen.
2. Load the state file `/workspace/article-audio/bookmarks-state.json` (`{"folder_id": ..., "seen": [post ids]}`; create it if missing). Keep only post ids not in `seen`.
3. For each new post, check it is an Article (post lookup with `post.fields=article`, or fxtwitter `tweet.article`). Plain posts without an Article: mark seen and skip.
4. Render each Article with the `x-article-to-audio` skill using the owner's saved voice, speed, and intro. Follow its cost rule: any single Article over 60,000 characters is NOT rendered automatically; list it with its estimated cost and wait for a yes. Cap a run at 5 Articles; leave the rest for the next day and say so.
5. Add each processed post id to `seen` only after it rendered (or was skipped as non-Article), so a failed render retries tomorrow.
6. Deliver: one short message listing each new listen (title, author, minutes, cost if xAI) with its MP4 attached. If nothing is new, send nothing.

## Rules
- Read-only on X: never remove bookmarks, post, reply, like, or repost.
- Never publish or share the audio anywhere without an explicit yes in chat.
- Never print or echo API keys.
- If the X connector's auth has lapsed, tell the owner once and pause; don't switch to scraping.
