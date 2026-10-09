---
name: steward-ask-anything
description: "Use this when the owner asks an everyday GitHub question or chore that no other Steward skill owns: find, close, or sort issues, explain or review a change someone sent, find something in the code, releases, security warnings, gists, stars, who has access, usage, or \"what does this GitHub email/page mean\"."
---

## When to use
- Any plain-words GitHub ask with no other home. Owned elsewhere: new work → steward-board; file changes and merges → steward-land-a-change; "what needs me", notifications → steward-status; failed runs → steward-watchdog; keys → steward-secrets; invites, going public → steward-protect-and-share; archive, delete, move → steward-archive-and-move; errors and screenshots → steward-manual-gates.
- Never refuse a normal GitHub ask. If no tool does it, use the one-link gate (steward-manual-gates shape).

## Inputs
- The ask in their words. The repo from memory or the snapshot; confirm in one sentence if fuzzy.
- Look up the live connector tools and pick the one that does the job.

## Steps
1. Read first. Turn the ask into the smallest set of reads.
2. Homes:
   - Issues: find (issue search or list), close, reopen, label, assign, comment, split into sub-issues. "Sort my to-dos": group open issues into Needs you / Soon / Later with a suggested Priority; apply on yes.
   - A change someone sent (PR): read it and its changed files. Explain in three lines: what it changes, the risk, whether checks passed. A review (approve or ask for changes) posts as them: show the wording, then "Post this? Reply yes." Merging: steward-land-a-change.
   - "Where is X in my code": code search limited to their user or org, then read the file. Answer with the file name and a link.
   - "What changed": commit list or commit search, summed up in plain words.
   - Releases and tags: list and read. A new release has no connector tool: gate → `https://github.com/OWNER/REPO/releases/new` → **Publish release**, then read the latest release back.
   - Security warnings: Dependabot, code scanning, and secret scanning alerts. Give counts and plain severity, never secret values. A library fix lands via steward-land-a-change. Dismissing an alert: gate on the alert page. A private Free repo may not allow some alert lists; say so in one line.
   - Gists (small shared notes): list, read, create (secret by default), update. Scan first (steward-secrets scan gate). Deleting: gate on the gist page.
   - Stars: list, star, unstar.
   - Who has access: repo collaborators, org teams and members. Changes: steward-protect-and-share.
   - Usage and limits: no tool reads billing or Actions minutes. Gate → `https://github.com/settings/billing` (org: `https://github.com/organizations/ORG/settings/billing`). Never guess a number.
   - "What does this email, page, or word mean": GitHub's support docs search plus reads, answered in plain words. Screenshots and errors: steward-manual-gates.
   - Discussions: list, read, comment.
3. Answer in plain words: the few facts that matter, one link as receipt. No list longer than five lines unless asked.
4. Small writes on their own work (close, label, comment): do it, say so, offer Undo. Anything that touches many items, posts a review as them, or makes something public: "Reply yes" first.

## Validate
- Every fact comes from a read in this turn.
- After any write, read the item back.

## Return
- One plain answer or one sentence on what changed.
- One link as receipt.
- One next step.

## Needs approval
- Reads: none.
- A review posted as them, changes to many items at once, a release on a public repo: their yes.
- Delete, public, paid, invite: the approval boundary in steward-charter.
