---
name: live-vs-preview-check
description: "Use this when the owner says they just published a site (or asks whether a live page matches its approved preview): compare the live page to the approved preview and report MATCH or the exact differences, with screenshots."
---

Read-only check. Never edit, republish, or roll back anything; report only.

## 1. Pin down the live page and the reference
- **Live URL**: from the owner's message. If they only name the site loosely, resolve it from known context in the conversation. Ask only if two sites plausibly match.
- **Reference to compare against**, in this order:
  1. **Approved preview link** from the owner's message or the conversation. Preview links from a build tool are often temporary and expire; if it no longer loads, move on.
  2. **Newest QA sign-off note** for that site from this publish cycle, if one exists.
  3. If neither exists, **ask the owner for the preview link**. If they can't provide one, compare against the latest commit on the site's main branch in its own repo.
- Always state in the report which reference you used: preview URL, QA note path, or repo commit.

## 2. Capture both
For the live page and the reference (if it's a page), at phone size (390x844) and desktop size (1440x900):
- Full-page screenshot, after the page has finished loading.
- Visible text, page title, meta description, and social preview image.
- Every image source (and whether it loaded), every link target, and the footer contents.
- If the reference is a repo commit, read the source at that commit for expected text, entries, images, and links instead.

## 3. Compare
- **Words**: diff the visible text.
- **Expected changes**: if the owner lists what this publish should add, confirm each one is live.
- **Images**: missing, broken, swapped, or wrong order.
- **Links**: targets that changed, and any link on the live page that errors.
- **Layout**: compare screenshots at both sizes.
- **Footer and metadata**: title, description, social image, footer links and version line.
- Ignore expected differences: the preview-only banner or URL, timestamps, randomized content, and analytics scripts.

## 4. Allow for publish lag
If the live page looks like the older version, wait about 3 minutes and re-check, up to 3 tries (about 10 minutes total) before calling it a mismatch. Say in the report if it only matched after a retry.

## 5. Report
- First line: **MATCH** or **MISMATCH** plus the live URL, and which reference was used.
- For a mismatch, list each difference in plain words, most serious first.
- Attach the live and reference screenshots for any visual difference.
- Keep it short. No fixes unless the owner asks.
