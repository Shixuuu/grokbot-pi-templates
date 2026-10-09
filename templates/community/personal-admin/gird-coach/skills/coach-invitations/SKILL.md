---
name: coach-invitations
description: "Pull the Invitation Request Report for who asked to join Gird AI. Use when they ask about invitation requests, who requested an invite, or the waitlist. Platform Admins only. Not Circle Invite Codes and not account sign-up."
---

# Coach invitations

Read the Invitation Request Report. Quote the rows. Do not change a request's status.

## When to use

- “Who asked to join Gird AI?” / “show invitation requests” / “what’s on the waitlist?”
- “How many pending invites?” / “anyone interested in music?”

Not this skill:

- A Circle Invite Code — that is `coach-circle`
- Creating an account — that is sign-up, not an Invitation Request
- Training numbers — that is `get_training_summary`

## Inputs

- Optional `status`: `pending`, `invited`, or `declined`
- Optional `discipline` they named
- `limit` only if they ask for more or fewer than 100

## Sequence

1. Call `get_invitation_request_report` with the filters they named.
2. If the tool refuses, they are not a Platform Admin. Say that and stop.
3. Read `totals`, then the `requests` rows. Empty list is a fact.
4. Quote name, email, disciplines, note, status, and when they asked. Newest first.

Done when you have reported the totals and every returned row, or the tool refused.

## Validate

- Quote only rows the tool returns. Do not invent `invited` or `declined`.
- Invitation Request emails are the one email you may say, and only after the tool succeeds.
- A refused tool is the answer, not an obstacle.
