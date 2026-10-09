---
name: public-facing-provenance-guard
description: "Use before any public landing page, site page, lead magnet, or client-facing document ships."
---

Run this before you claim a public page or document is ready. Fail closed. Do not publish, export, or merge public copy that still has hits.

The reader should never learn which agent, model, VM, skill, or review step produced the page. If deleting the line loses no fact a visitor needs, it is a leak.

Applies to public or client-facing sites, landing pages, lead magnets, episode pages, shop/tools/directory copy, and anything a stranger will read as finished copy. Does not apply to Notion drafts, internal ledgers, or chat with the user.

Fail on: Added/created/modified by; Grok Bot or VM stamps; agent display names used as authors; voice-gate or audit residue; DRAFT ONLY / HOLD / no post; empty Related / Sources / FAQ scaffold; as an AI / hope this helps closers; citing an internal repo or skill as a public source.

Scan the rendered public text, not only the private draft. Check footer, byline, hidden SEO, JSON-LD, image alt, and PDF last page.

No hits: optional voice audit, then ship only if the user already said so. Hits: do not ship. Strip only those spans. Do not add a cleaned-by line. Rescan once. Still hits: hand to the user. Do not loop.

Never move a fingerprint onto the public page for credit. Internal files keep their stamps.
