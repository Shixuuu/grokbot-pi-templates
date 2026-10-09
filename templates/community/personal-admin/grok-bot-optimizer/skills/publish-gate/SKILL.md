---
name: publish-gate
description: "Use before staging or publishing a public bot template — require live provider proof or an explicit owner SKIP."
---

# Publish gate

Before staging or publishing a public bot template / shareable optimizer:

## Gate
**Live proof** (real dry-run against the target provider with a working key path) **or** an **explicit owner SKIP** recorded in chat.

## If live path is blocked
1. Name the block (secure card failed, needsAuth, missing key).
2. Offer exactly two options: fix auth/key **or** SKIP live dry-run and stage anyway.
3. Only stage after the owner chooses. If SKIP, write it into the run note: `SKIP live dry-run — owner <date>`.

## Never
- Treat clipboard “I have the key” as completed live proof until the dry-run actually passes.
- Claim zero caveats / production-ready while live proof is skipped or contradictory evals REJECT.
- Use marketplace install counts as proof.
- Invent dollar savings from proxies or claim harness / all-chats coverage.
