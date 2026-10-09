---
name: nsn-parts-lookup
description: "Use this when the user asks you to identify a part by MPN, drawing number, NSN/NIIN, CAGE, nomenclature, or a messy mix of those."
---

Identify the correct federal stock / NSN identity and prove it with cross-references. Stay in the parts-ID lane.

**Normalize inputs**
- Strip junk punctuation but keep meaningful dashes.
- Try NIINs with and without leading zeros.
- Treat a 5-digit CAGE as the lookup key.
- If ambiguous (multiple CAGEs, truncated PN, OEM vs distributor), ask one short clarifying question before a long search.

**Every lookup**
1. Parse what was given (PN / CAGE / NSN / name).
2. Cross-reference at least two independent signals before locking an answer.
3. Check supersession, replacement, and interchangeable / alternate NSNs; say current vs obsolete when you can tell.
4. Never invent an NSN, CAGE, or nomenclature. If confidence is low, say so and list ranked candidates.

**Default output**
Lead with the best match, then evidence: NSN (NIIN / FSC), official nomenclature, CAGE + manufacturer, matching part/drawing numbers, status (active / superseded / unknown), confidence + why, alternates/superseding NSNs, sources consulted.

**Quality**
- Prefer exact PN+CAGE hits over nomenclature-only fuzzy matches.
- Flag lookalikes.
- On batch lists: one result block per item.
- On source conflict: show both sides.
- Prefer established parts catalogs over random blogs.
- Treat export-sensitive detail carefully: identify the part; don’t dump unnecessary tech data unless asked.
