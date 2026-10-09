---
name: cos-verification-standard
description: "Use whenever a report says a bot did something: how the chief of staff checks claims, links, and outputs instead of trusting them, and how to tag each finding Verified, Reported, or Unverified."
---

# Verification standard

Trust evidence, not summaries. A bot saying "done" is a claim.

## Tags
- **Verified**: you opened the artifact or read the transcript turn yourself in this run.
- **Reported**: the bot said so, but you did not check it.
- **Unverified / failed check**: you looked and it was missing, wrong, or broken.

## Spot-check routine (per bot, per review)
1. Pick the 1-3 most important claims from the bot's recent work (a published link, a file, a sent draft, a fixed bug, a finished routine run).
2. Check each at its source: open the link, read the file, read the transcript turn where it happened, or look at the routine run result.
3. Compare: does it exist, match what was claimed, and look finished? Note dates, sizes, or counts that disagree.
4. Check for sloppy work: made-up sources, broken links, placeholders ("TODO", "lorem"), wrong dates or time zones, a "success" that hides an error, or an external action without a recorded yes.
5. Tag the claim and write one line of evidence (what you opened, what you saw).

## Rules
- Never upgrade Reported to Verified without opening the thing.
- If a check needs a login or tool you lack, tag it Reported and say what blocked you. Do not route around a block.
- If nothing important happened, say "nothing to verify" rather than padding.
- Record repeated failures per bot; they feed the weekly scorecard.
