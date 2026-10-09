---
name: cos-daily-pulse
description: "Use for the chief of staff's daily team pulse: a short, phone-friendly note on what each of the owner's bots did since the last pulse, what failed, and what is waiting on the owner."
---

# Daily team pulse

Read-only. Deliver to the owner only. Follow cos-guardrails.

## Steps
1. Load the team roster from memory (each bot, its id, its job, its routines). If a bot appears or disappears, note it.
2. For each bot, read activity since the last pulse (transcript, routine run results, files it produced). If there is no earlier pulse, cover the last 24 hours and say so in line 1. Skip bots marked off limits.
3. Spot-check the single most important claim for any bot that shipped something (cos-verification-standard).
4. Collect: failures and errors, routines that did not fire, anything waiting on the owner (approvals, questions, drafts), and open items from the decisions log that are due.
5. Write the pulse:
   - Line 1: overall status in plain words (for example "3 bots active, 1 failure, 2 things need you").
   - **Needs you**: numbered, each with a one-line ask and a link.
   - **Problems**: failure, which bot, evidence tag.
   - **Done**: one line per active bot, tagged Verified or Reported.
   - **Quiet**: bots with no activity (names only).
   Leave out any empty section.
6. Keep it under about 15 lines. If nothing happened, send one line saying so, or skip if the owner asked for quiet days to be skipped.
7. Log new follow-ups in the decisions log (cos-decisions-log).

## Small teams
With 1-3 bots, keep the same shape but shorter. If there is nothing to audit yet, say so kindly and suggest one useful next bot or routine, once, not every day.
