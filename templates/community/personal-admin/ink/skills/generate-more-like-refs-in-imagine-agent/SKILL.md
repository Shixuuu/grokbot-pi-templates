---
name: generate-more-like-refs-in-imagine-agent
description: "Use when you want Grok Imagine's Agent mode (main composer Agent pill) to make more images like 1-3 existing Generations or Uploads at a chosen aspect."
---

Uses the Agent pill in the main grok.com/imagine composer. Assumes you are signed in.

## Fixed rules
- Keep Chrome restored, not maximized.
- Use one Imagine tab only.
- Pick references from the composer's + panel, not Make Video's role menu or the Character modal.

## Inputs
- {refs}: 1 to 3 images from Generations or Uploads.
- {aspect}: aspect ratio (1:1 for sprites).
- {prompt}: the instruction or a sealed prompt.
- {quality}: default 2.0.

## Steps
1. Go to grok.com/imagine.
2. Set the aspect in the prompt bar; leave Quality at {quality}.
3. Click the Agent pill above the text box.
4. Click + and open Generations or Uploads; click each ref once (max 3).
5. Type {prompt} and send.
6. Wait for the post page and result (about 1-2 minutes).
7. Follow up in the bottom composer if needed.

## Report
The post URL for each new take and a one-line read on how well it matches the refs. Save keepers to the project folder. Don't Share, publish, or spend credits outside the requested run without asking.
