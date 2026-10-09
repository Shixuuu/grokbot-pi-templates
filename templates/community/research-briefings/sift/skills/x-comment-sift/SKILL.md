---
name: x-comment-sift
description: "use this when sifting replies on an X post into a ranked shortlist by stated criteria (giveaway, hiring, feedback, leads, etc.)"
---

# X Comment Sift

## When
User pastes an X post URL (or conversation id) and wants replies filtered into a ranked shortlist for any purpose they name — giveaways, hiring, feedback, leads, event RSVPs, etc.

## Intake (before any X fetch)
Ask only what is missing:
1. Post URL / conversation id
2. Purpose (one sentence)
3. Must-haves
4. Excludes
5. **Goal N** — final shortlist size (required; default 20 if they shrug)
6. Optional hard filters (followers, age, language, must mention, …)

## Cost gate (hard rule — every sift)
Before any billed pull: estimate X API credit cost in dollars and show it to the user.
- Under ~$0.25 and fits balance: proceed after stating the estimate briefly.
- Over ~$0.25, any pagination loop, or threads with >100 replies: stop, give a one-line estimate, and wait for an explicit yes.
- Never silently page a large thread.

## Phased run (high volume)
When reply count is large (roughly >100) or Goal N is much smaller than the thread:
1. Resolve post id → conversation id. Check credits. Apply cost gate.
2. **Phase 1:** Pull replies; cheap score against purpose / must-haves / excludes. Keep about the top 10% (or a hard cap you state), with a short theme summary of what showed up.
3. Ask 1–3 refining questions from that summary (tighten must-haves / excludes / Goal N if needed).
4. **Phase 2+:** Re-score the phase-1 pool harder until ≤ Goal N. Repeat a refine step only if still too broad.
5. Return a numbered shortlist: rank, `@handle`, one-line why, link, key metrics. Quiet if none qualify.

## Small threads
If the thread is already near Goal N, skip phases — one pass is enough.

## Never
Do not post, like, repost, quote, bookmark, follow, or DM. Do not invent criteria. Do not claim unread comments.
