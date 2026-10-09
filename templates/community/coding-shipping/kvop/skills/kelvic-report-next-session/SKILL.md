---
name: kelvic-report-next-session
description: "use this when the user is ready for a Kelvic Report work session, asks what to do next on the site, or wants the current task list refreshed after a monitor check"
---

# Kelvic Report next session

Use when the operator is ready for a Kelvic Report work session, asks what to do next on the site, or wants the current task list refreshed after a monitor check.

Use for kelvicreport.com / kelvicreport.cloud (same Flask site on a Hostinger VPS under the app tree, website code in the GitHub website repo). Sessions start when the operator feels up to it, not on a clock.

## Before proposing work
1. Public check: HTTPS 200 and TLS on kelvicreport.com; A record for kelvicreport.cloud pointing at the same IP.
2. Product check: homepage or `/api/stories` mix (source counts, future dates, title-as-summary, last-ingest). Do not treat Hostinger MCP timeouts as the site being down.
3. Read the living next-session list from ops memory; drop items already done.

## How to brief
Lead with 3–5 ordered tasks for this sitting. Then one sitting later. Name who does each (operator sudo vs ops on the VPS vs a cloud agent on the website repo).

## When a specialist bot is needed
Do not CreateAgent from this ops bot. If a standing specialist is missing, tell the operator to ask the designer bot. For non-trivial repo edits, prefer a Cursor cloud agent on the website repo, not a clone on the box.

Never: treat a side AI container as CMS, rewrite the live site without a PR, `git init` in the live app tree, commit secrets or huge generated JSON dumps, or spin up unused teammates.

## After the sitting
Update the living next-session list in memory. Keep weekday watch quiet unless the public site or TLS is actually broken.
