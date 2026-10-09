---
name: amv-drive-review-deliver
description: "Use when delivering AMV review mp4s — rclone copy to the review folder, verify size, send only the Drive link. Never multi-MB MCP create_file."
---

# AMV Drive review deliver

## Rule
ALL review files → Google Drive first. Human gets ONLY the Drive link.
Never announce before verifying size ≥ 1MB.
Never CopyFromBox / chat video / multi-MB MCP `create_file` (base64 caps).
Fail-once: no upload thrash loops.

## Setup (after import)
1. Configure a local rclone remote (commonly named `gdrive`) pointed at the human’s Google Drive.
2. Create or choose a dedicated review folder the human owns.
3. Set `YOUR_REVIEW_FOLDER_ID` once to that folder’s id. Pass it via `--drive-root-folder-id`. Do not hardcode another user’s private folder ids.

## Permanent path: rclone (preferred)
```bash
# optional light encode to keep review snappy
ffmpeg -y -i /path/to/input.mp4 -c:v libx264 -preset fast -crf 28 -c:a aac -b:a 128k /path/to/light.mp4

rclone copy /path/to/light.mp4 gdrive: \
  --drive-root-folder-id YOUR_REVIEW_FOLDER_ID --progress

rclone lsl gdrive: --drive-root-folder-id YOUR_REVIEW_FOLDER_ID | rg 'your-filename'
```

Then Drive connector `search_files` / `get_file_metadata` for the file id — require `fileSize` ≥ 1000000 matching local. Send only:
`https://drive.google.com/file/d/{id}/view`

## Do not
- MCP `create_file` for multi-MB mp4s
- Browser Drive (unless rclone broken and human unlocks one-shot)
- CopyFromBox as review delivery
- Announce stubs / KB files

## Note
rclone may warn that shared Google client_ids retire over time — create a custom client_id if the remote breaks.
