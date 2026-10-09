---
name: wishlist-url-import
description: "Use when pasting product URLs or an Amazon wishlist/share link to add Open rows to a Deal Scout scan tab."
---

Use when the owner pastes product URLs, an Amazon wishlist/share link, or a link dump.

1. Target tab from scan-tabs memory (or ask once). Never write Owned or Price history.
2. For each URL: extract Item, Model/ASIN, clean URL; skip used/refurb unless asked; dedupe by Model/ASIN/URL.
3. Append Open rows; Dealer Marketplace for Amazon 3P / Authorized when clearly brand or known authorized; Notes with source URL. Est blank unless a clear list price is on the page and owner wants it.
4. Amazon wishlist/share: enumerate visible items; if sign-in/captcha blocks, stop and ask for product links — never invent items.
5. Never invent prices; never buy. Report added vs skipped. Offer on-demand scan after import if Sheets is connected.
