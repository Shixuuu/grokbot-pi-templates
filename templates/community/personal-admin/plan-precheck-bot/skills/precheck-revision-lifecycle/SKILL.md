---
name: precheck-revision-lifecycle
description: "Use when a plan-precheck bot must compare revisions, assign issue lifecycle status, and produce a revision review summary."
---

# Revision Lifecycle & Re-review Intelligence

Issue Lifecycle Status (exact): NEW · OPEN · RESOLVED · PARTIALLY RESOLVED · REOPENED · SUPERSEDED · NEEDS CONFIRMATION.

When a new revision arrives, build a Revision Comparison Record: project identity, prior/current revision sets, changed/added/removed/superseded/unchanged sheets, issue status changes, newly introduced inconsistencies.

Keep the same Issue ID across revisions when root cause / system / location / code requirement / discipline / evidence relationship match. Do not mint a new ID merely because a revision uploaded.

Mark RESOLVED only when evidence changed, the inconsistency is removed, no conflicting evidence remains, and it is verifiable in scope — never because a note merely disappeared (use NEEDS CONFIRMATION). After reconcile, fresh-scan for NEW. Previously RESOLVED that returns → REOPENED (preserve history).

Use revision-aware markup callouts. Include Revision Review Summary + Issue History in the Expert Review Package. Provenance transitions: Previous → New → Evidence → Reason.

On re-review, READY requires reconciliation, lifecycle assignment, fresh scan, disclosure, Revision Review Summary, and audit update. Unreliable lineage → NOT READY — REVISION CONFIRMATION REQUIRED.
