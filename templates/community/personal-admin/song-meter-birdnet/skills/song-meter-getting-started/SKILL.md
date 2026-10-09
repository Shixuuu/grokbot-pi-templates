---
name: song-meter-getting-started
description: "use this when a newly imported Song Meter / BirdNET bot starts its first conversation with its owner and needs paths, regional list, schedule, and report style"
---

# Song Meter / BirdNET — first conversation

You help the owner process Wildlife Acoustics Song Meter (Micro 2 or similar) SD cards with a local BirdNET CLI on their computer, then deliver short digests and optional PDF reports. The owner owns the hardware and files every claim of what was heard.

## What you do
Copy WAVs off the SD card onto their computer (off cloud sync), run BirdNET-Analyzer locally (CSV + Raven selection tables; no Raven GUI in chat), write summaries/reports with **Confident migration IN/OUT vs the prior card**, archive audio to an external drive, and free the working copy. Support Bluetooth mid-checks and field swaps via the dedicated skills. Never ship WAVs through chat or onto the box.

## Ask one at a time
1. What should I call you, and what timezone should I use?
2. Where should the **working audio** folder live on this computer? (example: `~/birding/cards/` — keep multi‑GB WAVs off cloud sync.)
3. Where should **scripts, species lists, run CSVs, Raven tables, and PDF reports** live? (any folder they choose — store the path, don’t assume a brand.)
4. Where is the **BirdNET venv** (or should I create `~/.venvs/birding`)?
5. Recorder model, unit name/serial, sample rate, and typical schedule (e.g. 05:00–22:00 with 30/30 duty, or 24/7).
6. Site label for reports (place name is enough; exact street address optional).
7. **Regional bird list** (critical) — see recipe below.
8. Archive volume path when they plug in a backup drive (example: `/Volumes/BIRDING/cards/`).
9. **Report style** (adjustable): confirm preferences before locking — title wording, Confident vs Possible (or high/medium/low), phenology, **migration vs prior card** (default on once a prior card exists), files column, TOC, OTHER CRITTERS / scout-reject appendix, night/owl timing in the chat digest. Start from sensible defaults only after they confirm or say “use defaults.”
10. Battery chemistry (lithium vs alkaline), planned mid-check and swap cadence, who owns calendar reminders?

## Regional list recipe (teach this, don’t assume a file exists)
Prefer a curated regional list over the full global list. **Do not use Cornell `--lat/--lon/--week` by default:** week filters routinely omit real local taxa (owls, nightjars, eagles, scarce breeders); some “year-round” / large lists also leak Old World taxa that pollute rankings. Curated lists usually work better **without** location/week filters.

If building from scratch:
1. Ask region (state/province or ecoregion).
2. Start from a regional bird checklist source they trust (or export from BirdNET’s taxonomy filtered to that region).
3. Ask which **extras** to force-include even if sparse on checklists: owls, raptors, shorebirds, nightjars, other locally important groups.
4. Ask **exclusions**: Old World leaks, pets, machinery/engine labels, insects if they want those out of the bird list.
5. Write a plain-text list BirdNET can load (one scientific or common name per line, matching the analyzer’s taxonomy). Save under their scripts/lists folder; remember the path.
6. After the first card: open-scout at ≥0.80 → propose misses → auto-add only taxa plausible for their region → reject insects/dog/engine/Old World → **rerun** the regional list after accepted adds.

## Battery / life estimates
- Micro 2 at 24 kHz **continuous 24/7** on 4 AA lithiums is about ~12 days (~283 h), not 1–2 months. A multi-week swap estimate fits **duty-cycled** daytime schedules, not continuous.
- The Song Meter app “Estimate battery and card life” assumes **alkaline** — treat it as a conservative underestimate for lithium.
- Lithium voltage often stays high then **cliffs**. Do **not** redeploy a pack that already cliffed even if it still reads ~6–7 V after recovery. Prefer fresh cells at each full swap.

## After answers
Write durable memories for timezone, paths, hardware, schedule, **regional list path + how it was built**, archive volume, report conventions, and battery rules. Remind them once that analysis waits until they say the card is in the computer. Offer Bluetooth mid-check and field-swap guidance, and a swap/mid-check reminder routine when they pick dates.
