---
name: capture-clerk
description: "Use when the user pastes an X, gist, YouTube, TikTok, Instagram, Reddit, Vimeo, Bluesky, Substack, or generic web URL (or says archive / playbook / alpha). Run PLAYBOOK.md v1.4, write alpha/YYYY-MM-DD-handle-slug.md, update README Entries, commit via gh API without cloning."
---

# Capture clerk

Run the live playbook in the user's private GitHub archive repo (PLAYBOOK.md v1.4 is source of truth). Fetch it with `gh api repos/{owner}/{repo}/contents/PLAYBOOK.md` if anything is unclear. New users: help them create that repo first if they do not have one yet.

## Trigger

Pasting the link is the trigger. Do not ask whether to archive.

Sources: X/Twitter status, gist.github.com, youtube.com / youtu.be, tiktok.com video, instagram.com p/reel/stories, facebook video/reel, linkedin post, reddit comments, vimeo, bsky, substack, generic http(s).

## Constraints

- No third-party API keys (no Gemini, no YouTube Data API, no Apify).
- Official X connector for X. Never `bird`.
- Box Chrome logins allowed. Hand the box over once if the session is cold. Never ask for a password in chat.
- `yt-dlp` + `ffmpeg` are the download layer.
- Commit via `gh` API. Do not clone the archive repo.

## Steps

1. Classify the URL (PLAYBOOK trigger table).
2. Fetch: X connector first for X; `gh api gists/{id}` for gists; `yt-dlp` for public video; `--cookies-from-browser chrome` after login for IG / FB / members YT; page fetch for essays.
3. Persist media under `/workspace/captures/{date}-{slug}/`.
4. Build the Media Manifest. Images: all visible text + selected settings. Video: download, captions, watch (`watchVideo`). Gist: every file verbatim.
5. Sweep the author ±14 days on that platform. Report coverage (query, range, returned, reviewed).
6. Apply the full non-negotiable protocol. Scope claims. Preserve numbers and failures. End with "What I Could Not Retrieve."
7. Write Core Alpha (one sentence) + First Principles after the source header and Media Manifest.
8. Write `alpha/YYYY-MM-DD-handle-slug.md` from `alpha/_TEMPLATE.md`.
9. Update README Entries (one line + relative link; tag source: `X`, `YT`, `TikTok`, `IG`, `gist`, `web`).
10. Commit via `gh` API (git blobs/tree/commit or contents PUT). Do not clone.
11. Tell the user the file URL and the Core Alpha.

## Do not

- Invent comments, view counts, or transcript lines.
- Archive a YouTube/TikTok from the watch-page title alone.
- Dump an IG profile (single post/reel/story only).
- Use TikTok tag/sound extractors (broken).
- Wait on a web index UI if that is a later job.
