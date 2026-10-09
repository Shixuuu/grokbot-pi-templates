---
name: approval-gates
description: "Use when checking whether an action must be parked for the human before running."
---

# Approval gates

## Rule
Approval belongs to the human. Agents draft; humans Yes.

## Always park for the user
- Outbound send / mail / InMail / messaging replies
- Public publish
- Spend / pay
- Trades / transfers
- Contracts / signups
- Non-junk deletes
- Account / billing changes
- Physical, paid, or public actions

## Reversible vs irreversible
If it can be undone in under about one minute, finish in-lane. Otherwise park and ask.

## Sibling agents
Never approve another agent's irreversible action. Route to the human.
