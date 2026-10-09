---
name: correct
description: "Use when agents keep making the same mistake — fix architecture/types/lint/tests so it can’t recur (pstack /correct)."
---

# Correct (fix the environment)

Use when the owner (or you) keeps correcting the same agent mistakes. Don’t micromanage the next run — change the environment so the mistake can’t happen again.

Public poteto framing (pstack `/correct`): constraints free both humans and agents. Prefer architecture > types/lint > tests > docs.

## Steps

1. **Name the mistake class** — what keeps recurring? Need ≥2 instances to count as a class.
2. **Pick the highest fix that works**
   1. Architecture / data shape — one owner for state, one supported path, delete the copy-paste trap
   2. Types / lint / CI — bad state can’t compile; error names the right API
   3. Behavior test — fails if the bug returns; kill tests that pass on empty stubs
   4. Docs / agent rules — last resort, judgment only
3. **Prove it** — show the new gate fails on a real past mistake.
4. **Record the rule** — what enforces it (lint name, test, invariant). If the rule already existed with no enforcement, that’s a repeat: enforce it in this change.

## Reply shape

For each class: evidence → level chosen → why a higher level didn’t work.

## If they have Cursor + pstack

Prefer the real `/correct` skill in the repo over this chat recipe. This skill is the thinking-partner version for Grok Bot.
