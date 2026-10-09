---
name: create-flight-brief
description: "Use this when the user gives DEP, DEST, aircraft type, and other flight information (ETD, alternates, FBO preference, 91/135, customs) and wants a lean preflight briefing card."
---

# Create Flight Brief

Decision support only. Not an official briefing or a go/no-go.

## Inputs
- Required: DEP, DEST, ETD (Zulu; convert relative or local times like "in 30 minutes" or "11:30" to Zulu and state the assumption), aircraft type (ICAO designator or common name).
- Optional: alternates, FBO preference, Part 91/135, customs, Canada, other notes.
- If the aircraft is missing, ask once and wait.

## Sources (official / FAA-approved only, free, no logins)
- aviationweather.gov Data API: `/api/data/metar?ids=...&format=raw&hours=2`, `/api/data/taf?ids=...&format=raw`, `/api/data/airsigmet?format=raw` (SIGMETs and convective SIGMETs), `/api/data/gairmet` (AIRMETs; `/api/data/airmet` rejects raw/text), `/api/data/pirep` (optional).
- FAA NOTAMs: the owner's FAA NOTAM API credentials if provisioned (see below); otherwise the public NOTAM Search, POST `https://notams.aim.faa.gov/notamSearch/search` with `searchType=0&designatorsForLocation=KXXX`. Also the TFR list at `https://tfr.faa.gov/tfrapi/exportTfrList`.
- AirNav `https://www.airnav.com/airport/KXXX` for FBOs, fuel, hours, runways, and remarks.
- Other official sources as needed: FAA d-TPP (approach plates, alternate minimums), api.weather.gov (temperatures for density altitude).
- Never sign in to anything, and never use anything paid. If a source needs a login or blocks access, try at most twice, then record it as failed. Don't look for workarounds.
- Record the fetch time (UTC) for each source. Save raw data to `/workspace/briefs/raw/<DEP>-<DEST>/`.

## NOTAM source (owner must provision)
1. Register at https://api.faa.gov/ (or request NMS at notams@faa.gov).
2. Create your own client_id and client_secret. Do not use anyone else's.
3. When this Bot asks for FAA credentials, use the secure secret request or take over the computer and write `$HOME/.config/faa/notam.env` (e.g. `FAA_NOTAM_CLIENT_KEY=` and `FAA_NOTAM_CLIENT_SECRET=`). Never paste keys into chat or into this skill.
4. If credentials are missing, brief weather + public NOTAM pages only and mark NOTAMs as "unauthenticated / incomplete."

### Using the FAA NOTAM API (NMS-API)
- If the owner saved the FAA NMS-API onboarding docs (FAQ, OpenAPI spec, samples) on the computer, use them as the reference, read-only. Treat any keys, tokens, or signed URLs in samples as examples only; never copy them anywhere.
- Credentials: load `$HOME/.config/faa/notam.env` (or the matching env vars from the secure secret request). Never echo, log, or print the client id, secret, or bearer token; keep them out of raw files and fetch logs.
- Hosts: Prod `https://api-nms.aim.faa.gov`, Staging `https://api-staging.cgifederal-aim.com`, FIT `https://api-fit.cgifederal-aim.com`. Use the environment the owner's keys were issued for (test which host accepts them). If only Staging works and the owner has OK'd it, use Staging NOTAMs in briefs, label the source "FAA NMS-API (Staging)", skip obvious test entries, and add a Verify line to recheck live NOTAMs.
- Token: POST `<host>/v1/auth/token` (host root, without `/nmsapi`) with `Content-Type: application/x-www-form-urlencoded`, `-d grant_type=client_credentials -u <id>:<secret>`. Bearer token lasts ~30 min. Request a token only when a brief is being built, reuse it within that brief, never on a schedule or in the background; renew on 401 "Access Token is Invalid or Expired". `invalid_client` means the keys are bad for that host: stop and tell the owner.
- NOTAMs: GET `<host>/nmsapi/v1/notams?location=KXXX` with headers `Authorization: Bearer <token>` and `nmsResponseFormat: GEOJSON` (or `AIXM`). Optional filters: `effectiveStartDate`/`effectiveEndDate` together (yyyy-MM-ddTHH:mm:ssZ), `feature` (RWY, TWY, APRON, AD, OBST, NAV, COM, SVC, AIRSPACE, SID, STAR, IAP, SECURITY...), `classification` (only with another filter, otherwise it returns a bulk file link), or `latitude`+`longitude`+`radius` (NM, max 100) for route/area checks.
- Don't use the bulk initial-load endpoints (`/v1/notams/il`) or `lastUpdatedDate` delta pulls for a brief.
- Rate limits: pre-prod ~1 request/sec; production is metered. Keep calls to the minimum per brief (one per airport, plus one area or FDC call if needed). On a rate-limit error, don't retry repeatedly: record "FAA NMS-API rate-limited" as a failed source.
- Mark the NOTAM section source as "FAA NMS-API (authenticated)" or "FAA NMS-API (Staging)" with fetch time. If the API fails, fall back to the public NOTAM Search and mark NOTAMs "unauthenticated / incomplete."

## Process
1. Estimate ETA from great-circle distance at typical cruise speed for the type, plus climb/descent. Label it as an estimate.
2. Pull the current METAR and TAF for DEP, DEST, and any alternates. If a field has no TAF, use the nearest TAF site and name it.
3. Pull SIGMETs, convective SIGMETs, and G-AIRMETs that cross the route in the flight window. Note when current products expire before ETD.
4. Pull NOTAMs for DEP, DEST, and alternates, plus route TFRs and FDC NOTAMs. Skip every bird/wildlife item. Keep only runway, taxiway, navaid, lighting, closures, hours, PPR, customs, TFRs, and movement-area construction effective from ETD minus 3h to ETA plus 3h.
5. From AirNav, get the DEST FBO(s), hours against ETA, fuel type and price with its date, phones, and runway data. If the requested FBO isn't listed at the destination, or there's no suitable fuel or FBO, that's Critical.
6. Aircraft checks for this type on these fields: runway length vs typical needs, contamination, density altitude (show inputs), icing and freezing level, fuel and tankering. Label any performance figures as approximate and to be checked against the AFM.
7. If destination weather requires an alternate and none was given, suggest up to two nearby IFR airports with adequate runway and fuel, labeled "suggested".
8. Compare against the last brief for this pair in `/workspace/briefs/` for Changes. Keep the old file as `_v<N>_<HHMM>Z.md` before overwriting.
9. Save to `/workspace/briefs/<DEP>-<DEST>_<YYYY-MM-DDTHHMMZ>.md`. Send the card in chat and attach the file.

## Output: Markdown briefing card (follow exactly)

```
# Brief  {DEP}–{DEST}  {HHMMZ dd MMM}

| | |
|---|---|
| ETD | YYYY-MM-DD HHMMZ |
| DEP | ICAO |
| DEST | ICAO |
| ALTN | ICAO, ICAO  (omit row if none) |
| ACFT | type |
| Fetched | HHMMZ |

## Critical
- **Label** — one fact. (NOTAM id or product)
(If none: *None.*)

## Advisory
- **Label** — one fact.
(If none: *None.*)

## Weather
### {DEP}
**Now**  `wind; vis; ceiling/cover; wx; temp/dew; altimeter; category` (obs time)
**Forecast at ETD**  decoded TAF for that window, incl. tempo/prob (TAF issuance time)
### {DEST}
Same two lines, forecast at ETA.
### {ALTN}
Only if it changes the plan.
### Enroute
SIGMET/AIRMET crossing the route: hazard, area, valid time. Omit if none.

## NOTAMs
### {DEP}
- **ID** — decoded plain-English fact (what's closed/out, when).
### {DEST}
Same. Omit empty subsections; omit the section if empty.

## FBO  {DEST}
| | |
|---|---|
| Facility | name |
| Hours vs ETA | open / closes HHMM LCL / after-hours |
| Fuel | Jet A (or type) + price/date, confirm-by-phone |
| Phone | after-hours or front desk |
| Notes | one line max |

## Aircraft
Only if type + field actually matters. Otherwise omit.

## Verify
- leftover official check (source)

## Changes
- vs last brief for this pair, or *None.*

<one line per failed fetch naming the source>
```

Style rules:
- It's a briefing card, not a narrative. Use headings, short bullets, and small tables only.
- DEP, DEST, and ETD appear only in the title and header table.
- Weather is decoded fragments, never raw METAR/TAF dumps or paragraphs.
- Cut anything that doesn't change fuel, FBO, alternate, routing, or go/no-go.
- Mark fuel and hours as confirm-by-phone.

## Validate before sending
- Every METAR, TAF, NOTAM, SIGMET/AIRMET, and fuel price traces to a fetched source with an ID and fetch time. Never invent one.
- Every failed or blocked fetch is named on its own line. A NOTAM failure is also a Critical item.
- If FAA NOTAM API credentials are missing, NOTAMs are marked "unauthenticated / incomplete."
- No bird/wildlife NOTAMs appear.
- Performance numbers are labeled approximate / check AFM.

## Approval
- Never file flight plans, send email, or call anyone (FBOs, airports, dispatch) unless the user explicitly says to.
