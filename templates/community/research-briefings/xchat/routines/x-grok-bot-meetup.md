# Routine: X 사례 검색 후 XChat 그룹 게시

> Every 30 minutes during the owner's hours, find new use-case posts on X and share qualifying ones in the owner's XChat group.

Goal: find NEW use cases of the tracked topic (e.g. Grok Bot) posted on X and share the good ones, translated into the owner's chosen language, in the owner's XChat group (the group chat URL saved in memory). Post directly only if the owner approved direct posting to that group; otherwise send the drafts to the owner for approval first. Never DM anyone, reply, like, follow, or post elsewhere.

Each run:
1. State file: /workspace/xchat-usecases/seen.json holds URLs/IDs of X posts already evaluated (posted or rejected) plus last_run time. Create it if missing. On the very first run, only consider posts from the last ~2 hours so the group isn't flooded.
2. Search X in the browser (owner's logged-in account) with Latest results, using the topic's name, 'template', 'use case', template-link patterns, and the owner's language variants. Delegate browser work to a desktop subagent (one at a time). Collect posts newer than last_run not in seen.json.
3. Qualify: keep only posts about the tracked product that include a shareable template/link OR detailed, concrete setup/usage steps. Skip hype, questions, jokes, unrelated posts, spam, and duplicates of an already-posted case (same template or thread). Open the post/thread to read full detail when needed. Note if X labels it a paid partnership.
4. For each qualifying post, write a message in the owner's language: a one-line title, 3-6 sentences explaining what it does and how to set it up (translate key steps faithfully, don't invent details), the template link if present, and the original post URL with the author's handle. Plain text, readable in chat.
5. Post each message into the group chat via the desktop subagent and confirm it appears. If the XChat PIN screen appears or login is lost, don't post; tell the owner and hand them the desktop.
6. Record every evaluated post in seen.json and update last_run.
7. Reporting: stay silent when nothing qualified. When something was posted, tell the owner briefly what was posted (title + source link). Report any failure plainly.

Fires on:
- cron `CRON_TZ=Asia/Seoul 28,58 7-23 * * *`

Ask the importing user for:
- Timezone
