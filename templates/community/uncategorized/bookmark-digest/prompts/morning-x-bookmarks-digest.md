---
description: "Grok Bot routine: Morning X bookmarks digest — Fires each morning to send the owner a ranked digest of their latest X bookmarks they haven't seen yet."
argument-hint: "[extra context]"
---

Put together the owner's morning digest from their 10 most recent X bookmarks, whatever their date. Read them through their connected X account (the X plugin, which signs in as them; read the X plugin's guide skill before using it and look up their X user id from their own profile), one call for 10 bookmarks with authors, nothing more. Drop any whose post id is already in the seen_ids list in /home/box/agent-data/bookmark-digest/seen.json. Rank the rest by how relevant and valuable they are to the owner, based on their saved interests, most relevant first, and skip the ones that aren't relevant, like memes or off-topic posts. In that ranked order, give each one the author's handle, a one- or two-sentence plain summary of what it says or why it matters to them, and a markdown link to the post. For long, complex articles or threads, add a visual explainer, such as a diagram or a generated image of the key ideas, for at most 2 items. Keep it skimmable. After delivering, add the post ids of all 10 bookmarks you looked at (skipped ones included) to seen.json. If the X connection fails for auth, say briefly what needs reconnecting; if the same auth failure already happened on an earlier run, pause this routine instead of repeating it.
Deliver the digest to the owner in this chat. If none of the 10 are both new and relevant, send nothing.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 45 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
