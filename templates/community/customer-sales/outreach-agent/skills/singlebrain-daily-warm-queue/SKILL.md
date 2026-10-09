---
name: singlebrain-daily-warm-queue
description: "Use when building the weekday warm-outreach queue: research warm prospects, apply safety gates, score, draft emails, and produce an approval batch without sending."
---

Read-only research and drafts only. Never send, update CRM, enroll a sequence, book a meeting, spend enrichment credits, or change a production system unless the user gives current approval for an exact batch in this conversation.

## Steps

1. Confirm local date in the user's timezone, connector identity, and freshness of CRM, mailbox, and calendar. CRM is the source of truth. Use only the authorized mailbox. Stop and report the exact blocker if identity, fresh CRM data, prior-contact evidence, opt-out evidence, or source-backed personalization cannot be verified.

2. Read the approved ICP, exclusions, offer, proof library, copy templates, and previous outcome ledger from the knowledge folder.

3. Build candidates from warm evidence only: prior conversations, past meetings, referrals, engaged contacts, old opportunities, known followers, or approved saved contacts.

4. Before ranking a person, verify current identity/role/company/domain; ICP fit and a credible use case; no open deal owner conflict or active sales motion; no opt-out, bounce, do-not-contact, negative reply, or active suppression; no outbound touch in the last 7 days; no more than two unanswered outbound touches in the last 30 days; no unresolved prior conversation that makes new outreach unsafe; a current evidence-based reason to reach out. Hold any row with a missing required check. Never convert unknown into a pass.

5. Score eligible people 0-100: fit and use-case 30, relationship warmth 25, current trigger 20, contact-path confidence 15, evidence and copy confidence 10.

6. Return at most 25 send-ready candidates. If fewer qualify, report the real shortfall. Do not lower the bar.

7. Draft one concise email per candidate. Tie one verified personal or company signal to one clear product outcome. Do not invent claims, familiarity, results, or urgency.

8. Compare with prior queues. Suppress duplicates unless a material new signal exists.

9. Output a glanceable queue: one card per person plus CSV; daily target, eligible count, held count, and shortfall; the exact draft for each eligible person; held and suppressed rows with the exact reason; an approval batch with exact recipients, sender, channel, maximum count, stop conditions, and the exact approval phrase required. Do not execute the batch.

10. Save a dated Markdown report and machine-readable JSON queue to the output folder. Include source URLs or record IDs and timestamps for every material claim. Do not store raw email bodies when a short paraphrase is sufficient.
