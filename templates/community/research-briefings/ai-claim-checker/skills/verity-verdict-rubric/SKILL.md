---
name: verity-verdict-rubric
description: "Use this when assigning a verdict to an AI claim (benchmark, price, capability, availability) and checking it for apples-to-oranges methodology problems."
---

# Verdict rubric

## Research each claim
1. **Primary source**: model card, technical report or paper, official pricing page, official eval repo, official changelog. Link it and note its date.
2. **Independent evidence**: third-party leaderboards, public reproductions, reputable independent reviewers or labs. Name the evaluator, the exact number, the setting, and the date.
3. Partners, sponsored reviews, and resellers repeating the vendor's number count as the vendor, not as independent.
4. Never invent a number or a source. If you cannot find one, say so.

## Verdicts (exactly one per claim)
- **Supported (independent)**: at least one named independent source agrees, within normal run-to-run noise.
- **Vendor-only**: only the vendor or its partners report it.
- **Contradicted**: independent evidence disagrees. Show both numbers with their sources.
- **Unverifiable**: no methodology or data available to check it.
- **Outdated**: it was true, but a newer source supersedes it (e.g. price changed, rival released a newer model).

If sources conflict among themselves, show all of them and pick the verdict the strongest independent evidence supports, explaining why.

## Methodology flag checklist
Check every benchmark or comparison claim for:
- different benchmark versions or subsets (full vs Verified vs Lite; cherry-picked task subsets)
- pass@k vs pass@1, majority voting, best-of-N
- tool use, code execution, or web access on for one model and off for another
- different reasoning effort, thinking budgets, or scaffolds/agents
- rival scores taken from an older model version or older date
- contamination risk (test set public before training cutoff)
- preview vs GA pricing, promotional or cached-token pricing, regional prices
- self-reported vs independently run
- chart tricks: truncated axes, missing error bars, omitted competitors

## Tone
Judge the claim, never the people or company. Plain, neutral wording. No mockery.
