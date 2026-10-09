---
name: security-finding-tracker-sop
description: "The standard operating procedure for logging every security finding, bug, and deferred hardening item as a tracked ticket in your bug tracker — the single system of record. Works with any tracker (ClickUp, Jira, Linear, GitHub Issues, etc.)."
---

# Security finding tracker — SOP

Your bug tracker is the **single system of record** for everything you find. Every weakness, bug, or piece of deferred hardening lives there as a ticket. This SOP is tracker-agnostic: it works with ClickUp, Jira, Linear, GitHub Issues, or whatever the owner connects. Map the generic pieces below onto your tracker's equivalents (ticket = issue/card/task; status = state/column; label = tag; comment = note/activity).

## The one rule that overrides everything

**Log every finding the moment you can prove it. Never leave it as a soft note, a "for the owner to judge" aside, a chat message, or a TODO in a file.** If it is real, it is a ticket. Logging never waits on a fix, a decision, a sync, a review, or anything else — the ticket comes first, discussion happens on the ticket. A finding that lives only in your head or in chat does not exist as far as the team is concerned.

Corollary: do not batch or "bulk submit" findings at the end of a session. Log each one as you prove it. Before creating a ticket, search the tracker so you reopen or comment on an existing ticket instead of filing a duplicate.

## Classify what you found

Every item is exactly one of these:

- **Bug** — the app behaves wrongly (wrong result, broken flow, data corruption). File it even if nobody will fix it soon.
- **Security finding** — a weakness that lets someone do something they should not (access another user's or tenant's data, escalate privilege, bypass a limit, leak a secret, spend money, take the site down). These are usually the highest priority.
- **Deferred hardening / tech debt** — work consciously put off: a later hardening step, a revisit, a known gap the owner parked. It is **not** a bug (if the app behaves wrongly it is a bug, not tech debt). Mark it clearly as deferred and let the owner decide its fate; do not silently close or resolve it yourself.

When a finding needs a product/design decision only the owner can make, mark it as needing the owner and assign it to them with the single question they must answer.

## Write every ticket in plain English

Write so someone with no history of the finding understands it. No internal codes, no jargon in the summary. Use the application's **exact on-screen names** for pages, buttons, fields, and messages — not internal route names or code identifiers — so anyone can follow along in the real UI.

Each ticket's body has these sections, in order:

```
## What is wrong
One or two plain sentences. The user-impact summary: who is affected and what they can do that they shouldn't.

## Where you see it
The exact UI path: page > tab > button, and the on-screen text. The public URL/path (never an internal secret/admin-only path).

## How to reproduce
1. Numbered steps someone else can follow, with REAL values (the exact input, the exact account type used — a test account, never a real customer).
2. ...
3. ...

## Expected vs actual
- Expected: the correct, safe behavior.
- Actual: what actually happens (the weakness).

## Why it matters
One sentence that justifies the priority — the concrete risk (data exposure, account takeover, money loss, downtime).

## What is needed
The fix, or — when it needs the owner's decision — the one question for the owner.

## Background
How you found it, related tickets, and any evidence pointer.
```

## Title, priority, and labels

- **Title:** `<ID or ticket key> · <what is wrong, in one plain sentence>` — what a person sees, not the code.
- **Priority:** use your tracker's scale. Suggested mapping:
  - *Urgent/Critical* — a security hole, a leaked secret or personal data, data loss, the app broken for users, or anything blocking a release.
  - *High* — a core feature wrong, money/credits wrong, or a main rule broken.
  - *Normal* — wrong behavior with limited reach, or a workaround exists.
  - *Low* — wording, layout, tidy-up, small inconsistency.
- **Labels:** tag the area(s) it touches (e.g. login, billing, import/export, contacts/records, admin, notifications, jobs), its kind (security, data, money, code quality), and any flag (e.g. needs a real paid-provider call, changes live data) so findings are filterable.

## Proof to attach

Match the proof to the kind of finding:

- **On-screen behavior** — a headed browser run following the written steps, with screenshots.
- **Wrong/missing data** — a read-only query showing the records as IDs and counts (never personal values).
- **Code-level issue** — the file and line at a named commit, plus where in the app that code runs.
- **Security** — a safe probe that changes nothing, or the code read. Never a destructive attack on live data.
- **Logs** — a count-only scan (counts, never the logged values).

Keep written evidence outside the ticket (in your repo/evidence store) and point to it from the ticket. **Never put secrets, keys, tokens, internal-only admin paths, or real people's personal data on a ticket** — write "a contact's phone number," not the number.

## Keep a dated backup before you edit

Before you edit or bulk-change tickets (status sweeps, field migrations, re-labeling), take a **dated backup/export** of the affected tickets so a mistaken edit is recoverable. Note the backup location in your working log. The tracker is the system of record; treat edits to it with care.

## Workflow states (map to your tracker)

A ticket moves through: **Open** (logged and proven, nobody fixing yet) → **In progress** (someone is reproducing, finding the cause, fixing, and proving the fix) → **Review** (a second person re-checks, never the fixer) → **Completed** (review passed, not released) → **Closed** (shipped). A deferred-hardening item sits in a **deferred/tech-debt** state until the owner rules on it. A finding that comes back **reopens its existing ticket** — never open a second ticket for the same issue.

## Never-do list

- Never leave a real finding as a soft note instead of a ticket.
- Never bulk-submit a backlog at end of session; log as you go, and search before filing to avoid duplicates.
- Never silently close or resolve a deferred item the owner hasn't ruled on.
- Never put secrets or real personal data on a ticket.
- Never let logging wait on a fix, a sync, or a decision — the ticket is first.
