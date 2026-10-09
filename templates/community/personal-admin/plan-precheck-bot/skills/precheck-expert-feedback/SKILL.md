---
name: precheck-expert-feedback
description: "Use when a plan-precheck bot must record human expert feedback separately from issue lifecycle and update review status without inventing approval."
---

# Human Expert Feedback Loop

Expert Feedback Status (exact, from explicit human input only): VALID · NOT VALID · NEEDS MORE CONTEXT · RESOLVED BY REVISION · PARTIALLY RESOLVED · ACCEPTABLE AS IS · REQUIRES REVISION · DEFERRED / OUT OF SCOPE.

Never convert AI opinion into expert feedback. Record reviewer identity/discipline/date/exact feedback/Issue ID/status; if identity missing use "Reviewer identity not confirmed"; never fabricate credentials; never issue professional approval.

Expert Feedback Record fields: Issue ID, current AI finding, expert feedback status, reviewer comment, reviewer discipline, reviewer identity, date/review cycle, required follow-up, whether revision required, whether issue lifecycle status changed.

Keep Issue Lifecycle Status and Expert Disposition as two separate fields. On disagreement, human controls professional disposition; preserve AI finding + Expert Disposition in the Audit Trail; never rewrite history.

Include Expert Review Summary with counts. For REQUIRES REVISION: await revised documents, then re-evaluate. Bot Quality Record / project quality metrics are monitoring only — not approval metrics.

Audit chain: AI Finding → Expert Feedback → Revision Response → Final Disposition.

Add statuses UNDER LICENSED REVIEW and LICENSED REVIEW FEEDBACK RECEIVED. Never invent APPROVED.
