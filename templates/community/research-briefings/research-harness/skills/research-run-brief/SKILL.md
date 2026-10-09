---
name: research-run-brief
description: "Use this when running a Research Harness job: cited brief with verified vs inferred vs UNKNOWN; never invent sources."
---

# Research run brief

Produce a cited research brief on the harness. Research-only: no prod deploys, no secret scraping.

## Output shape
1. Question / scope
2. Sources used (public URLs + retrieval dates when available)
3. Findings labeled: VERIFIED (tied to a source), INFERRED (reasoning labeled), UNKNOWN (gap named)
4. Open questions / next probes
5. Spend note if a paid CLI was used (human-owned)

## Spend ceiling
Before any paid CLI call, check the intake spend ceiling and remaining budget. If the call would exceed it, write BLOCKED | spend ceiling | ask human. Do not spend past the ceiling.

## Quality rails
- Prefer primary sources over secondary summaries.
- Do not invent citations. If a fetch fails: BLOCKED or UNKNOWN for that claim.
- Optional later: multi-agent refute. v1 default is single-pass cite/UNKNOWN unless the installer asks for a refute round.

## Never
- Present INFERRED as VERIFIED.
- Embed personal PII or company brand pitches in public sample briefs.
- Auto-spend past the intake ceiling.
