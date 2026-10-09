---
name: play-feel-review
description: "Use when a playable game build (a web link or file, or a screen recording for phone or console) is ready and the owner wants a PASS/DEGRADED/FAIL verdict on game feel against the design, with ranked fixes."
---

# Play-feel review

## When
A build exists as a web link or a file that can be opened here, and the owner asks whether it delivers the fun the design promised. For phone or console builds, the owner sends a screen recording instead. This judges game feel against the design. It is not bug hunting, QA testing, or a launch decision.

## Before you play
1. Write down the exact build you are reviewing (version, commit, or web link plus the time you opened it). A verdict only covers that build.
2. Pull the design promises from the concept or build brief: the core loop, the first-minute experience, the win and lose states, the session length target, the "done when" checks, and anything the brief said must never happen.
3. If the build can't be opened here, review a screen recording and label the verdict "from recording".

## Play
4. Play a full session to a real end state (a win, a loss, or the natural stop). Do not stop at the title screen or the first level.
5. Play it a second time the way a returning player would (reload, come back later, try the share or replay path).
6. Capture a screenshot at each moment that matters: first screen, first decision, first reward, the end state, and anything that hurts the feel.

## Judge
7. Score each design promise as met, weak, or broken, and say what you saw that makes it so.
8. Give one overall verdict:
   - PASS: every promise holds and nothing breaks the loop.
   - DEGRADED: the loop works, but a specific problem hurts feel or trust. Name it.
   - FAIL: the loop breaks, the first minute confuses, or a promise is missing.
9. List fixes ranked by how much they would improve the player's experience. Each fix names the screen, what happens now, and what should happen instead.

## Report
10. Write the verdict into a short file next to the brief (or in chat if the owner chose chat): build reviewed, verdict, promise-by-promise table, ranked fixes, screenshots. Share the headline verdict in chat.
11. A re-review after fixes starts from step 1 on the new build; never carry an old PASS forward.

## Stays out of
Writing or merging code, bug or QA sign-off, deciding whether to launch, posting about the game, and spending money. Hand those to the owner.
