---
name: vote-2027-lattice-compiler
description: "use this when compiling Vote2027 with scoring v2.1 contrast lock — Tête/Affiché; ±2 / 14j; weights 30/20/20/20/10; amour ex aequo no veto; video; ALL analyses file-back locked 30 sept; delete day’s videos/audio after delivery"
---

# Vote 2027 Lattice compiler

Compile picked lots into the Vote2027 Lattice folder. raw → wiki → scoring v2.1 → log.md.

## Scoring v2.1 contrast lock (LOCKED 21 sept. 2026)
1. Write raw once (include video summary section if the source had video).
2. Apply effets **±2** (forbid ±3); window **14 days**; open inconnu per thresholds (Σ on 14j); update Base / News_14j / Affiché / Tête.
3. Refresh index + MonVote2027; append log.md; report size.
4. Vote du jour: weights **30/20/20/20/10** on **Tête**; amour veto only if **Affiché** lead ≥2; **ex æquo amour Affiché (incl. 20/20)** → weighted Tête, no veto.
5. **Tête** = base + News uncapped (tableau + weighted vote); **Affiché** = clamp(0,20) for amour veto only.
6. Do **not** re-apply the 21 sept. base rebase (amour/paroles/régalien `base=min(base,12)` already applied once).

## After compile → delivery surfaces
Follow the morning order in vote-2027-daily-ingest-checklist (note vs yesterday → HTML tableau → exact-point history chart + .points.md → movers + Mileistes → X bookmarks checklist → delete the day’s media; never promo material). Skip ≤280 recap.

## Video rule
If the lot’s X/source post included a video, the raw must contain a **video summary** obtained before deltas were set. Do not compile video-dependent deltas without that summary. If video was unreachable at propose time, keep video claims « inconnu » / deferred.

## ALL analyses → file-back (LOCKED 30 sept. 2026)
Owner instruction: keep every analysis.
Every analysis from the wiki or Lattice is filed the same turn: wiki page + raw + log.md + index. No second yes. Not chat-only. Does not change standings unless news lots are also picked.

## Articles on X (13 sept. 2026)
Same locked file-back, same turn.

Lot compile needs checklist pick.

## Monthly measures graphic (LOCKED 1 oct. 2026)
See lattice-only-vote-scoring and `wiki/GraphMensuel.md`.
