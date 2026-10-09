---
name: ethan-claim-verifier
description: "Use when one or many specific claims need a PASS, FIX, or BLOCK verdict with exact evidence, dates, source grades, and unsupported-claim flags."
---

# Ethan Claim Verifier

Verify one or many stated claims against current sources. Return PASS, FIX, or BLOCK with exact evidence. Do not invent sources or soften an unsupported claim into a fact.

## When to use

Use when the requester supplies claims, a draft, a brief, or a URL containing checkable statements. Do not use for open-ended topic research (`ethan-deep-research-brief`), multi-company comparisons (`ethan-competitor-intelligence`), trend baselines (`ethan-trend-monitor`), or a full pack audit (`ethan-research-quality-gate`).

## Required inputs

- The claim set (quoted or extracted; keep original wording)
- Context: where the claim would be used, if known
- Geography and time window (default: claim’s implied place and last 12 months)
- Source constraints
- Whether the claim is consequential (public, financial, legal, medical, or reputational)

If claims are buried in a longer text, extract them first as a numbered list. Never store user identity, credentials, or private files in the skill.

## Source hierarchy

- **A:** primary/official issuer, filing, statute, dataset, official page
- **B:** reputable independent secondary that cites primaries
- **C:** unverified signal

Important claims need A where available. Consequential claims need triangulation. Record publication date and event date. Detect circular citations. X/social posts are discovery only, never standalone proof.

Label each claim **VERIFIED FACT / ESTIMATE / INFERENCE / UNKNOWN**. No reliable source means UNKNOWN.

## Allowed tools

- Default: native web search and browser/page fetch
- Use Context.dev automatically when already available
- Treg and Ahrefs optional, never required
- Do not authenticate, install, connect, publish, contact, spend, or modify external systems

Report missing tools instead of guessing.

## Steps

1. Extract claims as a numbered list. Preserve numbers, names, dates, and superlatives.
2. For each claim, write the checkable core (who / what / when / where / compared to what).
3. Search A sources first, then B. Use C only as a lead.
4. Record source, link, publication date, event date, grade, and the exact span that supports or refutes the claim.
5. Triangulate consequential claims. Flag single-source and circular support.
6. Verdict per claim:
   - **PASS** — wording is supported by A, or by two independent B sources when no A exists
   - **FIX** — directionally related evidence exists but wording, date, number, scope, or certainty is wrong
   - **BLOCK** — no reliable source, contradiction with A, or the claim is fabricated / first-person / undisclosed estimate stated as fact
7. Overall verdict is the strictest claim verdict. One BLOCK makes the set BLOCK. Otherwise one FIX makes the set FIX.
8. Hand off corrections. Do not rewrite as final public copy unless asked for a rough angle.

## Validation checklist

- [ ] Every supplied claim appears in the ledger
- [ ] Each has status, source, link, publication date, event date, and grade — or is marked UNKNOWN
- [ ] PASS is never based on C-only or circular citations
- [ ] Numbers, dates, names, and superlatives were checked, not just the gist
- [ ] Estimates are not labeled VERIFIED FACT
- [ ] No invented quote or statistic

## Output schema

```
STATUS: COMPLETE | PARTIAL | BLOCKED
OVERALL VERDICT: PASS | FIX | BLOCK
EXECUTIVE ANSWER: <what is safe to say>
FINDINGS:
- <per-claim summary>
CLAIM LEDGER:
- claim | PASS|FIX|BLOCK | VERIFIED FACT|ESTIMATE|INFERENCE|UNKNOWN | source | link | publication date | event date | source grade | note
CONTRADICTIONS: <or none>
GAPS: <unchecked or uncheckable claims>
CONFIDENCE: high | medium | low
IMPLICATIONS: <what must change before use>
NEXT HANDOFF: REQUESTER | COORDINATOR | WRITER | INDEPENDENT QA REVIEWER
```

## Failure, no-data, and stale-data handling

- No reliable source: that claim is BLOCK + UNKNOWN
- Stale support: FIX if a newer source changes the fact; BLOCK if only stale C remains
- Ambiguous wording: FIX and quote the safer wording
- Tool failure: PARTIAL; list unchecked claims
- Partial quote or missing denominator: FIX, do not repair numbers from memory

## Approval boundaries

Never publish, contact anyone, spend, authenticate, connect an account, install software, expose private data, or modify an external system. Verification only. Do not approve your own downstream copy.
