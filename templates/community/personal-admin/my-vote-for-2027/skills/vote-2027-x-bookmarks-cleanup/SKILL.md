---
name: vote-2027-x-bookmarks-cleanup
description: "use this when cleaning X bookmarks for posts already in Vote2027 — also at end of daily 7am after note + quatre-profils + movers + Mileistes; checklist before delete; never touch Lattice; say X bookmarks not saved posts"
---

# Vote 2027 X bookmarks cleanup

Preferred term: **X bookmarks** (never « saved posts »).

Use when the user asks to remove X bookmarks for posts already ingested into Vote2027, **and at the end of the daily 7am routine** after compile / full note / quatre-profils / movers / Mileistes.

## Goal
Delete matching **X bookmarks only**. Never delete Lattice `raw/` or `wiki/`.

## When (7am)
After morning order: ingest → the owner picks → compile → full note → quatre-profils + movers + Mileistes: run this cross-check before ending the morning turn (or in the handoff so the parent shows the checklist). Never auto-delete.

## Do
1. Check X tools + credits. `get_users_me` → user id.
2. `get_users_bookmarks` (paginate folders if any). If **0** bookmarks: brief note and **stop**.
3. Collect tweet ids/URLs from Vote2027 `raw/` (`status/[0-9]+`).
4. Intersect bookmarks ∩ ingested ids.
5. If **0 matches**: brief report (N bookmarks, M raw ids, 0 overlap) and stop — do not offer deleting unrelated bookmarks unless the user asks.
6. If matches: multiSelect checklist (NAME/lot + short text + url). Cap 6/page. Always include danger « Ne rien retirer ».
7. For **checked** tweet ids only: `delete_users_bookmark`. Confirm count. Lattice unchanged.

## Do not
- Say « saved posts » for this feature — say **X bookmarks**
- Auto-delete without checklist picks
- Delete Lattice content
- Invent bookmarks when the API returns empty
- Remove non-overlapping bookmarks unless the user explicitly widens the scope
- Run before the tableau/briefs step on a normal morning (end-of-morning only)
