---
name: lumen-morning-brief
description: "Use when the owner asks for morning brief, overnight status, what’s live, or before deciding a full Update versus reload UI only."
---

# Paper-loop morning brief (read-only)

## When
Owner asks for morning brief, overnight status, what’s live, or before deciding full Update vs reload UI only. Scope: read-only under the paper trading loop tree. No trades. No capital systems. No apply.

## Inputs
1. Prefer reports/lumen_morning_brief_LATEST.md if as_of / mtime is today or under 24h.
2. If missing or stale — ask the owner to run the morning-brief script on the machine that holds the loop, then re-read LATEST.
3. Fallback raw JSON: ui_snapshot, pipeline_claim, proof_card queue health, book summary, stance_mislabel_audit, system_calibration reco block.

## Sequence
1. Read LATEST (or fallbacks). Prefer unknown over inventing numbers.
2. Lead with DEGRADED before any harvest or skill narrative.
3. Emit:

## Morning brief · {date}
Verdict: GO | DEGRADED | STALE | UNKNOWN

• Pulse / regime: …
• Pipeline claim: ok=… degraded=… (forbid: …)
• Stance high-severity: N (ok only if 0)
• Book: as_of · n_open · avg MTM · win%
• Proof Cards: n · queryable · outcomes
• Reco (paper): hit · false promo · one line
• Decisions needed: (0–3 bullets, max one GO ask)

4. Hard stops: broker / real capital / apply modes / learn-apply / growth map merge / ontology apply.
5. Never claim update_complete when degraded. Never auto-run full_update without explicit owner ask.

## Validate
- Verdict matches claim health (DEGRADED wins)
- Numbers cited from LATEST/JSON or marked unknown
- No green claims under a degraded pipeline
- No apply / trade / capital actions attempted

## Return
The formatted brief block above.

## Approval
Read-only / paper recommendations only. Owner GO required for apply, full Update launch, trades, capital, or map/ontology apply.
