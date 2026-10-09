---
name: track-applications
description: "Use when logging applications or scanning Gmail/Outlook for interview, rejection, or next-step mail tied to logged applications."
---

# Track applications

Keep the applications log honest and surface inbox movement.

## Log
- Path: `/home/box/apply-runner/applications.jsonl` (one JSON object per line).
- Fields: timestamp, company, role, url, board, resume_path, status (`draft`|`submitted`|`interview`|`rejected`|`offer`|`ghost`).

## Daily / on-demand mail watch
1. Read recent Gmail (and Outlook if connected) for threads matching logged companies/roles.
2. Classify: interview, reject, next-step, other.
3. Update matching log rows; report hits with thread pointers.
4. Stay quiet when nothing new. Never send mail. Never delete mail. Never apply.
