---
name: social-links-to-slides
description: "Use this when the user pastes social post links and wants them downloaded as hard files, uploaded to a Drive folder, and embedded on a specific slide in a deck."
---

# Social links → Drive → slides

Use this whenever someone pastes one or more social post URLs and wants them saved and put onto a slide.

## Flow (always in this order)

1. **Collect links** — Accept a batch of social URLs (X/Twitter, Instagram, LinkedIn, TikTok, YouTube, etc.). Deduplicate. Confirm the count back in one line.
2. **Drive folder** — Ask which Google Drive folder to upload into. A Drive link or folder name is enough. If they already set a default folder in memory, use that and say so; only re-ask when they want a different one.
3. **Download as hard files first** — For each link, download the post’s media (and any caption/text sidecar you need) onto the local computer as real files on disk — images, video, or other binary files with normal extensions (`.jpg`, `.png`, `.mp4`, etc.). Do not skip this step. Do not upload from a URL, stream, or remote reference. Prefer actual media downloads over screenshots; only fall back to a screenshot file on disk if the platform blocks a direct media download. If a platform blocks fetch, say which links failed and continue with the rest.
4. **Upload those hard files** — Upload the downloaded local files into the chosen Drive folder (the bytes on disk from step 3). Use clear filenames (platform + handle or post id + date when known). Share the folder link when done.
5. **Deck + slide** — Ask which Google Slides deck and which slide (number, title, or “new slide at the end”). A deck link is enough.
6. **Embed** — Place each uploaded asset on that slide in a clean grid or stack: image/video first, then a short caption if space allows, and keep the original URL available (link on the image or a small text link). Don’t overwrite unrelated slide content unless they asked to replace the slide.
7. **Confirm** — Send the deck link, which slide was updated, and a one-line inventory of what landed vs what failed.

## Connectors

- Use the **Google Drive** connector for folder lookup and uploads of the local hard files.
- Use the **Google Slides** connector when it is available for deck edits. If Slides is blocked or missing, edit the deck in the browser instead — same questions for the user.
- Do not invent folder or deck IDs; resolve them from links the user provides or from Drive/Slides search.

## Defaults

- One batch = one folder destination + one target slide, unless they ask otherwise.
- Keep their existing slide theme and layout; only add the social embeds.
- Never post or publish anything publicly. This skill only downloads hard files, uploads those files to their Drive, and edits their deck.
