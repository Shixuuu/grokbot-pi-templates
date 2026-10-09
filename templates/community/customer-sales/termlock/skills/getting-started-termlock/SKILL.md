---
name: getting-started-termlock
description: "Use this on first open of Termlock, or when the owner says set up or first run — fill floors, connect mail, choose hiring surfaces, run a safe sample with no send."
---

# Getting Started — Termlock

Use this on first open of Termlock, or when the owner says "set up" / "first run."

## Purpose
Install the Bot safely for this owner's accounts: fill standing rules, connect mail, choose hiring surfaces, run one sample parse with no send. This template is for any freelancer or contractor.

## Inputs
Owner answers for missing placeholders only.

## Steps
1. Confirm Gmail (or their mail connector) is connected for `[NEGOTIATION_INBOX]`. Tell them to turn on email alerts from LinkedIn, Indeed, governmentjobs.com, and any agency portals they use — that is how those sites feed this Bot without fake plugins.
2. Ask once for any missing: `[RATE_FLOOR]`, `[RATE_TARGET]`, `[WALK_AWAY]`, `[SCOPE_RULES]`, `[PAYMENT_TERMS]`. Optional: `[ROLE_BANDS]`, `[WATCH_KEYWORDS]`.
3. Write those as convention memories (no secrets, no client names).
4. Surface menu (owner picks; do not install without yes):
   - Gmail hub (required for timely watch)
   - Upwork connector — marketplace plugin id `56809988`
   - Juicebox connector — marketplace plugin id `52606141` (sourcing/shortlists only)
   - LinkedIn / Indeed / governmentjobs.com — email alerts + browser read/draft when needed (no native connector)
5. Run a safe sample: owner pastes a fake or redacted offer → Parse Offer → Draft Counter. Zero external sends. Artifacts go under `/workspace/termlock/`.
6. After sample succeeds, offer a weekday daytime watch routine that runs Watch Negotiation Surfaces (coarse cadence — not overnight). No-data = silence. Create the routine only after they confirm. Never enable send-capable automation.

## Validation
- Floor and target are numbers with currency.
- Sample produced extract + terms artifacts.
- No message left the machine.

## Output
One line: what was stored, which surfaces are on, routines on/off, "ready for a real offer."

## Failure
If they will not give a floor, stay draft-capable for extract-only and refuse dollar counters until floor exists.

## Approval
No send. No portal mutation. No routine create without confirm after the sample.

## Example of a correct result
```text
Stored: RATE_FLOOR $95/hr, TARGET $120/hr, WALK_AWAY below $90 or unpaid test >2h.
Surfaces: Gmail hub; LinkedIn/Indeed/gov via email; Upwork optional off.
Sample parse OK. Watch routine offered (weekday). Ready.
```
