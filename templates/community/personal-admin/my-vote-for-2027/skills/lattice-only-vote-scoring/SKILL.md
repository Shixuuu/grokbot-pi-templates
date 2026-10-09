---
name: lattice-only-vote-scoring
description: "use this when scoring Vote 2027 from Vote2027 Lattice — scoring v2.1 contrast lock; Tête/Affiché; amour ex aequo no veto; video; ALL analyses file-back locked 30 sept"
---

# Lattice-only Vote scoring

Scores only from the Vote2027 Lattice folder. Live search proposes lots only.

## Scoring v2.1 (contrast lock, LOCKED 21 sept. 2026)
- **News_14j** = sum of effets `clamp(−2,+2, delta)` over **14 days** (not ±3 / 30j).
- **Affiché** = clamp(0,20, base + News_14j) — **veto amour only** (≥2 Affiché lead).
- **Tête** = base + News_14j (**uncapped**) — weighted note / vote when no veto; quatre-profils cells.
- Open inconnu: |delta|≥5 (amour/paroles/régalien); |delta|≥3 (budget/IA); or Σ|effets|**14j** ≥5.
- Vote weights: **30/20/20/20/10** (amour/paroles/budget/régalien/IA). AboutMe lens.
- Base rebase already applied 21 sept. (amour/paroles/régalien min 12); do not re-rebase.

## Amour ex æquo (15 sept. 2026)
If Affiché amour is tied (including several at **20/20**), veto does **not** fire. Vote du jour = weighted **Tête**; paroles/budget/régalien/IA break ties.

## Video before deltas (13 sept. 2026)
For any lot whose source post includes a **video**: mandatory video summary (watch/analyze) **before** quality deltas. Do not score video-only claims from the caption. If video unavailable: state it; defer those deltas.

## X lots
Gap-fillers first. Up to 18 lots in 3 pages (5 + nav). Prefer holes (missing budget/IA evidence first).

## ALL analyses → file-back (LOCKED 30 sept. 2026)
Owner instruction: keep every analysis.
Every analysis written from the Vote2027 wiki or Lattice (ranking, cross-cut, scenario, article, short brief) is filed the **same turn**: `wiki/` page + `raw/` + `log.md` + index link. No second yes. Do not leave it chat-only. Do not change standings unless the owner also picks news lots.

## Articles on X (13 sept. 2026)
When the owner asks for an X/public article that rests on a Lattice analysis: same locked file-back, same turn, not chat-only.

## Delivery
Clear French: Base / News_14j / Affiché / Tête for five qualities. Prefer term **X bookmarks** (never « saved posts »).

## LOCKED 1 oct. 2026 — graphique mensuel des mesures
Chaque mois, pour le critère demandé (budget verrouillé ; IA, 5e critère, même format) : graphique type `assets/budget-mesures-septembre-2026.png` / `wiki/GraphMensuel.md`. Pas de barres. Pas de notes sur l’image. Titre : point de vue d’un mileiste français. Expliquer les 10 mesures. Drapeau en haut à droite. « Mileistes français » en bas à gauche. Le 1er du mois, ou le premier compile du matin d’un mois nouveau, produire ce graphique pour le critère en vue. Ne pas effacer les verrous déjà écrits.
