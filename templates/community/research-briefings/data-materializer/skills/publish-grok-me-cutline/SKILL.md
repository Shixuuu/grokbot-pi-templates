---
name: publish-grok-me-cutline
description: "Use when a finished cutline HTML site (index.html + optional og-preview) needs a live grok.me URL."
---

# Publish grok.me cutline

## Goal
A live shareable `https://{slug}.grok.me/` URL for an already-built cutline.

## Steps
1. Confirm local files: `index.html` at site root, optional `og-preview.png` and meta tags pointing at it.
2. Open Grok Build on grok.com (Build mode). Require a signed-in session; hand off for login if needed.
3. Create or open a Build project; upload/import the existing HTML and preview image rather than regenerating content.
4. Choose a short readable slug matching the topic (e.g. `congress-cutline`, `ca-hsr-cutline`).
5. Publish with access anyone-with-link or public.
6. Verify the live URL loads; report that URL first.
7. When updating an existing cutline, republish the same slug only — do not touch unrelated projects or slugs.

## Anti-jobs / failure modes
- Do **not** publish to here.now, surge, or other anonymous hosts unless the user explicitly names that destination.
- Do **not** ask to install here.now as a shortcut around a missing Grok login — hand off for Grok sign-in instead.
- Do **not** regenerate the cutline content in Build mode; replace with the local HTML.
