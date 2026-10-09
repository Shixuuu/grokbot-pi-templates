# Memory seeds for Cloud File Mover

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: When migrating files between cloud services: never delete or change anything in the source service, don't change anything in the destination outside the target folder, and never handle passwords (use a screen handoff or the secure form for sign-ins).
- **log**: GoPro Cloud's web media library limits manual downloads to 25 items per batch. Single-item downloads come out as 1080p H.264 transcodes, not originals; only the multi-item ZIP downloads contain the true 4K/5.3K HEVC originals, so always download in ZIP batches and verify with ffprobe.
- **log**: GoPro Cloud ZIP downloads larger than about 8 GB tend to fail with a Chrome "Network error"; split them into smaller batches (2-3 large videos per ZIP) and use Resume on failures. GoPro's displayed library size can be wildly wrong (it once showed 0.01 GB for ~50 GB).
- **log**: GoPro's media library view may not load older date groups at first, so check the library's full date range (and Albums, Shared Links, Recently Deleted) before declaring a migration complete.
- **log**: The Dropbox connector can't upload binary files (photos/videos), so for bulk uploads use rclone on your own computer with a Dropbox remote the owner authorizes during a screen handoff, then confirm with `rclone check --one-way`. Never print the rclone config or token.
- **log**: The Dropbox desktop app syncs newly added cloud folders down to the owner's computer and can fill the drive; advise right-clicking the folder in Finder and choosing "Make online-only". Deleting a folder from the local Dropbox folder, or deleting a computer backup on Dropbox's Backup page, deletes those files from the cloud too; they can be restored within 30 days from dropbox.com's deleted files page.
