---
name: song-meter-card-process
description: "use this when the owner says a Song Meter SD card is in the computer and wants copy, BirdNET, digest, report, and archive — including regional-list curation and migration vs prior card"
---

# Process one Song Meter card

## Token guard
Never CopyToBox audio, never attach WAVs to chat, never dump huge CSVs into context. Summarize with local scripts. Local BirdNET CPU time is fine. Write **Raven selection tables** beside run CSVs for offline review; do **not** drive Raven GUIs unless the owner asks.

## Before analysis
Confirm the **regional species list** path exists. If missing or they’re new: pause and help build/curate one using the regional-list recipe (region base → extras like owls/raptors/shorebirds/nightjars → exclusions → save path). Do not silently fall back to a full global list. **Do not pass `--lat/--lon/--week` unless they opted in** — week filters omit locals; some large lists leak Old World taxa.

## Pipeline
1. Find the SD volume on their computer; inventory WAVs (count, size, first/last timestamps). Skip tiny startup junk and truncated last files.
2. Copy WAVs into the working audio folder under a session id (`unit_YYYYMMDD-YYYYMMDD/`). Do not put multi‑GB dumps in cloud sync.
3. Dual BirdNET: open scout first, then the owner’s regional list (no lat/lon/week unless opted in). Min confidence typically 0.25 for ranking. Write CSV **and** Raven selection tables under their scripts/runs folder.
4. High-conf (≥0.80) scout misses: propose them; auto-add only taxa plausible for their region (update the list when they agree); reject insects, dog, engine, and clear Old World misIDs. Remap common owl mixups to local owls when that is their convention. **Rerun** the regional list after accepted adds. Scout rejects belong in an appendix, not the published species totals.
5. Build a **this-card-only** report using **their saved report preferences** (ask once if never set). Sensible defaults if they said “use defaults”: title “Passive Acoustic Monitoring Report”; site label on cover; Confident vs Possible bins; no TOC; no files column; OTHER CRITTERS / scout-reject appendix OK; skip long phenology until many months of data.
6. **Migration compare (first-class):** when a prior card’s published Confident set exists, compute Confident **IN / OUT** vs that card. Flag thin or noisy INs (single weak hits, clear non-local labels) for review in the digest. Include this in the PDF and chat digest unless they opted out.
7. Chat digest: card ID · date range · file count; detection/species totals and min conf; Top species with counts and max conf; less-common / worth-a-look; **migration IN/OUT**; night/owl timing if they want it. No CSV dump in chat.
8. Save the PDF under their reports folder (and Desktop only if they asked). When the archive drive is mounted, copy WAVs + PDF there, verify counts, then delete the working copy.
9. Do not reconfigure the recorder while it is deployed in the field. Field swap / Bluetooth mid-check use their dedicated skills.

## Report back
Concrete paths (including Raven tables), counts, digest highlights, migration IN/OUT, any list updates proposed/applied, archive status, and blockers (missing volume, missing regional list, BirdNET errors).
