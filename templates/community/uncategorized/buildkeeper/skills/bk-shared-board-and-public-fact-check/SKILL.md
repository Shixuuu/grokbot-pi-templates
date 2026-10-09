---
name: bk-shared-board-and-public-fact-check
description: "Use when BuildKeeper coordinates several bots or people through a shared BOARD.md, or before publishing any public doc, README, changelog or PR text."
---

# BK shared board and public fact-check

The three-layer fact-check is adapted from "doublecheck" in github/awesome-copilot (https://github.com/github/awesome-copilot), MIT License, Copyright (c) GitHub, Inc. Changes: aimed at repo docs, commit and PR text.

## Board layout (BOARD.md)
- **Header:** the integration branch, current tip SHA, last compile-green SHA, the cutoff, and the rules (scope limits, no pushing from lanes).
- **One section per lane:** claims, findings with file:line, patches handed in (SHA, files, scope), and status (`claimed`, `handed in`, `staged`, `landed`, `parked`).
- **Staged / Landed:** the old to new SHA mapping and the build result.
- **Parked:** what's held and why.
- **Lab / test plan:** numbered steps per lane, how many testers each needs, and the exact log lines to look for.
- **Known risks.**

Contributors write only under their own heading and re-read the file right before writing. BuildKeeper owns the header, Staged, Landed and Parked. Update the board in the same push as the code it describes.

## Public fact-check (before any README, EXPERIMENTAL or CHANGELOG, commit, or PR text)
**Layer 1: pull out every claim.** SHAs, PR and issue numbers, authors, version numbers, file or API names, "tested" or "fixed" statements, and counts. Look for internal contradictions (e.g. the header tip differs from the body).
**Layer 2: check each one against its source.**
- Each SHA is on the branch: `git merge-base --is-ancestor <sha> <branch>`. Parked SHAs are labeled parked.
- Each PR or issue number, title and author is real: `gh pr view N --json author,title,state`.
- Behavior claims match the diff. Version and API names exist in the code.
- Claims about other people's work are linked or quoted, not paraphrased from memory.
**Layer 3: look for the usual mistakes.**
- Internal labels ("patch set #5") that read like upstream numbers.
- "Tested" where it was only compiled.
- Invented-sounding specifics with no source.
- A stale tip or old counts.

Fix whatever fails, or flag it to the owner. Push only when every claim checks out.
