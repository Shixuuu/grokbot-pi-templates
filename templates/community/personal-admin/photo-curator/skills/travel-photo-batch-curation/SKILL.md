---
name: travel-photo-batch-curation
description: "Use this when curating travel or family photo batches from a source folder into a curated folder: review/cull, natural-enhance keepers with a frozen recipe, and copy enhanced files without waiting for a lock."
---

Reusable playbook for batch photo culling and natural enhancement. Fill **Project settings** with the user at the start of a job (or when they change mid-stream).

## Project settings (per job)
- **Source folder** — where the user drops batch loads
- **Curated folder** — write enhanced keepers only (`*_enhanced` + original extension, or agreed suffix)
- **Batch size** — typical load size (default guidance: ~40–80 files)
- **Soft keeper ceiling** — total curated keepers aimed for this project (absolute number *or* ~X% of estimated originals). Soft only: prefer quality rejects over artificial quotas; user may cull later
- **Pre-cull** — whether the user already reduces loads before handoff (note approx. % if known)
- **Enhance recipe** — confirm or adjust the defaults below once, then freeze for the job

## Before transfer
1. Confirm the user’s computer/machine is connected.
2. List source: count, date range, first/last filename.
3. Copy into workspace in small batches (about 8–12), not all at once.

## Review / cull
1. Classify every file: KEEP or REJECT.
2. Auto-reject literal duplicate-name copies (e.g. `- Copy`) / byte-identical twins; prefer the sharper/cleaner frame.
3. Reject blinks, soft/muddy frames, true near-dupes.
4. Keep generously when a day or location is strong; favor sharp faces and people you travel with; mix wides + details.
5. Identify place/time from landmarks, signs, or captions; note the segment arc.
6. Flag enhance needs: distant mountains/ridges (stronger dehaze/clarity), window glare, fog/mist (keep atmosphere — do not invent detail), people-milder when people-dominant.
7. Cleanup flags are awareness only — never remove people/objects unless the user explicitly asks.
8. Write a ranked review note (keepers + rejects + flags) for the record.

## Enhance (freeze after project confirm — do not re-negotiate mid-job)
After culling, proceed immediately to enhance + curated copy. Do **not** wait for a lock unless the user asks to review first.

**Default recipe** (override in Project settings if needed):
- Scenery / architecture: about +20% saturation (e.g. Color ≈ 1.20)
- People / couples: milder sat (e.g. ≈ 1.06–1.08) with skin-tone protection
- Apply EXIF orientation first so frames are upright
- Mild natural polish: light vibrance, clarity, contrast, open shadows
- Mountains / distant ridges: stronger dehaze/clarity to pull structure forward
- Window glare: tame when flagged
- Fog / mist / haze atmosphere: keep it natural; very light dehaze only; never invent landscape detail
- No people/object removal
- Output enhanced copies only; never modify or delete originals

## Deliver
1. Copy enhanced files to the curated folder in small batches (about 6–8); retry if the connection drops.
2. Verify exact `FOUND=N MISSING=0` for this batch’s enhanced filenames.
3. Tell the user: keeper/reject counts, top highlights, enhance notes, batch curated count, and running total vs the soft keeper ceiling.
4. Invite the next load if more are coming.

## Safety
- Never modify or delete originals
- Never remove people/objects without explicit ask
- Wait for approval before overwriting an original file
