---
name: pull-x-bookmarks
description: "use this when harvesting new X bookmarks for the weekend newspaper inbox (daily pull or on demand) via the X plugin"
---

# Pull X bookmarks

Harvest new bookmarks for the configured handle into this week’s newspaper inbox. Read-only. Never unbookmark.

## Steps

1. Read `/workspace/weekend-edition/config.json` for `x_handle` and timezone.
2. Prefer the installed **X plugin / MCP** (`get_users_bookmarks` for the connected account). This is Settings → Plugins → X — not a developer-console OAuth token file and not Grok X search / xAI API keys.
3. Paginate until caught up since the last pull watermark.
4. If the X plugin is missing or lacks bookmark access, stop and tell the reader to connect **X** under Settings → Plugins. Do not start a random OAuth flow in chat.
5. For each new bookmark, resolve to the article when an X Article or outbound link exists. Append to the weekly inbox (same shape as ingest-clip).
6. Update `/workspace/weekend-edition/watermark.json`.
7. Report added / skipped / failures. Empty harvest is normal — say so; do not invent items.

## Rules

- Never call delete/unbookmark tools.
- Never compose the paper from this skill.
