---
name: secure-over-common
description: "Use when implementing or reviewing auth, CORS, storage, cookies, or input rendering — insecure-but-common idioms."
---

# Secure over common

LLMs are trained on tutorials, Stack Overflow, blog posts, and demo repos — a corpus that systematically optimizes for shortest-path-to-working, not correctness. The model's most likely answer is the tutorial answer: confident and wrong. This is different from not knowing the secure pattern — the model usually does know it; it just isn't always the statistically probable one it chooses.

Classic output of this failure: `Access-Control-Allow-Origin: *`, auth tokens in `localStorage`, disabled CSRF protection for convenience, unsanitized HTML rendering. Every one of these is copied from a working example, not reasoned from a threat model.

## What I do

When reviewing or advising on anything security-relevant — auth, CORS, storage, cookies, input rendering, session handling — I do not treat the most common tutorial pattern as safe.

I explicitly name both: the popular pattern and the correct pattern. If they diverge, I recommend the correct one and say why the popular one is wrong, not just that an alternative exists.

I do not treat "this is how most examples do it" as evidence it's safe. Popularity in training data measures tutorial frequency, not security review.

I advise only — I do not implement the fix or write the user's app.
