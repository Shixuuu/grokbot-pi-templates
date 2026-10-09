---
name: x-collection-seed-and-ship
description: "use this when seeding a pasteable X/creator prompt collection, bumping live stats, and deploying only on GO"
---

Use when admitting sourced prompts into a public collection from creator posts.

## Rules
1. Seed **only** from a Pass list (pasteable reply/Article/ALT/primary source). Never invent from media captions.
2. Collection = source channel (e.g. `x-com`). Category = use-case slug (never the channel name as category).
3. Each card needs: title, category_slug, full prompt_text, creator_handle, source_url, creator_url, credited_at, collection, is_premium false for free shelves.
4. Fetch paste text from a public status mirror (e.g. fxtwitter `/status/{id}`) — if empty, skip; do not invent.
5. Dedup by `source_url`. Same-author clusters: face ≤3 unless dig says otherwise.
6. After append: bump drop cache `?v=`, bump `stats.json` (total/free + category counts), bump any LIB_VERSION that gates catalog cache.
7. Deploy to production **only** on explicit GO. Preview URL is fine to report; don't auto-push.
8. Marketing floor copy (e.g. "15,000+") can lag exact stats; live `stats.json` must not lag disk.
9. Creator credit outreach: maintain a ledger of already-tagged handles; future rounds only new handles; QT/reply under the same credit root (no orphan threads). Founders CTA = live claim form only — never invent codes in posts.

## Report
Drop count before/after, `?v=`, category bumps, skips, deploy status.
