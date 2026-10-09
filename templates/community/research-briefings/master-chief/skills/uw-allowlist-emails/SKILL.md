---
name: uw-allowlist-emails
description: "Use when adding or removing UW site users via the Production ALLOWED_EMAILS allowlist."
---

# UW site allowlist (ALLOWED_EMAILS)

## When to use
Operator asks to add or remove someone as a UW site user / allowlist email.

## Rules
- Lowercase emails; comma-separated; no spaces.
- Production only on the hosting platform for the UW site.
- Never change site password, deploy tokens, or webhook secrets.
- Prefer doing it yourself (browser or CLI). Only ask the operator to sign in if login is required.
- Keep a local mirror file in sync after Production is updated.

## Steps
1. Read the local ALLOWED_EMAILS mirror; add or remove the email; write the mirror back.
2. Update Production ALLOWED_EMAILS to match the mirror.
3. Redeploy Production; wait until Ready.
4. Tell the operator: email added or removed, and that Production is Ready.

## Remove
Same flow: drop the email from the list, save Production env, redeploy.
