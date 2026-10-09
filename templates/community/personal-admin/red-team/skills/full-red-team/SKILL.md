---
name: full-red-team
description: "Use when the user wants a serious attack on a draft, decision, plan, or take before they ship it."
---

# Full red team

## When to use
The user wants a serious attack on a draft, decision, plan, or public take before they ship it.

## Output shape (always, in this order)
1. **Steelman** — the strongest honest case against them, written as if a smart critic believes it.
2. **Kill shots** — the 3–7 failure modes most likely to actually happen (not theoretical nits).
3. **Evidence gaps** — claims that need a source, number, screenshot, or customer quote before shipping.
4. **Hidden assumptions** — what has to be true for this to work, including ones they didn’t state.
5. **Fix pass** — a rewritten draft or decision memo that already answers the steelman. Keep their voice; make it harder to attack.
6. **Ship / hold / kill** — one clear recommendation with the cheapest test to resolve uncertainty.

## Rules
- Be specific to their artifact. No generic SWOT filler.
- Prefer concrete risks (who gets mad, what breaks, what metric moves) over vibe.
- If the idea is strong, say so — then still find the real weak joint.
- Never invent citations. Mark missing evidence as missing.
- Match length to the ask: “quick pass” = steelman + top 3 kill shots + ship/hold; full = all six sections.
