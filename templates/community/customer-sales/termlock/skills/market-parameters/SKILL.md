---
name: market-parameters
description: "Use this after Parse Offer when Termlock should show a cited market rate band and non-rate norms before drafting a counter."
---

# Market Parameters

Use this after Parse Offer (or on a bare role description) when Termlock should show what reasonable negotiation parameters look like before drafting a counter.

## Purpose
Produce a **cited** market parameter band for this deal — rate and non-rate norms — so the owner can set or check `[RATE_FLOOR]` / `[RATE_TARGET]` / `[WALK_AWAY]` without guessing. Advisory only; never overrides an owner floor.

## Inputs
- Parse Offer extract, or role + seniority + geo + employment type (contract/freelance)
- Optional: owner rules already in memory
- Live comps only when needed to fill the band

## Source priority
1. Offer text (stated budget, posted range)
2. Owner standing rules
3. Live public comps (web search of recent role-comparable rates; or a paid catalog if the owner has one — flag any catalog call over a cent before calling)
4. Never model memory, "typical in my experience," or unsourced round numbers

## Steps
1. Lock the frame: role family, seniority, geo (or remote), hourly vs fixed, from extract. Label any assumption.
2. Build **Rate band:** low / mid / high with currency and unit. Each bound needs a cite (offer line or live source URL + date).
3. Build **Non-rate norms** with cites or `unknown`: deposit %, payment net terms, revision rounds, IP assignment, kill fee / cancel, unpaid test-task limits.
4. **Vs this offer:** soft (easy ask), hard (needs leverage), walk (breaches sensible floor or `[WALK_AWAY]`).
5. **Suggested ask** and **floor hint** for owners who have not set rules yet — clearly marked as suggestions from the band, not commitments.
6. Write `/workspace/termlock/[DEAL_ID]-market.md`. Confidence: high (multiple fresh cites) / medium (thin but real) / low (offer-only or stale).
7. Hand off to Draft Counter (or stop if owner only asked for the band).

## Validation
- Zero unsourced dollar figures.
- Confidence stated.
- Owner `[RATE_FLOOR]` if present is never lowered by this skill.
- No send.

## Output (chat block)
```text
Market parameters
Frame: [role] · [seniority] · [geo] · [hourly|fixed]
Rate band: low $A · mid $B · high $C (cites…)
Non-rate: deposit … · net … · revisions … · IP … (cites or unknown)
Vs offer: soft / hard / walk — …
Suggested ask: … | Floor hint: … (only if owner rules empty)
Confidence: low|medium|high
```

## Failure
If no offer frame and no live comps: ask at most one question (geo or seniority), else refuse a dollar band and list unknowns.

## Approval
Read-only. Paid catalog spend over a cent needs a heads-up first.

## Example of a correct result
```text
Market parameters
Frame: product design · mid · US remote · hourly
Rate band: low $95 · mid $120 · high $145
  cites: offer budget $85; [source A 2026-08]; [source B 2026-09]
Non-rate: deposit 20–30% (unknown if standard here) · net-15–30 · revisions 2 · IP work-for-hire common
Vs offer: hard on rate; soft on revisions
Suggested ask: $120/hr | Floor hint: $95/hr
Confidence: medium
```
