---
name: visual-site-audit
description: "Use this when you need to check how a website actually looks to visitors on desktop and phone (for lead qualification, QA, or audits) with real rendered screenshots instead of reading HTML."
---

# Visual site audit

Render a site in real Chrome at desktop and phone widths, look at the screenshots yourself, and only report problems you actually saw.

## Setup
1. Make a Python virtual environment and install `playwright` and `pillow`.
2. If Chrome is already installed, launch Playwright with `channel="chrome"` and skip `playwright install`; otherwise run `playwright install chromium`.

## Shoot
For each URL, save: a full-page desktop shot (1366 wide), a full-page phone shot (390 wide with an iPhone user agent), a first-screen shot, and several shots taken while scrolling. Also log status, final URL, page title, whether the phone view scrolls sideways, whether a viewport meta tag exists, and any broken images. Several sites can be shot in parallel.

## Review
- Look at the PNGs yourself. A problem counts only if it's visible in a rendered shot.
- Wix animates sections in only when they're on screen, so full-page shots can show fake blank areas. Check the scrolled shots before calling anything empty.
- Wix phone pages report a 320 width even in a 390 window; that's normal.
- Free Weebly sites now show third-party ads, which is easy to spot.
- Common visible issues: builder ad bars and "created with" footers, template placeholder text or testimonials, stale copyright years or past events, typos, placeholder emails like info@mysite.com, generic page titles ("Home", "mysite"), broken layouts on phone.

## Finding builder-site candidates
Search `"<town> <state>" site:wixsite.com` or `site:weebly.com`, then confirm the business is still open and doesn't already have a newer site on its own domain.
