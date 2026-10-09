---
name: path-recalibration
description: "Use this when digesting conversation history (pasted, transcript, or live chat) to rebuild the path of how user and AI came to understand a project, classify what exchanges actually meant, reaffirm load-bearing decisions made out of sync, choose next travel direction (sideways / backwards / forward) with necessary depth, and write a durable recalibration so future work does not drift back into corrected assumptions. Also use when friction appears or either side keeps repeating a point (not landing, colliding, or user advocating)."
---

# Path recalibration

## Purpose
Keep a living, path-aware model of how the user and AI came to understand a project. Do not only remember corrections or summarize chats. Reconstruct the path that produced the current working understanding, what each meaningful exchange changed, and how future reasoning must move differently.

Standing rule: **slow into the curve, accelerate out of the curve.** Prefer an early, bounded stop to stabilize soft understanding over optimistic forward motion. Sideways (scope) and backwards (redress) are cheaper than hours of false agreement that later must be excavated.

**What “slow into the curve” usually looks like:** use the default check-in — **“Vibe check — are we still building the same thing?”** — so the user can say where they’re pointed right now. Then calibrate from their answer and choose the smallest steps needed to get back to progress. Default to that light open, not a lecture. Deepen only as far as necessary to close the gap they just revealed. Do not use lab language like “we might be drifting” unless the user prefers formal tone.

## When this runs (triggers)
Do **not** run a full heavy digest on every message. Do **not** wait only for an explicit “recalibrate” ask (though that still counts).

Run a path pass when:

1. **Friction** — corrections, hesitation, “but / what about / what if / then how / why can’t we,” edge-case probes, soft or provisional agreement that feels load-bearing
2. **Repetition on either side**
   - **AI keeps restating the same point** → something isn’t landing, or the two frames are colliding somewhere in the process
   - **User keeps repeating the same point** → they are advocating something important enough to maintain across the chat; treat that persistence as a major path signal, not noise
3. **Explicit ask** — user wants recalibration, a digest, or a path check
4. **High drift risk** — about to take a large forward step, or a long stretch has passed without a stabilize

Light response first when appropriate: the vibe-check line above. Escalate to full classify → change record → travel choice when the check-in (or the friction/repetition itself) shows a real gap.

## Inputs
Accept any of:
1. Pasted conversation or excerpt
2. A transcript or prior chat the user points to
3. The live conversation in this thread

If the stretch is huge, work in passes: friction-first and repetition loops first, then confirmation from smooth flow. Ask once for the project name or short label if missing; otherwise infer and state it.

## Step 1 — Find path signals (friction-first + repetition)
Scan for moments where the working understanding was under pressure:
- Explicit corrections
- Hesitation / probing language (“but,” “what about,” “what if,” “then how,” “why can’t we,” and similar)
- Edge cases and counterfactuals
- Provisional agreement or deference
- Returns to the same hinge later
- **Repeated advocacy:** same point restated by user or AI across turns

Also note smooth stretches: what survived without pushback, what both sides kept building on. Treat smooth flow as **confirmation**, not the primary learning surface.

Signals are invitations to interpret. They do **not** automatically mean the AI was wrong. User repetition especially may mean the AI keeps missing their priority, not that they are stuck.

## Step 2 — Decide what actually happened
For each meaningful exchange, classify using surrounding context (not keyword rules alone). Prefer one primary label; note secondary if needed:

| Label | Meaning |
| --- | --- |
| user_corrected_ai | User changed the AI’s understanding of the project |
| ai_informed_user | AI corrected or filled a gap in the user’s understanding |
| missing_implication | User (or joint discovery) exposed an implication neither frame had held |
| edge_or_counterfactual | User tested a boundary or hypothetical |
| user_uncertain | Hesitation without a settled correction yet |
| provisional_deference | User went along while still soft on the implication (“you know this better”) |
| actual_agreement | Both sides own the same understanding and later turns treat it as given |
| unresolved | The hinge was left open, parked, or abandoned without a clear fate |
| collision_or_not_landing | Same point keeps being restated because frames collide or an implication isn’t landing |

Never collapse provisional deference into actual agreement.

## Step 3 — What changed in the working understanding
For each classified exchange, state in plain language:
1. **Before** — the assumption or frame in play
2. **After** — the refined working understanding
3. **Implications for later work** — what must not be assumed again; what is now load-bearing; what would reopen the frame

This change record is the heart of the skill. Labels without change-implications are incomplete.

## Step 4 — Resolution status (graded, not binary)
Judge sufficiency from the path, not from polite closure (“okay,” “makes sense” alone are weak):

- **Settled** — later turns treat the new understanding as given; user builds on it, restates it, or applies it without reopening the hinge
- **Provisionally held** — moved on with deference or soft assent; concern may return
- **Unresolved** — same hinge returns, reassurance loops, or subject changed with no fate
- **Scope still moving** — new missing implications or edge cases keep expanding the frame

Do not claim “full scope.” Report what is settled, what is open, and what evidence would reopen the frame.

## Step 5 — Reaffirm load-bearing decisions made out of sync (hard rule)
Updating the path model alone is not enough when work already moved on a soft or colliding frame.

**Hard rule:** If a **load-bearing decision** was made while out of sync — during unresolved friction, provisional deference, collision/not-landing, or false agreement — bring it back to the user for reaffirmation or revise before accelerating further.

Bar for “load-bearing”: did it steer **scope, architecture, priorities, or something already built**? If yes, surface a short list: what was decided, why it was out of sync, and ask keep / change / drop. Do not silently heal only the bot’s understanding while the plan or build still carries the drifted choice.

**Judgment for the rest:** Soft talk that never steered the build can be logged on the path without a ceremony. Do not turn every friction beat into a confirm-the-decision ritual.

Until load-bearing items are reaffirmed or revised, prefer sideways or backwards over forward on those hinges.

## Step 6 — Choose travel direction and depth
Pick **one** primary direction for the next move:

- **Sideways** — explain scope, implications, and how pieces relate; do not push the build ahead or reopen a settled fight
- **Backwards** — redress misunderstanding, bad assumption, or unresolved objection that later work would stumble on
- **Forward** — current understanding is stable enough; next step should use it, not re-litigate it

Then set **necessary depth**:
- How deep must we go to close the understanding gap that is missing **right now**?
- Respect limits: no lecture nobody asked for; no undershoot that leaves the same gap open
- Prefer a bounded probe or explanation that stabilizes the path, then accelerate

**Lightest slow-down (default when the frame feels soft):** **“Vibe check — are we still building the same thing?”** Use the user’s answer to calibrate where they’re pointed, then decide the next steps — sideways, backwards, or forward — at the depth their answer warrants. Only go deeper if that check-in shows a real gap.

If direction is sideways or backwards, say what “stable enough to accelerate” would look like.

## Step 7 — Write the durable recalibration
Persist (memory and/or a short project path note the user can keep) a path record, not a flat fact list:

```
Project: <label>
Path update (<date or turn ref>):
- Exchange: <brief>
- What happened: <label>
- Understanding change: before → after
- Status: settled | provisionally held | unresolved | scope still moving
- Next travel: sideways | backwards | forward (+ depth note)
- Do not regress: <assumptions that must stay dead>
- Still open: <hinges / implications>
- Needs reaffirmation: <load-bearing decisions made out of sync, if any>
```

On later turns for the same project, **consult this path before acting**. Do not fall back into an assumption the path already corrected or refined. Do not advance work that still sits on an unreaffirmed out-of-sync decision.

## Step 8 — Deliver to the user
Speak in clear prose (or a short structured brief if they ask). Lead with:
1. What actually changed in the working understanding
2. Any load-bearing decisions that need keep / change / drop
3. Recommended travel direction and depth (or the vibe-check line if that’s the move)
4. What is settled vs still open

Keep labels available but secondary. Offer one concrete next move that matches the chosen direction.

When the user needs to carry this understanding into another chat, bot, teammate, or fresh session, run **Path brief** and give them the paste-ready block (or offer it after a substantive recalibration).

## Anti-patterns
- Treating every “but” as “AI was wrong”
- Summarizing the chat without path or change-implications
- Storing only conclusions with no path or “do not regress” constraints
- Calling provisional deference “agreement”
- Claiming full scope when the frame is still expanding
- Accelerating a build while a soft hinge is still load-bearing and unresolved
- Healing only the bot’s memory while out-of-sync decisions still drive the plan or build
- Turning every soft aside into a reaffirmation ceremony
- Slowing into a long explanation when a simple vibe check would open the path
- Ignoring repeated advocacy (user or AI) as mere verbosity
- Running full digest on every turn with no friction or repetition trigger
- Using stiff lab phrasing as the default check-in
