---
name: property-scanner
description: "Use for Property Scanner scans, numbered home follow-ups, preference updates for future scans, and scheduled scan runs after onboarding."
---

# Property Scanner

Use whenever the user wants a property scan, a numbered follow-up on a delivered home, preference updates for future scans, or a scheduled Property Scanner run. ZillAPI is the only property-data source. If setup is unfinished or ZillAPI is missing, run [property-scanner-onboarding](sand-workflow:property-scanner-onboarding) first.

## Every scan

1. Read the user's **current** saved profile and state (preferences, bounds, exclusions, prior deliveries, **credit usage**, **sold-comp cache**). Never use a stale preference copy baked into a routine.
2. Check credit budget (below). Stop before exceeding remaining budget.
3. Fetch with ZillAPI using the fixed sequence below.
4. Compare matching active listings with nearby completed sales (and Zestimate when available) using the **relaxed** screening rules below.
5. Qualify when asking price is at least **3% below** the reference price (see formula). Price cuts support a recommendation; they **cannot qualify a home alone**. A reference gap is not an appraisal or guaranteed return.
6. Surface listing concerns. Deliver: main-chat TLDR, separate numbered property/photo messages, then easy numbered follow-up. Save explicit preference changes for subsequent scans.
7. Update state: observations, delivered IDs, number→ID mapping (replace mapping only when delivering a new shortlist), credit counters, sold-comp cache metadata. Partial failures must not erase older observations.

Keep profile/state outside this shared skill. Save documents as Markdown when useful.

Do **not** expand the geographic search solely to manufacture five matches. Return fewer (or zero) when needed. Prefer useful shortlists under these relaxed screens over empty strict runs.

---

## Credit budget (hard caps)

Track usage in the user's scanner state for the current ZillAPI billing period.

| Cap | Limit |
| --- | --- |
| Active search size | **10** listings (truncate upstream results; do not request a wider pull to pad) |
| Sold search size | **20** listings |
| Credits per active scan | **≤ 20** (search + detail lookups + supplemental calls for actives) |
| Credits per sold refresh | **≤ 40** (sold search + detail lookups + supplemental) |
| Billing-period total | **≤ 900** credits across manual scans, routines, and follow-ups |

Before each ZillAPI call: estimate cost, ensure `used + cost ≤ remaining`, and stop cleanly if the next call would exceed a cap. Prefer reusing cached sold comps and already-fetched details. Record actual spend after each call when known; if the API does not return cost, count 1 credit per successful tool call (address lookup 3 if documented).

First-scan onboarding budget is **≤ 60** credits total (see onboarding skill).

---

## ZillAPI fetch sequence

MCP: `https://api.zillapi.com/mcp`. Prefer host OAuth; API key when OAuth is unavailable. Discover live schemas each run.

1. Freeze saved criteria, bounds, and market-local run date.
2. **Active listings:** search within bounds; keep at most **10** results (fixed supported sort, else upstream default). Apply the buyer's price cap / beds / type filters to actives only.
3. **Sold comparisons:**
   - If a sold-comp cache exists for these bounds, is less than **7 days** old, and still usable → **reuse it** (do not spend a sold refresh).
   - Else refresh: search up to **20** sold listings in those bounds (**do not** apply the buyer's price cap to sold homes). Fetch details within the **40-credit sold-refresh** cap. **Merge** new records into the cache; drop/recheck by age (180-day window) and similarity rules. Stamp `sold_cache_refreshed_at`.
4. Deduplicate by `zpid`. Fetch full details **one request at a time** for actives that need them, within the **20-credit active-scan** cap. Search cards are not full records; reuse retrieved details.
5. Apply profile hard filters to active homes (price/beds/type **and** feature hard exclusions from description + `resoFacts` / `propertyFeatures` / `parking` / HOA fields). Verify current for-sale status and asking price. For comparisons, prefer **actual completed-sale prices**. If a Sold event has no closed price, use the last pending/contingent/list ask within **120 days before** the sold date as a **proxy sold price** and flag that comp **Needs review**.
6. Read Zestimate, history, photos, description, and facts from details. Call `get_zestimate` only when needed and budget allows. If Zestimate is missing, qualify using **sold_reference alone** (still flag **Needs review**).

Keep the search bounded — do not widen bounds just to pad the shortlist.

---

## Comparable-home selection (relaxed)

Apply hard buyer filters first; retain explicit soft-preference misses for ordering. Unknown facts cannot satisfy a **required** buyer filter.

For each active home, retain sales meeting these **relaxed** screens:

- Same property type; within **2.5 miles**; closed in the preceding **180** calendar days
- Bedroom count within **±1**; bathrooms within **±1.0**; living area within **±30%**; year built within **±30** years when both known (skip year check if either missing)
- Lot size: apply **0.4×–2.5×** only when **both** lots are known; otherwise skip lot filter
- Exclude obvious non-market transfers when labeled; missing amenity/neighborhood text stays unresolved
- Missing core fields (sold price after proxy rules, sqft, beds) disqualify a sale
- Deduplicate by property ID, exclude the subject, latest verified closed sale per ID
- Choose up to **five** by: distance, proportional size difference, sale recency, then numeric ID
- Require at least **1** comparable (**prefer 2+** when available). **Never** select comparisons by the prices that produce the largest gap

Mark the result **Needs review** when any comp used a proxy sold price, when only 1 comp is available, or when Zestimate was missing.

---

## Formula and qualification (relaxed)

```text
sold_reference = median(sold price / sold living area) × subject living area
reference = min(sold_reference, Zestimate) if Zestimate present else sold_reference
gap_dollars = reference − asking price
gap_percent = 100 × gap_dollars / reference
qualifies = gap_percent >= 3
```

Keep unrounded numbers for qualification and sorting; display percentages to one decimal, half-up.

Put qualifying homes with explicit major repairs, cash-only restrictions, land leases, short sale, proxy comps, single-comp, or missing Zestimate in a **Needs review** group after cleaner qualifying homes. Also flag sold-price spread when `(max $/sqft − min $/sqft) / median $/sqft > 0.40` (with 2+ comps).

Within each group, order by:
1. Fewer explicit soft-preference misses
2. More comps (desc)
3. Gap percentage descending
4. Gap dollars descending
5. Qualifying recent-cut percentage descending
6. Lower numeric property ID

---

## Price-cut baseline

Only consecutive asking prices inside the **current continuous for-sale episode** count:

```text
cut_dollars = previous_ask − current_ask
cut_percent = 100 × cut_dollars / previous_ask
recent_cut = cut_percent >= 3 AND change occurred 0–30 calendar days ago
```

A sale, withdrawal, rental episode, or relisting breaks the baseline. Ambiguous history = unknown. Do **not** compare today's ask with an old sale or aggregate across relistings. A subsequent increase cancels the latest-cut signal. A price cut alone never qualifies a home.

Retain comps, source facts, cut events, and review reasons for follow-ups.

---

## Delivery

Send in the **main chat** (not a reply thread): one short TLDR, one separate message per selected home with its actual photo, then a closing invitation. Do not collapse homes into a table.

**TLDR:** how many homes were checked, search area/budget, how many stood out, and the top pick's strongest evidence. Note when results are **Needs review** under relaxed screens. Mention credits/budget only if the run hit a cap or the user asked.

**Each numbered message:**
- Address; asking price; beds, baths, living area
- Sold comparison and Zestimate (or “Zestimate unavailable — used sold reference only”)
- Comp count and whether proxy prices were used
- A verified price cut when useful; any material concern must stay visible
- **Buyer highlights** when present in payload (1–3 short facts): HOA fee or “no HOA listed”, garage/parking, stories/levels, HVAC (heating/cooling), private yard, primary-on-main / kitchen standouts, year built, lot size. Prefer structured `resoFacts` / `propertyFeatures` / `parking` / HOA fields over guessing from marketing fluff. Skip if unknown.
- Soft-pref hits/misses when the buyer set them
- The cover photo for that property ID, else another returned photo; if none works, say “Photo unavailable.”

End with: **Want a closer look? Reply with a home's number.**

Save the delivered number→ID mapping. A numbered reply uses that mapping — **not** a new search. No clickable Zillow listing links.

On a successful empty scan, say so; do not pad. A failed scan (budget, auth, API) is not an empty successful scan.

---

## Learning from feedback

Update the user's profile, not this skill:

- “Exclude homes with pools” = hard filter. “I'd prefer no pool” = soft preference. A question about a pool is neither.
- Feature prefs are matched against description + `resoFacts` / `propertyFeatures` / `parking` / HOA. Coverage is uneven (pools often remarks-only; HOA often absent). Unknown cannot satisfy a **required** filter.
- “I don't like #2” excludes that listing from future unsolicited recommendations; **ask what bothered them** before generalizing to other homes.
- Replace conflicting old preferences with explicit new ones; briefly acknowledge. Keep one-off requests separate.
- Preference feedback must **not** silently change valuation formulas or thresholds beyond what the user asked.

---

## Routine continuity

When running on a schedule: invoke this skill, read current profile/state/credits/sold cache, search/rank within caps.

- Refresh sold comps only if cache is missing or ≥ **7 days** old.
- Send newly qualifying homes and meaningful changes to previously sent homes.
- Stay silent when nothing changed unless requested.
- A home absent from a capped search is **not** proof it sold — verify before reporting (budget permitting).
- If remaining period credits cannot fund a minimum useful run, stay quiet once or send one short budget note, then skip.

If profile setup is incomplete or ZillAPI is unauthorized, stay quiet on scheduled runs (or report the blocker once); do not invent listings.
