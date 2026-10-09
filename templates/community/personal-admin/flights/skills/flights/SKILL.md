---
name: flights
description: "Use this when the user wants Skyscanner flight-search URLs generated from a plain-English trip (origins, destinations, date ranges, one-way or round-trip)."
---

# /flights

Turn a plain-English flight request into ready-to-open **Skyscanner** search URLs. Do not scrape or invent live prices unless the user also asked to search fares. The deliverable is links (usually a table).

## 1. Parse the prompt

Extract, with defaults in parentheses:

| Field | Look for | Default |
|---|---|---|
| Origin | city, airport name, or IATA | ask if missing |
| Destination | city, airport name, IATA, country, or region | ask if missing |
| Trip type | round trip / return vs one-way | **round-trip** if a stay length or return is implied; else one-way |
| Outbound date or range | "Sep 7", "around Sep 7", "September", "next 14 days" | ask if missing |
| Return / stay | "3 weeks", "21 nights", explicit return date | **21 nights** for round-trip if unspecified |
| Adults / cabin | "2 adults", business | **1 adult, economy** |
| Directs | "nonstop only" | all flights (`preferdirects=false`) |

Resolve city names to IATA. If several airports serve the city, pick the common long-haul gateway and say so. If the destination is a **country or region**, pick the main gateway (or the cheapest common gateways) and generate **one URL set per destination airport**, labeled with country + city + IATA.

**Bangkok origin is mandatory dual-airport:** if origin is Bangkok in any form (`Bangkok`, `BKK`, `DMK`, `BKKT`), Skyscanner origin code is **`bkkt`** (Bangkok any = Suvarnabhumi + Don Mueang). Never emit a Bangkok-origin link that only searches `bkk` or only `dmk`.

Other multi-airport cities: use Skyscanner's city code when you know it (e.g. Istanbul `ista`, London `lond`, New York `nyca`). Otherwise use the specific IATA and note the limitation.

Dates: interpret relative to **today**. Never emit a date in the past. "Around DATE" = that date plus a small outbound window (see range rules). "3 weeks" / "3–4 weeks" = 21 nights, and if they said 3–4 weeks also emit a 28-night variant.

## 2. Date-range expansion

Skyscanner one URL = one outbound date (and one return date if round-trip).

- **Single date:** one URL.
- **Outbound range** ("Sep 4–10", "first two weeks of September", "around Sep 7"): one URL per outbound day. Cap at **31** days. For "around D", use D−3 through D+3 (skip past dates).
- **Round-trip + stay length:** each outbound date pairs with `return = outbound + nights`. Never let return precede outbound.
- **Whole month** with no day: still expand day-by-day for the month, **or** if that would be noisy, emit the 1st / 7th / 14th / 21st / last day plus a note. Prefer day-by-day when the range is ≤14 days.
- Round-trip return window ("return around the 28th"): keep outbound fixed (or the around-window) and vary return; don't cartesian-explode both ends past ~15 URLs. If both ends are ranges, pick the named start + named stay, then 2–3 nearby return dates.

ISO date `YYYY-MM-DD` → Skyscanner `YYMMDD` (example `2026-09-07` → `260907`).
`oym` / `iym` = `YYMM`. `selectedoday` / `selectediday` = day-of-month **without** leading zero (`7` not `07`).

## 3. Build Skyscanner URLs

Origin and destination in the path are **lowercase**.

Query always includes:

```
adultsv2=1
cabinclass=economy
childrenv2=
preferdirects=false
```

Adjust `adultsv2` and `cabinclass` (`economy` | `premiumeconomy` | `business` | `first`) when the prompt says so. `preferdirects=true` only if they asked for nonstop.

**One-way**

```
https://www.skyscanner.com/transport/flights/{origin}/{dest}/{yymmdd}/?adultsv2=1&cabinclass=economy&childrenv2=&rtn=0&preferdirects=false&oym={yymm}&selectedoday={d}
```

**Round-trip**

```
https://www.skyscanner.com/transport/flights/{origin}/{dest}/{out}/{in}/?adultsv2=1&cabinclass=economy&childrenv2=&rtn=1&preferdirects=false&oym={outYYMM}&iym={inYYMM}&selectedoday={outD}&selectediday={inD}
```

Examples:

- Bangkok → Prague, 7 Sep 2026, 21 nights:
  `https://www.skyscanner.com/transport/flights/bkkt/prg/260907/260928/?adultsv2=1&cabinclass=economy&childrenv2=&rtn=1&preferdirects=false&oym=2609&iym=2609&selectedoday=7&selectediday=28`
- Boston → Bangkok one-way 7 Sep 2026:
  `https://www.skyscanner.com/transport/flights/bos/bkk/260907/?adultsv2=1&cabinclass=economy&childrenv2=&rtn=0&preferdirects=false&oym=2609&selectedoday=7`

Do not add extra tracking params. Use `skyscanner.com` (not `.net`) unless the user asked for a regional host.

## 4. Present the result

Lead with a one-line parse recap: origin → destination, trip type, dates, nights, pax/cabin.

Then a **markdown table** of links (not a dump of raw URLs). Columns that fit:

| Outbound | Return (if RT) | Nights | Skyscanner |

Link label = the dates, not the word "link". Path codes in backticks (`bkkt` → `prg`).

If you expanded a range, keep the table scannable: group by destination if several countries, and bold the URL that matches the date they named.

If origin, destination, **or** a usable date is missing, ask for the missing piece only. Do not emit a placeholder URL.

## 5. Optional extras (only if useful)

- If they also want Kayak/Google: Kayak `https://www.kayak.com/flights/{ORIG}-{DEST}/{YYYY-MM-DD}` or `.../{out}/{in}`; Bangkok origin `BKK,DMK`. Do not let extras bury the Skyscanner table.
- If they asked to compare fares, generate the URLs first, then search. Never invent prices.

## Worked prompt shapes

- "round trip Bangkok to Istanbul around Sep 7 for 3 weeks" → `bkkt`/`ista` or `ist`, outbound 4–10 Sep, 21 nights, table of Skyscanner RT URLs, highlight Sep 7.
- "one way WAW to BKK first week of October" → `waw`/`bkk` (destination Bangkok stays as entered unless they said "Bangkok any"), one-way URLs Oct 1–7.
- "Bangkok to the cheapest Eastern Europe in September, 3–4 weeks" → several destinations (one table per country or one table with a Destination column), `bkkt` origin, 21- and 28-night variants from ~Sep 7.
