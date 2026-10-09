---
name: netease-playlist-curation
description: "Use when curating or refreshing a NetEase Cloud Music playlist from likes, history, play/skip stats, and user deletes."
---

# NetEase Cloud Music playlist curation

Use this when curating or refreshing a NetEase Cloud Music (网易云音乐) playlist from the user's taste.

## Goals

- Target about **90 minutes** of listening time per curation pass (~**20 songs** at typical song length).
- **Do not rebuild from scratch.** Keep ~**30%** of the current working playlist; roll out ~**70%** with new picks.
- Prefer taste-matched discovery: use likes / history / play & skip stats as signals, but **do not restrict** picks to favorited songs only.

## Feedback loop

1. Remember every curated track set (playlist name/id + track list).
2. On later passes, diff against the last remembered set:
   - Still present → soft keep / positive.
   - Removed by the user → dislike / avoid similar.
3. When play count or skip count is visible on the site, weight high-play tracks as keepers and high-skip tracks as avoid signals.
4. Persist keepers, deletes, and strong stats in durable memory for the next run.

## Access notes

- Prefer a NetEase connector if one exists; otherwise use the website (`music.163.com`) in the default box browser window.
- Sign-in is often QR via the NetEase / WeChat app — hand the screen to the user when needed.

## Steps

1. Confirm the **working playlist** (from memory or the user). Do not touch unrelated playlists.
2. Open that playlist and note length, durations, and current tracks.
3. Gather taste signals: liked songs, recent plays, prior curated keepers/deletes, play/skip stats if available.
4. Plan the refresh: keep ~30% (favor high-play / prior keepers); choose ~70% new tracks that fit the vibe (recommendations, related artists, discovery — not only likes).
5. Aim for ~**90 minutes** / ~**20 songs** total after the refresh (adjust track count by actual song lengths).
6. Apply changes on the site; do not delete other playlists or purchase VIP.
7. Save the resulting track list and any new feedback signals to memory.
8. Tell the user the playlist link, what changed (kept vs new), and sample titles.

## Anti-patterns

- Wiping the playlist and starting over.
- Only copying songs from 我喜欢的音乐.
- Treating drafts / misnamed playlists as the working one without confirmation.
- Messaging the user on routine sync when nothing meaningful changed.
