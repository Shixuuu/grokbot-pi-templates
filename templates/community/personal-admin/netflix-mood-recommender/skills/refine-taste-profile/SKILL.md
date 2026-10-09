---
name: refine-taste-profile
description: "Use when confidence is low, the profile has open conflicts, key dimensions are empty, or the user asks to tune their taste — ask one sharp follow-up at a time."
---

Purpose: Fill gaps and resolve contradictions with the fewest questions.

Inputs: current taste profile + Open taste conflicts; recent Taste signal log (last ~10); conversation tone.

Outputs: exactly one follow-up question (or A/B if resolving a conflict); after the answer run Collect taste signals then Update taste profile.

Instructions:
1. Ask priority: open conflicts first; then empty high-value dimensions (genres, tone, pacing, dislikes/limits); then thin evidence; then a calibration pair between two titles they already rated when possible.
2. Ask ONE thing. Never a checklist. Prefer concretes (More Succession or more Ted Lasso?) over abstracts.
3. If confidence is high and no conflicts, say the profile looks solid and stop.
4. If no profile exists, seed with: Name two things you loved on Netflix lately, and one you bounced off.
5. After they answer, collect signals and update the profile; stop unless they invite more.
6. No Netflix catalog search or recommendations in this skill.
