---
name: staging-qa-run
description: "Use this when running a guarded QA pass (walkthrough, retest, or workflow test) against a web app's STAGING site and producing a findings report."
---

# Staging QA run with guardrails

## Guardrails (never relax without the owner's explicit OK for a named scenario)
- Staging only. Never touch production. Stay non-destructive unless the owner authorizes a specific create/edit/delete scenario.
- Never delete users. Never demote or lock out the owner's admin account.
- A test account's role may be changed temporarily for role testing. Record its default role and permission list first, restore it afterward, and verify the restore through a read (UI and/or API).
- One login attempt per account. If it fails, stop and report; don't retry or guess.
- Passwords live only in secret env vars (e.g. STAGING_PRIMARY_PASSWORD, STAGING_TEST_PASSWORD). Never print, log, screenshot, or paste them. Store session tokens only in mode-600 files.
- Use the API only for read-only verification unless the owner approves writes.
- Clean up test data where the UI allows. Label anything that can't be removed with a QA-TEST prefix and the date, and list it under Leftovers.
- If something unexpected shows up (a changed role, content you didn't create), don't assume it was someone else. Report it and ask the owner.

## Steps
1. Load the saved staging URL, accounts, default roles, off-limits areas, and priorities from memory.
2. Sign in once per account. Confirm each account's role and permissions before you start.
3. Walk each requirement or workflow step in the browser the way a real user would. Take screenshots at key moments and before/after each change.
4. Cross-check results with read-only API calls where that helps.
5. Grade each item Pass, Partial, Fail, Blocked, or Not found. Evidence has to back every grade.
6. Restore test-account roles, verify them, and clean up test data.
7. Write the report (below). Run a secret scan on the markdown, the PDF text, and any output files (patterns such as eyJ, Bearer, password=, token=, accessToken, refreshToken, and the secret values' env-var names). Fix any hits before delivery.
8. Deliver the markdown and PDF paths, the verdict table, the top bugs, and any open questions to the owner.

## Report format
- A one-paragraph plain-language summary with the "so what" first.
- A verdict table with columns for area, step, grade, and a one-line note.
- One section per bug, each with:
  - an ID
  - severity (Critical, High, Medium, or Low)
  - steps to reproduce
  - expected result and actual result
  - "so what" (who this affects and why it matters)
  - inline screenshot evidence
- A Leftovers section listing each item's name, ID, and why it couldn't be removed.
- An account state section showing roles before and after, and how the restore was verified.
- Deliver it as markdown plus a styled PDF (a clean, generic professional theme with a cover page, a readable table, and screenshots scaled to fit). Render and check every PDF page, and include a screenshot contact sheet.
- Write in plain language, expand acronyms on first use, and use no jargon without a definition.
