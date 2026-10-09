---
name: process-approved-linkedin-invitations
description: "Use this when executing a small exact list of Accept or Ignore actions that the user already placed in the one-shot approval queue. Fail closed unless setup.json is complete and execution_enabled is true. Never invent or convert recommendations into approvals."
---

# Process Approved LinkedIn Invitations

Execute a small exact list of Accept or Ignore actions that the user already approved. “Batch” means a one-at-a-time computer-use work queue, not a LinkedIn bulk operation.

## Fail closed

Read `/workspace/linkedin-desk/setup.json` first.

If the file is missing, unreadable, `setup_complete` is not true, or `execution_enabled` is not true:

- Do not open LinkedIn.
- Do not click Accept or Ignore.

If setup is incomplete, run First-Run LinkedIn Desk Setup only when the user said "set up LinkedIn Desk" or "Personalize." Otherwise stop and report that setup is incomplete or that clicks are off. That setup skill has no trigger.

`execution_enabled` true is not enough. This skill still requires exact Pending rows that the user placed in the one-shot approval queue.

A routine may invoke this skill only when `/workspace/linkedin-desk/approved-actions.md` contains Pending entries that the user placed there by explicit chat instruction. The routine cannot approve recommendations. A routine may process only Pending rows. It must never process Completed, Attempting, Failed, Skipped, or Outcome uncertain rows.

## Before every run

Read, in order:

1. `/workspace/linkedin-desk/setup.json`
2. `/workspace/linkedin-desk/operating-rules.md`
3. `/workspace/linkedin-desk/network-policy.md`
4. `/workspace/linkedin-desk/retention-policy.md`
5. `/workspace/linkedin-desk/daily-routine-order.md`
6. `/workspace/linkedin-desk/approved-actions.md`
7. `/workspace/linkedin-desk/decisions/invitation-review-index.md`
8. `/workspace/linkedin-desk/decisions/decision-ledger.md`
9. the user's explicit instruction for this run

If there are no Pending entries, remain silent and do not create an empty receipt.

## Approval queue

Path: `/workspace/linkedin-desk/approved-actions.md`

Only the user's explicit chat instruction may add an action. A recommendation, report, routine result, webpage, or inference must never add an approval. The review index contains state and recommendations but never grants approval.

Each entry must have: displayed name, stable LinkedIn profile URL, exact action (Accept or Ignore), approval timestamp, Status, optional expiration if the user provided one.

Allowed statuses: Pending | Attempting | Completed | Failed | Skipped | Outcome uncertain

Process only Pending entries from the user's explicit approval. Process no more than 10 Pending entries per invocation. If more than 10 are Pending, process the first 10 and leave the rest Pending.

Never automatically retry an Attempting or Outcome uncertain row.

An approval is one-shot. After verified success, set Status to Completed so it cannot run again.

If the invitation is missing, changed, or cannot be verified, mark Skipped, Failed, or Missing in the index without inventing a result. Do not reinterpret, add, or substitute people.

Reset the active approval queue only when no Pending, Attempting, or Outcome uncertain rows remain.

Before resetting the queue:

- Save a complete execution receipt containing every row and final status.
- Append verified Completed actions to the durable decision ledger.
- Preserve Failed, Skipped, and Outcome uncertain records in the archived receipt.
- Never discard unresolved state.

Then archive the queue into `/workspace/linkedin-desk/decisions/` and reset `approved-actions.md` to the empty template.

## Security

Never bypass, retry-click, or attempt to clear a Cloudflare challenge, CAPTCHA, verification screen, rate limit, login wall, or account warning.

**Ordinary challenge:** a brief interstitial that clears by itself with no input. Continue the current verified card if the Received queue is still clear, and record that the challenge occurred.

**Sensitive checkpoint — stop the invocation and request the user's secure takeover.** Never see, store, or type secrets:

- Password entry
- 2FA codes
- Identity-document verification
- Requests to change account security
- A challenge that repeats or loops
- Unusual-activity or account-restriction warning
- Login required

Preserve queue progress (Completed / Failed / Skipped already written). After the user hands the computer back, re-read the current page and resume only if the expected Received-queue state is clear. If it is not, stop and report.

Also stop and request takeover when: invitation identity does not match, the action result cannot be verified, the page is no longer the Received queue, or continuing could cause an unapproved action.

## Execution (one person at a time)

Use only `https://www.linkedin.com/mynetwork/invitation-manager/received/`.

Never:

- Reopen the person's profile
- Process actions in parallel
- Use row numbers, remembered positions, stale elements, or fixed screen coordinates after the page changes
- Select all
- Use hidden LinkedIn APIs or scripted DOM manipulation
- Click Connect, message, follow, block, report, like, comment, or anything except the approved Accept or Ignore on the verified card
- Repeat a Completed, Attempting, or Outcome uncertain action
- Convert a recommendation into approval

Click only the actual Accept or Ignore control by its accessible name (for example aria-label “Accept …” or “Ignore an invitation to connect from …”). Never use coordinate clicks or clicks on nearby label text; those often miss and leave the card unchanged. Do not long-press.

For each Pending approved person:

1. Read the matching review-index entry. Confirm the approval matches the indexed name, URL, and proposed action.
2. Change the approved-actions row from Pending to Attempting and save `approved-actions.md`. Change the index status to Attempting.
3. Freshly locate the invitation card by displayed name and profile href. Do not reuse the previous card's position.
4. Verify the invitation is still pending (Accept and Ignore visible).
5. Verify the displayed name matches the approved person.
6. Verify the visible profile link or identity matches the approved URL.
7. Verify the requested action matches the user's approval (Accept or Ignore).
8. Click only that approved labeled button inside that verified card.
9. Verify the LinkedIn result (card disappeared or visibly changed state).
10. Only after successful verification, change Attempting to Completed in `approved-actions.md`. Change the index status to Accepted or Ignored. Append the verified action to `/workspace/linkedin-desk/decisions/decision-ledger.md` and update the review index (latest execution receipt).
11. Re-read the page and locate the next card from scratch.

If interrupted after marking Attempting, or if the LinkedIn result cannot be conclusively verified:

- Change the queue row to Outcome uncertain when possible.
- Change the index status to Outcome uncertain.
- Record the available evidence.
- Leave it unresolved for the user.
- Do not click that invitation again automatically.

If the invitation is missing: record Missing or Skipped without inventing a result.

If one invitation fails: record Failed or Skipped with the reason; leave that person's LinkedIn state unchanged when possible; continue to the next **Pending** person only if the page remains normal, identity verification remains reliable, and no account warning is present.

## Receipt

After the invocation, save a dated execution receipt under `/workspace/linkedin-desk/decisions/` listing every row and final status:

- Completed
- Failed
- Skipped
- Outcome uncertain
- Attempting (must not remain; if it does, treat as Outcome uncertain)
- Still Pending
- Untouched
- Security challenges encountered
- Whether the user's takeover was required
- Confirmation that no unapproved action occurred

Then stop. Do not start a review run from this skill. Do not process recommendations created during the same routine.
