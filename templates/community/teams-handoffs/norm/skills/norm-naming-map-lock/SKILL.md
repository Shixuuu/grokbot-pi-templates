---
name: norm-naming-map-lock
description: "Use after Norm roster discovery — propose a display-name map (role ↔ current name ↔ id), lock it with owner confirm before any rename, prefer SendToAgent by id, never invent bots. Public-safe."
---

# Norm naming map lock

**One job:** lock a **display-name map** with the owner before Norm applies renames or tells peers about name changes.

Public-safe. Follow [Human gate every step (public)](sand-workflow:human-gate-every-step-public) — show draft map, one change at a time, silence ≠ OK.

## When

- After [Norm roster discovery](sand-workflow:norm-roster-discovery) scope is chosen (not “Discovery only”)
- When a bot was renamed elsewhere and peers still use a stale name
- When the owner asks to “lock names” / “sync the roster”

## Canonical rules

1. **Prefer SendToAgent by fixed id** once known. Names change; ids usually stay.
2. **Do not invent or create bots.**
3. **Do not import** another account’s roster. Build the map only from **this** sidebar snapshot.
4. Templates stay out of production renames unless discovery scope opted them in.
5. Gate jargon like “brand PASS” (outcome words) is fine; **teammate routing** always uses the **current** display name + id.

## Map shape (draft)

Markdown table the owner can read:

| Role (optional plain words) | Current display name | Fixed id | Class (Live / Template / Channel) | Proposed display name (if any) |

- Role column is **optional importer-chosen labels** (e.g. “publish”, “brand”) — never require another house’s nicknames.
- Proposed name empty = keep current.
- Cap the first draft to bots in scope; don’t dump unrelated teasers.

## Steps

1. **Load discovery** — use the latest snapshot + scope. If missing, run discovery first.
2. **Draft map** — show the full proposed table (simulated state). Call out twin pairs and any stale alias the owner mentioned.
3. **Lock widget** (ends turn):

   **Prompt:** Lock this naming map? (no renames until you OK)

   **Options:**
   - **Lock map — no renames yet** (primary)
   - **Lock map + apply renames one-by-one next**
   - **Revise map** — owner edits; re-show draft
   - **Defer map** — record `norm-naming-map: deferred`; stop

4. On **Lock**: write agent memory labels only, e.g. `norm-naming-map:{date}` → locked table summary (names + ids). That is the canonical map until the next lock.
5. On **Lock + apply renames**: after lock memory, enter a **one-rename-at-a-time** loop:
   - Show one proposed rename (old → new, id)
   - Widget: **Apply this rename** | **Skip this one** | **Stop renames**
   - Apply only on explicit Apply (UpdateAgent / profile set as appropriate). Prefer id in any peer notify.
   - After each apply: check for new errors; then next single rename or stop.
6. Optional peer notify (only if owner asks): short priority note to bots that route by the old name — old → new + id; “prefer SendToAgent by fixed id.” Do not spam the whole sidebar.

## Title chips

If the product supports a short title chip beside the name: each bot **self-sets** its chip via its own profile. Norm may **propose** a chip in the map draft; Norm does not claim UpdateAgent can set chips for others.

## Anti-patterns

- Renaming before the map is locked
- Batch-renaming many bots in one OK
- Treating dismiss / silence as Lock or Apply
- Inventing bots to complete a role table
- Hard-coding another account’s bot names into the locked map
- Broadcasting a rename without the fixed id
- Packing `fleet-*` rename-sync tables into public packs

## Success proof

Owner can answer “what’s our naming map?” from memory; every applied rename had its own explicit OK; peers that were notified got id + new name.
