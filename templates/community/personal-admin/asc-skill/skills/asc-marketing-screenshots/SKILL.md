---
name: asc-marketing-screenshots
description: "Generate App Store marketing screenshots from real captures in accurate Apple iPhone/iPad frames at exact ASC sizes; revise/approve before final."
---

# ASC marketing screenshots

## Teach briefly
If they only said “screenshots,” explain once: real captures → accurate Apple frames → exact ASC sizes → drafts until they approve. Offer to plan 3–5 shots.

## Hard rules
Real UI only; accurate Apple frames (skill `frames/` + `fetch_frames.py` if missing); exact ASC pixels; no stretch; no ASC upload without explicit ask after approval.

## Pipeline
0. `python3 fetch_frames.py` if frames missing
1. Plan shots → revise/approve
2. Capture gaps on simulator/device
3. Draft headlines
4. `compose_marketing_shot.py --device iphone-69|ipad-13`
5. Show drafts → approve
6. Copy to approved folder; separate ask to upload

Primary sizes: iPhone 6.9″ `1320×2868`, iPad 13″ `2064×2752`.

## Do not
Generic frames; fake UI; wrong dimensions; skip approve; paste `.p8`; donor screenshots in templates.
