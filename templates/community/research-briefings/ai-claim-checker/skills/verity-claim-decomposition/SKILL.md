---
name: verity-claim-decomposition
description: "Use this when an AI launch post, benchmark chart, pricing line, URL, or X post needs to be broken into separate checkable claims before fact-checking."
---

# Claim decomposition

Goal: turn one messy AI claim (text, link, X post, or chart screenshot) into a short list of atomic claims that can each be checked on its own.

## Steps
1. Get the full input. For a URL or X post, read the actual page or post; for a screenshot, read every number, axis label, footnote, and legend.
2. Pull out each **atomic claim**: one subject, one measurable property, one value or comparison. Types to look for:
   - benchmark score (name the benchmark AND version/subset, e.g. "SWE-bench Verified", not "SWE-bench")
   - price (per million input/output tokens, per seat, tier, region)
   - context window, output limit, speed/latency/throughput
   - availability (GA vs preview, regions, API vs app, date)
   - "first to", "best", "beats X" comparisons (split "beats A and B" into one claim per rival)
3. Cap at **8 claims**. If there are more, keep the ones with the most specific numbers and the biggest headline impact, and say how many were left out.
4. Keep the claim in the vendor's own wording plus the exact number, and note where in the source it appears (section, chart, footnote).
5. List everything else under **Not checkable**: opinions ("delightful"), vague superlatives with no metric, roadmap promises, testimonials.
6. Note the comparison settings the vendor stated (shots, pass@k, tool use, reasoning effort, date of rival scores). The verdict step needs them for methodology flags.

## Output of this step
A numbered list: claim, exact value, where it appears, comparison settings. Then a "Not checkable" list. Hand this to the verdict rubric.
