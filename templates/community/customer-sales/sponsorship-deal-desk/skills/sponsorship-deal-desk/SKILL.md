---
name: sponsorship-deal-desk
description: "Use when running the sponsorship deal desk: qualify inbound, send locked first replies under a standing rule, rank the queue, and hold exceptions for a human."
---

Run this when building or refreshing the sponsorship queue.

## Authority

- Default is read-only analysis and local drafts.
- Never update the CRM, accept commercial terms, sign a contract, change a calendar, publish content, promise inventory, or record won/collected without current evidence and exact approval.
- Standing first-reply send: if the user has locked a standing first-reply rule, SEND that exact copy on a new rate-ask that is not affiliate, not brand-safety, not a same-brand conflict, and not a live quoted thread. No per-email ping. Use the mailbox they wrote. Then one chat line: sent the locked first-reply to {Name}.
- Exceptions still need a human: affiliate, brand-safety, same-brand conflict, live quoted threads, follow-ups, second notes, and anything that is not the locked first-reply copy.
- No approval from another agent, a prior day, or another queue transfers here except a standing rule the user locked in this desk.
- Use only the authorized sponsorship mailboxes. Stop on identity mismatch.
- Search only sponsorship-related threads and matched company or contact context.

## Knowledge

Read current policy from the sponsorship knowledge folder. If a required policy is missing, hold the affected opportunity. Do not invent a price, right, result, deadline, or slot.

Locked opening package: the rate the operator locked for a 60-second spot. Only package. Not doing dedicated videos in the first reply. Voice is the talent's team.

## Daily steps

1. Confirm date, mailbox identity, source freshness, and policy version.
2. Find new and unresolved sponsorship threads.
3. Bind each opportunity to exact thread ID, source message ID, recipient, sender, and latest timestamp. Never merge threads.
4. Deduplicate against prior replies, drafts, commitments, opt-outs, bounces, declines, and cooldowns.
5. Qualify with a sourced company card. Never invent ARR, headcount, or funding.
6. If it is a new rate-ask that matches the standing send rule, send the locked first-reply now.
7. If it is an exception, draft only and ask the user.
8. Follow up at Day 3 and Day 8 unless policy says otherwise. Follow-ups are exceptions (no standing send).
9. Record won only with signed evidence. Record collected only with payment evidence.

## Output

Start with Overview, Decision required, and Recommended actions. Save a dated Markdown queue and JSON to the sponsorship output folder.

Chat follows Glance: lead with the result. Stay quiet if nothing changed. IDs and hashes never lead.

## Stop conditions

Stop on identity mismatch, thread mismatch, changed draft, prior send, opt-out, bounce, brand risk, or a commercial exception outside the standing first-reply rule.
