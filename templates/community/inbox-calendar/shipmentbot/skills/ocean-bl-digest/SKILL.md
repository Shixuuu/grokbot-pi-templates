---
name: ocean-bl-digest
description: "Use this when compiling a status digest for ocean bills of lading / containers and emailing or posting the summary."
---

# Ocean BL digest

## Goal
Turn a list of ocean BLs into a short exception-first status digest. Always record which website each BL is checked on. Always compare to the previous digest.

## Registry
Keep a living registry (one card per BL) with: BL number, container, vessel/voyage, POL/POD, consignee/notify, material, BL gross kg, start date (BL date, else on-board / laden / shipped), destination-reach date once known, the fastest and cheapest line on that POL–POD (from the last route review, including the fastest line’s typical days), and an ordered source list (which site, which identifier to enter). Update last status and last-checked time after every run. Recipients live in the registry header. Keep a last-snapshot file beside the registry so the next run can diff.

When a new BL is added, identify the issuer from the BL prefix / document, then pick sources:
- House BL from an NVOCC: that line’s cargo tracker (often needs BL **and** container).
- Destination terminal: the actual discharging terminal at POD (do not assume one terminal; search others if the first misses).
- Vessel AIS is supporting context only, not gate-out proof.
- A **draft BL** may have no carrier or terminal record until it is issued. Keep checking mapped sources; do not treat “no record yet” as an exception by itself.

## Check order per BL
1. Open the mapped sites from the registry. Do not skip a mapped site; do not invent events.
2. Capture: location, last event + time, holds/releases, DO, gate-out.
3. For boxes **currently in a destination yard**, pull that terminal’s draft invoice / dues calculator for this visit (see Demurrage).
4. Diff vs last snapshot. Mark **changed** vs **unchanged**.

## Digest format
Always a table. Email HTML table plus a markdown/plain-text table fallback.

Subject: `BL status — {dd Mon yyyy} ({N} exception|{N} exceptions)` or `BL status — {date} (all clear)`

**Vs yesterday:** if any row changed, put ONE sentence above the table naming what moved (holds, gate-out, location, ETA, DO, demurrage). If nothing changed at all, do not write that sentence.

Columns, in this order:
| BL | Container | Material | BL kg | Status | Location | Last event | Days | Fastest | Cheapest | Holds | Demurrage | Change | Source |

Material: short cargo name from the BL.
BL kg: gross weight **from the BL**, total for the whole BL (not per-container, not terminal weighment). Repeat the same BL total on every container row of that BL. Format with thousands separators.

**Days:** calendar days from the start date.
- Start date: the **BL date** when it is on the document. If missing, use on-board / laden / shipped. Store it on the registry card.
- Still at sea: days from start date **to the digest date**. This number ticks up each morning.
- Reached destination (first confirmed POD arrival or terminal discharge): days from start date **to that reach date**, then **freeze**.
- Same number on every container row of that BL unless boxes truly reached on different dates.
- No start date yet: `—`.
- Format as a whole number. Abbreviations key: at sea = start→today; arrived = start→POD.

**Fastest / Cheapest:** the best shipping line on that BL’s POL–POD, from the last route review on the registry card. Not a live freight quote each morning.
- Cheapest cell is the **line name only**. If the BL is already on that line, quote the same name.
- Fastest cell is the line name, plus how many days faster that line is than **this BL**:
  - This BL’s transit: arrived = frozen Days; still at sea = start date to current POD ETA.
  - Fastest typical days: the review figure on the registry card.
  - Gap = this BL’s transit minus fastest typical days. If gap ≥ 1: `{line} {N}d faster`. If gap is 0 or the BL is already that line: quote the same line only. If no start date or no ETA yet: line name only.
- Same values on every container row of that BL. Do not invent dollar freight.

**Demurrage:** rough **port** dues for boxes still in the destination yard only. At-sea and delivered rows are `—`.
- Pull the discharging terminal’s draft invoice for **this visit**. Scope by BL + container when the terminal supports it. Never publish a container-only total if that box number has prior visits.
- If the calculator fails for one box of a same-size, same-discharge sister set, copy the clean sister and mark the cell as an estimate.
- Local currency primary. This is terminal storage / dues, **not** ocean-line demurrage or detention. Footnote the source, paid-through date, and that tax may already be in the invoice.

Change column: if that row is the same as yesterday’s snapshot, the cell is exactly `No change`. If it moved, a short phrase. Do not leave Change blank. A new Demurrage figure that moved vs yesterday counts as a change. Days ticking up on an at-sea row is **not** a Change by itself. An ETA slip that changes the Fastest “Nd faster” figure **is** a Change.

Status values: `Needs action` | `On track` | `Delivered` | `No refresh` (site down).
Sort rows: Needs action first, then On track, then Delivered.
Holds: short codes or `—` if none.
Source: short site names from the registry.

One-line footnotes under the table only when needed.
Always end with an **Abbreviations** key for codes that appear in *this* digest only.

Times in the user’s local zone, labeled. Do not invent events. If a site is down, still include the row with Status `No refresh` and name the site.

## Delivery
Send via the Gmail connector to every address listed in the registry header, all on To of one email, unless the user named another channel. Keep it one table plus the abbreviations key, scannable on a phone. If the user already sent a given digest themselves, do not send a duplicate of that same snapshot.

When the digest has container or clearance cost figures (including yard demurrage), pass those figures to the cash-flow owner as inputs only. Do not forecast cash in this skill.
