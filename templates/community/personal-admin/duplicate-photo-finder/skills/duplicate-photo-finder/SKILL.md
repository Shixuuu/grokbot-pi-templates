---
name: duplicate-photo-finder
description: "Use this when the owner wants to find, review, or clean up exact or near-duplicate photos in a chosen OneDrive or Google Drive folder, an uploaded zip or batch of photos, or a folder exported from Apple Photos, including the monthly recheck."
---

# Duplicate Photo Finder

## What it does
- Scans only the source the owner chose: a OneDrive or Google Drive folder through the connected connector, an uploaded zip or batch of photos, or an exported folder. Includes videos only if the owner said so.
- Finds **exact duplicates**: files with the same content hash (use the provider's hash, such as OneDrive's quickXorHash/sha1 or Drive's md5Checksum, before downloading anything; for uploads, hash the files directly).
- Finds **near-duplicates**: resized, re-saved, re-compressed, lightly cropped, or burst shots. Compute a perceptual hash (for example pHash or dHash on a small thumbnail) and match on small hash distance, backed up by capture date (EXIF, else file date) and similar dimensions or size.
- Groups matches. For each group, picks a keeper: highest resolution first, then the earliest original date, then the best-named file (a real name beats "IMG_1234 (1)", "copy", or "-2").
- Tags two special kinds of group so they're reported separately:
  - **Burst clusters**: several near-identical shots taken within a few seconds of each other.
  - **Screenshot clusters**: screenshots (PNG files, names containing "Screenshot" or "Screen Shot", or dimensions matching a phone or monitor screen) that repeat or nearly repeat.

## RAW + JPEG pairs are not duplicates
- A RAW file (such as .CR2, .CR3, .NEF, .ARW, .DNG, .RAF, .ORF, .RW2) and a JPEG from the same shot are a pair, not duplicates. Spot them by the same base file name in the same folder, or the same capture time and camera in EXIF.
- Never propose removing either file of a pair, never pick a keeper between them, and never put them in a cleanup batch.
- Report pairs on their own separate line (count and folders), apart from the duplicate groups. If the pair's JPEG also has a real duplicate elsewhere, that extra copy can still be grouped normally; the pair itself stays untouched.

## Cost
Work cheaply: use provider hashes and thumbnails, not full downloads, wherever possible. Run one batch over the source rather than repeated passes.

## Safety rules
1. The first run on any source is always a dry run. Report only; change nothing.
2. Nothing is deleted, moved, or renamed until the owner approves a specific batch (a named set of groups). Approval of one batch never carries to the next.
3. Removals go to a "Duplicates – Review" folder inside the scanned folder, or to the provider's recycle bin. Never delete permanently.
4. Keep an action log (date, file, original path, new location, batch id) saved beside the review folder so every action can be undone. Offer an undo for any batch.
5. Never touch files outside the chosen source.

## No-connector mode (uploads)
- The owner can upload a zip or a batch of photos straight into the chat. Unzip into a fresh working folder on the bot's computer and run the same dry-run grouping.
- Nothing on the owner's devices or drives changes in this mode. The deliverable is a downloadable **keep list** (a CSV with group id, file name, keep or remove, reason, size, date, and dimensions), plus the report below. Offer a zip of just the keepers if they want it.
- Delete the working copy from the bot's computer after the owner has their files, unless they ask to keep it for a follow-up.

## iPhone and iCloud users
- There is no iCloud connector. Apple offers no public iCloud Photos access for outside apps, so this bot cannot read an iCloud Photos library directly. Never claim that it does.
- Workaround: the owner exports photos or an album from the Photos app (on a Mac: select, then File, Export; on iPhone: share the photos to the Files app) into a folder. Then scan that folder, either uploaded to the bot (no-connector mode) or on a Mac the owner has linked to Grok Bot.
- The same safety rules apply.
- Be clear that cleaning the exported folder does not change the iCloud library. To free iCloud space, the owner removes the flagged copies in the Photos app using the report (recent versions of Photos also have their own Duplicates album under Utilities).

## Report (every run)
- Total space that would be freed if the non-keepers are removed.
- Number of groups (exact and near-duplicate counted separately), and the number of files in each group.
- Burst clusters and screenshot clusters, each called out in their own section.
- RAW + JPEG pairs on a separate line, marked as kept and never part of a batch.
- Top 10 biggest wins (groups that free the most space).
- A small contact-sheet image for each group shown: the suggested keeper first and labeled, next to its duplicates, each thumbnail captioned with file name, dimensions, size, and date. Build it on the bot's computer (for example with Pillow) and attach it with the report.
- Groups flagged for a human look, listed separately.
- Then ask which batch to approve, if any.

## Monthly recheck (optional, off by default)
- Only runs if the owner turned it on during setup or asks for it later.
- Each run scans the same source and reports only duplicates that are new since the last run (compare against the private run history). If there's nothing new, say so in one line or stay quiet if the owner asked for that.
- It never moves, renames, or deletes anything. Any cleanup waits for the owner to approve a batch in chat, exactly as above.

## Private run history
- Keep a short history of past runs (date, source, folder, groups found, space that could be freed, batches approved, space actually freed) on the owner's side: a `run-history.csv` inside the "Duplicates – Review" folder for drive scans, or a run-history file on the bot's computer for uploads.
- It is the owner's private record. Never write it into memory, and never include it if this bot is exported or shared as a template.

## Limits
- Won't open private or hidden albums, shared-with-me folders, or any folder it wasn't pointed at.
- Flags any group it's unsure about (borderline hash distance, different dates, edits that might be intentional, such as a crop or filter) for a human look instead of picking a keeper silently.
- If the owner chose "ask each time", never auto-pick; show the suggested keeper and wait.
