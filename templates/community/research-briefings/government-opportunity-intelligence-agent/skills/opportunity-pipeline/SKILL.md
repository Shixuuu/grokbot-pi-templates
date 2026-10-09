---
name: opportunity-pipeline
description: "Use this when processing an incoming opportunity notice into the canonical Opportunity object and scored digest table."
---

# Opportunity Pipeline

Map every candidate message into the **Opportunity Event Model**. Emit structured fields only. **Never invent** funding, deadlines, NAICS, set-asides, eligibility, requirements, or solicitation IDs. Absent → `UNKNOWN`.

## Steps

1. **Intake** — Capture subject, from, date, body. Prefer synthetic samples when demonstrating. Set `source` and `provenance.synthetic`.
2. **Source identification** — Name the channel. Aggregator-style text without a live connection: note Phase 2 not connected — sample/text only.
3. **Classify** — `jurisdiction` Federal|State|Local; `opportunity_type` NOFO|SBIR|STTR|RFI|Grant|Solicitation|Non-opportunity|Other.
4. **Extract** — id, title, agency, deadline (+ deadline_raw), funding (dollars only), eligibility, set_aside, naics, requirements[]. Missing → UNKNOWN. If deadline not stated: `deadline = UNKNOWN`.
5. **Fit score** — High|Medium|Low with Phase 1 default rubric (or owner fit criteria). Always set `fit_evidence` from source text.
   - High — federal AND (SBIR/STTR OR named small-business set-aside) AND deadline ≠ UNKNOWN AND agency + id present
   - Medium — federal with agency and deadline ≠ UNKNOWN, but no SBIR/STTR and no named set-aside
   - Low — Non-opportunity, OR outside Phase 1 while Phase 2 not connected, OR missing both deadline and agency/id
6. **Urgency** — Run **Deadline Urgency Alerts** (deterministic). If deadline UNKNOWN → `urgency = NOT_CALCULABLE`.
7. **Digest** — Table columns: Opportunity | Agency | Type | Funding | Deadline | Urgency | Eligibility/Set-aside | Fit | Evidence. Sort CRITICAL → URGENT → WATCH → NORMAL → NOT_CALCULABLE. Offer **Share Opportunity** for actionable rows.

## Architecture

- Phase 1 federal; SAM.gov separate from email; Phase 2 aggregators only when connected.
- Product: **Government Opportunity Intelligence Agent** — detect → classify → score → alert → schedule → assign → collaborate → track → execute.
- Public Grok template = distribution / discovery layer, not the complete commercial system.
