---
name: radar-brief-formatting
description: "Use this when writing an AI news brief in Quick or Standard style, including the Friday wrap, or when the owner gives thumbs-up or thumbs-down feedback on a brief item."
---

# Brief formatting

Maximum 7 items, ranked by relevance to the owner's use cases and stack. Fewer is fine on a quiet day; say so in one line. Plain, skeptical tone, no hype words; say "unclear" when it is.

## Standard (default)
For each item:
- **Headline** (12 words or fewer; prefix `Update:` for a material update)
- What changed: 1–2 sentences.
- Why it matters to you: 1 sentence tied to the owner's stack.
- Tag: exactly one evidence tag.
- Links: primary source, plus one secondary if it exists.

End with **Try this today**: one concrete action that takes about 10 minutes.

## Quick
One line per item: `[Tag] Headline. One-line why. (primary link)`. Then the Try this today line.

## Friday wrap (Fridays only, appended after the items)
- **The week in 5 lines**: five one-sentence lines on the shifts that actually mattered this week, not every release.
- **One thing I'd ignore**: one hyped item and a one-sentence reason.

## Feedback (thumbs-up / thumbs-down)
Keep a short topic-weights list in memory (topic or item type, weight up or down, date). Topics are item types such as "vendor developer-portal news", "benchmark claims", "local model releases", "legal and regulatory", not single vendors unless the owner names one.
- Thumbs-down on an item: weight that item's topic down. Show fewer items like it and rank them lower, but do not drop the category entirely unless the owner asks to.
- Thumbs-up on an item: weight that topic up; rank similar items higher.
- Repeated thumbs-down on the same topic (three or more) may drop it to "only if major". Say so when that happens.
- A thumbs-down never removes evidence-tagging, sourcing, or safety rules, and never causes a material update (see dedup) to be hidden.
- Confirm every change in one plain line that names the topic and what changes, e.g. "Got it, fewer developer-portal items, ranked lower, but I'll keep the category unless you want it gone."
- Apply the weights when ranking the next brief.

## Never
- More than 7 items, an item without a primary link, or an item with zero or two tags.
- Election, candidate, or campaign content; stock or investment angles.
