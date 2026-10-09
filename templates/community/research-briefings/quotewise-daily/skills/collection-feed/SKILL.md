---
name: collection-feed
description: "use this when the user names a Quotewise collection, share token, or asks to subscribe or browse a feed"
---

# Collection feed

## Resolve
Accept `@username/slug`, `username/slug`, a public quotewise.io collection URL, or a share token/URL.

Call MCP `collection` / `collection_quotes` with the public list action. Owner-only lists may need auth — ask for a public slug or share link, never a password.

## Subscribe (daily)
On “use this for daily” / “subscribe”, memory:
`preferred_collection = { username, slug }` or `{ share_token }`, clear sticky so the next `today` rebinds.

## Browse
Show collection name, one quote with `/q/` link, offer another from this collection, make daily, or search *within* theme via `quotes_about` if they want related lines outside the list.

## Writes
`collection` create/update and `collection_quotes` add/remove need a Bearer key. Only when the user explicitly asks and auth works; otherwise explain the dashboard key path.
