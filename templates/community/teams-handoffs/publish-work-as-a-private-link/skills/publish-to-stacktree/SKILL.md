---
name: publish-to-stacktree
description: "Use this when the user asks to publish, share, or send work as a link. Prefer the Stacktree MCP connector when connected; otherwise offer to connect it once, then fall back to the anonymous HTTP path."
---

# Publish to Stacktree

Use this whenever the user asks to **publish**, **share**, or **send this as a link**.

## 1. Build one page

Turn the work into **one polished, self-contained HTML page**.

- Inline all CSS. **No external scripts.** Prefer system fonts over CDNs.
- The page must stand alone: someone opening the URL gets the full result with no chat context.
- If restyling a page that already has a deliberate design, do not restyle it. For a new page that should look finished, you may follow the house design guide at `GET https://api.stacktr.ee/design-guide`.

## 2. Secrets check (before any upload)

Never publish passwords, API keys, tokens, or personal data without asking first. If the draft contains any, stop and ask.

## 3. Prefer the Stacktree connector

**Before publishing**, check whether the Stacktree MCP connector is connected (e.g. server status for Stacktree, or whether tools such as `publish_html` are available and usable).

### If the connector is connected

Use its tools instead of the anonymous HTTP path:

- **New page:** `publish_html` with the HTML content. Pass expiry and privacy options the user asked for (default remains a private/unlisted token URL unless they opt into a public slug).
- **Change a page already sent:** `update_site` on the same site id (or slug / unlisted token). **Do not** call `publish_html` again for that page — the existing link must keep working.
- **A link for a named person:** after publish (or when sending an existing page), `create_share_link` with `label` set to that person's name — one link per recipient.
- Remember the site `id` and `url` in agent memory after every successful publish or update.
- Always report the **live link** (prefer `client_url` if present) and **when it expires** from the response (`expires_at` / `expires_at_iso`). Owned connector pages usually have no `claim_url`; say so when it is absent. When you minted named links, report those URLs too.

### If the connector is not connected

**Offer once** to connect it:

1. Add Stacktree as a **custom MCP connector** at `https://api.stacktr.ee/mcp`.
2. Sign-in: **OAuth**.
3. **No HTTP headers**.

If the person says **yes**, add/authenticate the connector, wait until it is connected, then publish with the connector tools above.

If the person says **no** (or declines), use the **anonymous path** below and do not keep re-asking in the same task.

## 4. Anonymous / API-key path (fallback)

Check whether `STACKTREE_API_KEY` is set.

- **If set:** send `Authorization: Bearer $STACKTREE_API_KEY`. Pages belong to the account. Read `expires_at` from the response (paid: often no expiry; Free: clamped to 7 days). Do not assume permanence.
- **If not set:** publish anonymously. Anonymous pages live **24 hours** on a private, unguessable URL.

### Create vs update

Remember the last published site `id`, `url`, and `claim_url` in agent memory after every successful publish.

- **New publish:** `POST` the HTML file to `https://api.stacktr.ee/sites` as multipart field `file`.
- **Changes to something already published:** `PUT https://api.stacktr.ee/sites/{id}` with the same multipart `file` field. **Do not create a new link.** PUT is owner-authed: if anonymous PUT returns 401, tell the user they need to claim the page first, and do not mint a second URL unless they ask.
- If a write returns `409 site_deleted`, **restore** with `POST /sites/{id}/restore` instead of publishing again.

```bash
# create
curl -sS -X POST https://api.stacktr.ee/sites \
  -F "file=@page.html;type=text/html" \
  ${STACKTREE_API_KEY:+-H "Authorization: Bearer $STACKTREE_API_KEY"}

# update in place
curl -sS -X PUT "https://api.stacktr.ee/sites/${SITE_ID}" \
  -F "file=@page.html;type=text/html" \
  ${STACKTREE_API_KEY:+-H "Authorization: Bearer $STACKTREE_API_KEY"}
```

Docs: https://stacktr.ee/developers · API: https://stacktr.ee/docs

Anonymous publishes from a datacenter/proxy can return 400. If that happens, report it plainly. Do not silently switch to a paid x402 path unless the user asked.

### Always report three things (HTTP path)

1. **Live link** — `url` from the response (prefer `client_url` if present).
2. **When it expires** — convert `expires_at` (unix seconds) to the user's local timezone and say it clearly. `null` means it does not expire. Never guess; read the response.
3. **Claim link** — `claim_url` from the response (anonymous publishes). If there is no `claim_url` (already owned), say so.

Claim before `expires_at`. After that the claim link returns 410 and an unclaimed anonymous page cannot be restored.
