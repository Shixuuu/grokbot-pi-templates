---
name: ethan-research-quality-gate
description: "Use when an existing research pack needs an independent audit of citation coverage, freshness, source quality, contradictions, unsupported claims, and decision usefulness, returning PASS, REVISE, or BLOCK."
---

# Ethan Research Quality Gate

Independently audit a research pack. Calculate citation coverage. Flag every important factual claim without support. Return PASS, REVISE, or BLOCK. Do not rubber-stamp work you authored in the same pass without listing residual risk.

## When to use

Use after a brief, claim check, competitor matrix, trend log, or any research pack is drafted and before it is handed to writing or the user as decision-ready. Do not use to perform the original research (`ethan-deep-research-brief` and siblings). This skill audits; it does not replace the source work except for spot-checks of cited links.

## Required inputs

- The pack to audit (full text or structured output)
- Original question, audience, geography, time window, and decision
- Source constraints used in the pack
- Whether the pack is destined for public use (raises the bar)

Do not require the author’s private notes. Never copy user identity, credentials, or unrelated private files into the audit.

## Source hierarchy

Re-grade the pack’s sources, do not inherit their self-grades blindly.

- **A:** primary/official
- **B:** reputable independent secondary
- **C:** unverified signal

Important factual claims need A where available and triangulation when consequential. Publication date and event date must both be present. Circular citations fail. X/social posts cannot be the sole support for a PASS.

Claims must stay **VERIFIED FACT / ESTIMATE / INFERENCE / UNKNOWN**. A guess labeled as fact is a defect.

## Allowed tools

- Default: native web search and browser/page fetch to open cited links and spot-check missing A sources
- Use Context.dev automatically when already available
- Treg and Ahrefs optional, never required
- Do not authenticate, install, connect, publish, contact, spend, or modify external systems
- Spot-check enough important claims to validate coverage; you do not need to re-research the entire topic unless the pack is BLOCK

## Steps

1. Restate the decision the pack claims to support.
2. Extract every important factual claim (names, numbers, dates, rankings, prices, legal/status statements).
3. Map each claim to a cited source, link, publication date, event date, and grade. Missing any field is a defect.
4. Open cited links. Confirm the source actually supports the claim. Flag title laundering, dead links, and circular chains.
5. Calculate **citation coverage** = supported important factual claims / all important factual claims. Report the fraction and the unsupported list.
6. Score freshness against the stated time window. Score source quality (share of A vs B vs C on important claims).
7. List contradictions inside the pack and against current A sources found in spot-check.
8. Score decision usefulness: does the executive answer follow from the ledger, and are UNKNOWNs visible?
9. Verdict:
   - **PASS** — coverage is complete for important factual claims; dates and grades present; no C-only proof on important claims; contradictions handled; useful for the stated decision
   - **REVISE** — fixable gaps, stale items, wording overreach, or missing triangulation
   - **BLOCK** — fabricated or unopenable key sources, systematic unsupported claims, or the pack is unsafe for the stated decision
10. Hand off. Do not publish the pack.

## Validation checklist

- [ ] Citation coverage is a calculated fraction, not a vibe
- [ ] Every important factual claim without support is listed
- [ ] Dead, circular, or mismatched citations are flagged
- [ ] Publication date and event date were checked
- [ ] Estimates and inferences are not counted as verified
- [ ] Public-facing destination raised the bar
- [ ] Verdict matches the worst systemic defect

## Output schema

```
STATUS: COMPLETE | PARTIAL | BLOCKED
VERDICT: PASS | REVISE | BLOCK
EXECUTIVE ANSWER: <whether the pack is safe to use>
FINDINGS:
- citation coverage: <supported>/<total> = <percent>
- freshness: <pass/fail notes>
- source quality: <A/B/C mix on important claims>
- decision usefulness: <pass/fail notes>
CLAIM LEDGER:
- claim | supported? | status | source | link | publication date | event date | source grade | defect
UNSUPPORTED IMPORTANT CLAIMS:
- <claim>
CONTRADICTIONS: <or none>
GAPS: <what must be fixed>
CONFIDENCE: high | medium | low
IMPLICATIONS: <use, revise, or stop>
NEXT HANDOFF: REQUESTER | COORDINATOR | WRITER | INDEPENDENT QA REVIEWER
```

## Failure, no-data, and stale-data handling

- Pack missing: BLOCK; nothing to audit
- Cited link dead or behind a new wall: treat that claim as unsupported
- Author provided no dates: REVISE at minimum
- Spot-check finds a contradictory A source: REVISE or BLOCK depending on materiality
- Tool outage prevents opening key citations: PARTIAL and do not PASS

## Approval boundaries

Never publish, contact anyone, spend, authenticate, connect an account, install software, expose private data, or modify an external system. This gate does not authorize public use. Public or consequential use still needs the designated QA and risk roles after a PASS.
