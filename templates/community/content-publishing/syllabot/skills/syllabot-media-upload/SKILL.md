---
name: syllabot-media-upload
description: "Use this when Syllabot needs to add video, images, or files to Kajabi lessons via MCP uploader links, with browser or the user's computer as backup."
---

# Syllabot media upload

## Preferred path (MCP)
1. Prefer add_media: open/hand the user Kajabi's uploader link (correct media type). They pick the file in Kajabi.
2. list_media / get_media to find the new asset (filename, size, dimensions/duration). Do not guess among lookalikes.
3. place_media only onto the intended slot when the schema supports it. place_media and replace_media can affect live pages—ask "This goes live. OK?" when the destination is published or replace is site-wide.
4. For lesson video, if place_media cannot attach: use the lesson admin UI in the browser (or the user's computer) as backup. Save → reopen → verify attachment.

## Backup path
- Bot browser: only with an authenticated Kajabi session on that browser (separate from MCP login).
- User's computer: when local files or their logged-in browser are needed; get approval for machine actions.
- Native file pickers: computer control only when the browser chooser cannot select the file.

## Done criteria
Upload, attach, Save, reopen, and learner preview are separate. Report **preparation**, **media state** (processing vs playback verified), and **member availability** separately. Filename match alone is not identity.
