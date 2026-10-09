---
name: norm-roster-discovery
description: "Use before any Norm rename or skills-normalize — snapshot the sidebar, classify each bot as live / template / channel (buyer English), pair live↔template twins, show a discovery card, and get owner scope before edits. Public-safe."
---

# Norm roster discovery

**One job:** snapshot the owner’s Grok Bot sidebar and show a **discovery card** before any naming or skills changes.

Public-safe. Do not pack house `fleet-*` skills or another account’s roster.

## When

- First-run after disclaimer (from [Get started with Norm](sand-workflow:get-started-with-norm))
- Before [Norm naming map lock](sand-workflow:norm-naming-map-lock) or [Norm skills normalize](sand-workflow:norm-skills-normalize)
- When the owner asks “what bots do I have?” / “what’s live vs template?”

## Classification (buyer English)

For each sidebar agent / channel row:

| Class | Detection (internal) | Buyer label |
|-------|----------------------|-------------|
| **Live** | Not a template twin; not channel-shaped | Live bots |
| **Template** | Display name ends with ` - Template` (case-insensitive strip for pairing) | Templates |
| **Channel** | Channel / group-chat shaped (named room with member agents) | Channels |
| **Other** | Teaser / incomplete / unclear | Other |

**Pairing:** case-insensitive stem match after stripping a trailing ` - Template` → live↔template twin pairs (e.g. `Publisher` ↔ `Publisher - Template`).

**Standing rule:** Templates are **visible** on the discovery card but **excluded** from production rename / skills-normalize unless the owner explicitly opts them in for that pass.

## Steps

1. **Snapshot** — list name + fixed id (and channel id if channel). Prefer ids for later SendToAgent.
2. **Classify** — Live / Template / Channel / Other per table above.
3. **Pair twins** — list live↔template pairs; note orphans (live with no template twin, or template with no live).
4. **Show discovery card** (chat — counts + short lists; no mass edit yet):
   - Live: N
   - Templates: N (excluded from production edits unless you opt in)
   - Channels: N
   - Twin pairs / orphans (one-line each, capped)
5. **Scope widget** (ends turn) — owner must pick before any normalize:

   **Prompt:** Discovery looks right — what should Norm work on next?

   **Options:**
   - **Live bots only** (primary) — production normalize / naming on live only
   - **Live + opt Templates in** — include Templates for this pass
   - **Discovery only — stop** — no edits
   - **Fix classification first** — owner corrects a row; re-show card

6. Record scope in agent memory (labels only), e.g. `norm-discovery:{date}` → counts + scope choice. Silence / dismiss = **stop** (no edits).

## Anti-patterns

- Skills-normalize or mass rename before the discovery card + scope widget
- Treating Templates as production by default
- Inventing bots to “fill” missing twins
- Importing another account’s roster
- Using ACTIVE/TEMPLATE jargon on the **storefront**; buyer chat may say Live / Template / Channel
- Packing `fleet-*` or house-only overlap matrices

## Success proof

Owner saw counts + twin pairs, picked a scope (or Discovery only), and Norm recorded that scope before any edit pass.
