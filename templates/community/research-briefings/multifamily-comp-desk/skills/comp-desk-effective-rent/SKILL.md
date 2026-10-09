---
name: comp-desk-effective-rent
description: "Use when converting asking rents and concession strings from a Comp Desk avail book into explicit effective-rent figures, including optional fees and lease-term matrices with labeled assumptions."
---

# Comp Desk effective rent

Turn asking rents + concession text into **effective rent** figures with an explicit formula card, including **fees** and **lease-term matrix** when stated. No leasing recommendations. Draft for a human AM / PM editor.

## Source priority
1. Owner/PMS export or provided rent roll (most authoritative).
2. Official property website — pull with **browser / computer view** when logging comps (not curl-only).
3. Manager microsite → secondary aggregators (lower confidence) → apartments.com last resort.
Prefer inputs with `source_tier` owner_export or official. Never average conflicts.

## When to run
- User has a Comp Desk avail book, avail table, or pasted rents with specials.
- User asks net / effective after concession, **by lease term**, or net of recurring fees.
- Cadence or IC packs need comparable net rents across comps.

## Hard walls
- Never invent concession or fee terms. Unparseable → `open question` (keep asking rent; do not assume 0).
- State formula + lease-term assumption on every output.
- Default lease term = **12 months** unless concession or user specifies otherwise.
- Recurring fees enter **ER_net** only when user asks for fee-inclusive net or when building the fees section — always show **ER_gross** (rent+concession only) and **ER_net** (optional) separately.
- Label every figure. Draft only. GFM separator rows.

## Default formulas (state if overridden)
Asking rent \(R\), term \(T\) months, free months \(F\), one-time concessions \(C\):

\[
ER_{gross} = \frac{R \times (T - F) - C}{T}
\]

Optional monthly recurring fees \(M\) (trash, pest, amenity, parking, liability if mandatory):

\[
ER_{net} = ER_{gross} + M
\]

- Percent-off for first \(N\) months → convert to $ total before applying.
- Rent ranges → ER_low / ER_high separately.
- Sitewide banners → apply only to covered rows; note rule.
- Waived admin/app fees → in \(C\) only when included in ER_gross; else list under fees noted.

## Lease-term matrix
When the source shows different asks or specials by term (7/10/12/14-mo, etc.), output a **term × plan** matrix of ER_gross (and ER_net if fees known). Do not collapse to 12-mo only when other terms are stated.

## Method
1. Take avail rows (prefer Comp Desk avail normalize).
2. Parse concession_raw + fee schedule text.
3. Compute ER_gross; ER_net if \(M\) known; term matrix if multi-term.
4. Output formula card + tables.

## Output shape

```markdown
# Effective rent card — [property or set] — [as-of]

## Formula
- ER_gross = …
- ER_net = ER_gross + M (if used)
- Default term / overrides:
- Fees in ER_net?: list

## Results (default term)
| property | unit_id | plan | asking_rent | concession_parsed | term | ER_gross | ER_net | ER_psf | label | locator |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … | … | … | … | … | … |

## Term matrix (if available)
| plan | term_mo | asking | concession | ER_gross | locator |
| --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … |

## Fees noted (not invented)
| fee | amount | mandatory? | in_ER_net? | locator |
| --- | --- | --- | --- | --- |
| … | … | … | … | … |

## Unparseable / open questions
- …

## Sources
- …
```

## Done means
Editor can recompute any ER from asking + parsed concession + fees + stated formula in under a minute.
