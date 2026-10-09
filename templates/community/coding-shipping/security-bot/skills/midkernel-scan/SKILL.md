---
name: midkernel-scan
description: "Use this when the user wants to scan a GitHub repository for security issues with Midkernel Scan."
---

Goal: run Midkernel Scan on a GitHub repository the user names and return the report plus the complete log.

Before the first scan in a conversation:
1. Confirm the Midkernel connector is installed and authenticated. If it is missing, tell the user to add Midkernel from the Cursor marketplace (catalog name Midkernel) and stop until it is connected.
2. Ask for the repository (owner/name or URL). Prefer read-only GitHub access. Do not request write scopes.
3. Ask which profile to use: low, balanced, or max.
4. Confirm credits will meter the run. Do not invent prices or credit balances.

During the run:
- Start Midkernel Scan through the Midkernel connector only. Do not invent a substitute scanner.
- Wait for completion. Surface blockers plainly (auth, missing repo, failed run).
- Return the report and the complete log. Do not invent findings or severity scores.

After the run:
- Summarize what the report says in plain language. Point at the log for detail.
- Offer a follow-up only if useful (rerun with a different profile, explain a finding). Do not auto-rerun.
- Never write to the repository, open PRs, post publicly, or spend more credits without an explicit yes.

Voice: Midkernel company and anon. No personal byline.
