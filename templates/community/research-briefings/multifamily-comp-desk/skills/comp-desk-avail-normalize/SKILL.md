---
name: comp-desk-avail-normalize
description: "Use when scraping or ingesting multifamily competitor or subject-property websites, avails, or rent rolls into a normalized unit/floor-plan comps table with rents, concessions, amenities, and locators."
---

# Comp Desk avail normalize

Turn one property source (or a small closed set of competitor URLs / exports) into a source-linked avail comps table. No pricing advice. No outbound leasing outreach. Draft for a human asset or property manager.

## Stance
Operate like head of Asset Management at a scale multifamily firm: accurate, repeatable, adapter-flexible. Marketing sites change weekly. PMS-backed widgets rearrange DOM and endpoints. Do **not** hard-code one site's CSS forever. Re-discover the layout every run; treat last week's selector map as a hint, never gospel.

## Source priority (mandatory)
Rank and **label `source_tier`** on every row/book:

1. **Owner / PMS export / provided rent roll or avail** the user (or owner) supplies — **most authoritative**. Unit status, rents, and concessions from these beat every public marketing page.
2. **Official property website** (owner/operator marketing domain: `/floorplans`, `/availability`, `/apartments`) — primary public source for competitor comps when no export exists.
3. **Manager/brand microsite** for the same community (e.g. manager/brand property subdomain).
4. **Secondary aggregators** (secondary listing aggregators) — inventory hints only; lower confidence; re-check against #1 or #2 when possible.
5. **Apartments.com and similar ILS mirrors** — **last resort**. Often **403**; often **stale/syndicated**. Never treat as primary. If it 403s, report and move on — no retry loops or auth bypass.

**Conflict rule:** #1 beats everyone. Else official (#2) beats aggregators. Never average conflicting rents — note QC conflict.

## Pull path for websites (mandatory)
When the source is a website (tiers 2–5), **use a real browser / computer view** (interactive desktop browser), not curl-only or raw WebFetch alone:
- Open the official URL in the browser, accept cookies if needed for public pages, navigate floor-plan / availability views, and read what a human AM would see.
- Prefer in-page structured JSON/XHR visible to the browser session, then visible cards/tables.
- Use browser when Cloudflare, bot walls, empty fetch bodies, or JS widgets block static scrapers — that is the normal path for logging comps, not an exception.
- Still **do not bypass logins, CAPTCHAs, or paywalls**. If credentials are required, stop and ask the user for an export or cleared access.

Static fetch may be used only as a quick probe; if it fails or looks thin, **escalate to browser immediately**.

## When to run
- User pastes property URLs, avail PDF/CSV/Excel, PMS/rent-roll export, or screenshots.
- User wants unit numbers, floor plans, asking rents, concessions, amenities, occupancy proxies.
- First pass before effective-rent or cadence skills.

## Hard walls
- Never invent unit numbers, rents, sf, or amenity flags. Missing → blank + `open question` / `not stated`.
- Label every numeric claim: `reported fact` | `bounded inference` | `open question` + locator.
- Marketing-site occupancy = **proxy** only; lease-roll truth only from tier-1 rent roll / PMS the user identifies as such.
- No auth bypass. Draft only. No outbound leasing outreach.
- GFM tables need `| --- |` separator rows.

## Inputs (accept any)
1. Owner/PMS export, rent roll, or avail file (**preferred when present**)
2. Official property / floor-plan / availability URLs
3. Pasted rate sheet / screenshots
4. Optional: subject identity, comp set, as-of date, total units
5. Aggregator URLs only as fallback or discovery aid

## Method — adapter-flexible pull
1. **Identify the property** — name, wing/side if split, address, as-of (America/Chicago), suspected stack.
2. **If tier-1 export exists, normalize it first** and treat website pulls as cross-check only.
3. **Else open the official site in browser** — structured data → visible cards; map fields by meaning.
4. On adapter drift, re-map and note it; still deliver.
5. Only if official is walled/incomplete after browser attempt → manager site → one secondary aggregator for gaps. Skip apartments.com unless user requires it.
6. Normalize rows with `source_tier`: `owner_export` | `official` | `manager_site` | `aggregator`.
7. Parse concessions; amenity flags only when clear.
8. Occupancy proxy if computable; prefer tier-1 denominator/numerator when present.
9. QC — outliers, duplicates, tier conflicts.

## Co-branded / multi-wing communities
Two sides with slightly different quality (e.g. C vs R): separate avail books or a `wing` column; do not erase the quality split.

## Normalized row schema
| Field | Notes |
| --- | --- |
| as_of | Pull timestamp |
| property_name | Include wing/side if split |
| source_url | Canonical page or export filename |
| source_tier | owner_export / official / manager_site / aggregator |
| granularity | unit or plan |
| unit_id / plan_name / beds / baths / sf | As stated |
| asking_rent | Monthly; ranges as rent_low/rent_high |
| availability / concession_raw | Exact text |
| amenities / wd_in_unit / fireplace / view / outdoor | Tags or yes/no/not stated |
| label / locator | Assertion label + locator |

## Output shape

```markdown
# Comp avail book — [property or wing] — [as-of]

## Source
- Property / wing:
- Tier-1 export used?: yes/no (filename)
- Official URL:
- Pull path: browser computer view / export parse / static probe+browser
- Source tier for rents:
- Adapter drift:

## Coverage
- Plans / unit rows / plan-only
- Total units + marketed available + occupancy proxy (or open question)

## Avail table
| as_of | property | unit_id | plan | beds | baths | sf | asking_rent | availability | concession_raw | wd_in_unit | fireplace | view | outdoor | source_tier | locator |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | … | … | … | … | … | … | … | … | … | … | … |

## Concession notes / Amenity distinctions / QC / Open questions / Sources
```

## Done means
Tier-1 used when provided; website comps logged via browser when needed; every claim labeled with locator; editor can spot-check.
