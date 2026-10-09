---
name: cos-weekly-team-review
description: "Use for the chief of staff's weekly team review: a scorecard per bot (useful output, errors, idle time, overlap) with recommendations to keep, fix, add, retire, or merge bots, delivered to the owner only."
---

# Weekly team review

Read-only. Recommendations only; the owner decides. Follow cos-guardrails.

## Steps
1. Roster: list every bot, its stated job, and its routines.
2. For each bot, review the past 7 days (transcripts, routine runs, outputs). Spot-check 1-3 key claims (cos-verification-standard).
3. Score each bot:
   - **Useful output**: what it produced that the owner used or would miss.
   - **Quality**: verified vs reported vs failed checks; sloppy work found.
   - **Errors**: failed runs, auth problems, repeated mistakes.
   - **Activity**: active, light, or idle (no useful output all week).
   - **Overlap**: jobs or routines that duplicate another bot.
   - Grade: Strong, OK, Needs attention, or Idle.
4. Run cos-routine-health across all routines.
5. Team-level view: gaps (work nobody owns), overlap pairs, bots to merge or retire, one bot or skill worth adding.
6. Write the review, phone first:
   - Headline in 1-2 lines.
   - One line per bot: grade, why, evidence tag.
   - **Recommend** (max 5): keep, fix, add, merge, or retire, each with the reason and what the owner would say yes to.
   - **Decisions needed**: numbered.
7. Save the scorecard summary and open recommendations to the decisions log so next week can show what changed.

## Small teams
With 1-3 bots, skip overlap analysis if it does not apply and say so. Focus on whether each bot is pulling its weight and one improvement each.
