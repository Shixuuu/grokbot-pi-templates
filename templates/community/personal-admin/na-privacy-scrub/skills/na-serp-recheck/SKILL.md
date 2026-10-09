---
name: na-serp-recheck
description: "Use when verifying a removal worked or scheduling follow-up — recheck listing HTTP and Google snippets; outdated-content only after source is gone."
---

# NA SERP recheck

## Goal
Prove a removal stuck; handle snippet lag separately from source deletion.

## Steps
1. Wait for the site’s claimed SLA (email removals often ~3 business days — “sent” ≠ gone next day).
2. Recheck the listing URL (HTTP status + visible PII).
3. Recheck Google/Bing SERP for the same query used in recon; compare to dated artifact.
4. Only after source is 404/gone: file Google outdated-content / removal for stale snippets.
5. Schedule another SERP pass if snippets linger (hibernated profiles, closed avatar accounts, etc.).

## Stop rules
Do not claim “done” on email-sent alone or on free US broker empty results.

## Success
Source clear + SERP clear, or awaiting with a scheduled recheck noted.
