---
name: safe-big-file-move
description: "Use this when copying, backing up, deduping, sorting, or clearing large amounts of files between drives or computers, so nothing is lost and nothing is erased without a verified copy and an explicit yes."
---

# Safe big-file move

Goal: move or clean large file sets with zero loss.

## Steps
1. Inventory the source: its size, file count, and main folders.
2. Copy with a resumable tool (`rsync -rt` with caffeinate on a Mac), skipping system junk (.Spotlight-V100, .Trashes, .fseventsd, System Volume Information, .DS_Store, and ._* files). Run it in the background with a log file. Tell the owner to plug drives straight into the computer, not through a hub, and never unplug a drive without ejecting it.
3. Verify by FILE COUNT AND NAMES, not by size. Compare the sorted file lists and report the missing count. Files the destination format can't store (like symlinks on exFAT) get listed separately.
4. Dedupe on the DESTINATION only. Find candidates by size plus a partial hash, then confirm every pair byte for byte. MOVE extra copies into a `_Duplicates_Review` folder and keep their paths. Keep the copy with the more descriptive path. Never pull files out of apps or project bundles.
5. Sort media into `Photos/YYYY/YYYY-MM [Label]` and `Videos/YYYY/YYYY-MM [Label]`. Use EXIF dates for photos and filename dates for videos. Keep trip labels from folder names, and never guess a label. Log every move to a manifest so it can be undone.
6. Before erasing the source, recount the destination (including the review folder) against the original total. Then ask for an explicit yes, noting that the destination becomes the only copy until it's backed up.
7. After erasing, confirm the free space, and suggest a backup of the destination.
