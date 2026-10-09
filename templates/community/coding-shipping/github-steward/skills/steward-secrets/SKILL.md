---
name: steward-secrets
description: "Use this when the owner pastes something that looks like a key, token, or password, a scan finds one, they say \"secret leaked\", or they want accidental keys blocked. Never echo the value."
---

## When to use
- A key-shaped string in chat, a screenshot, a file, an issue, or a PR.
- A secret scan reports a hit. "Secret leaked."
- "Make sure no keys get in." Offer once after any leak.
- Any command that uses the saved GitHub key (GITHUB_PERSONAL_ACCESS_TOKEN).

## Inputs
- Where it is (chat, repo + file, issue, PR) and which service issued it, if known.
- Never the value. Do not repeat, store, or quote it.
- Look up the live connector tools for secret scanning, file reads, branch/file writes, file delete, issue and comment edits, secret scanning alerts.

## Steps
Leak response:
1. Stop other work. Do not echo the value anywhere: chat, memory, issues, PRs, snapshot.
2. One line: "That key is exposed. Please make a new one at the service that gave it and turn the old one off." Rotation is the real fix.
3. Only in chat: nothing to strip. Go to step 7.
4. In a repo: read the suspect file and confirm with the scan gate below. Never search code with the value.
5. Strip it via steward-land-a-change: branch → replace the value with an environment variable name, or delete a committed .env → add `.env`, `.env.*`, `*.pem`, `*.key` to .gitignore → rescan clean → draft PR → merge on yes.
6. In an issue or comment: edit it out. Edit history may still show it; rotation still matters.
7. Old commits still hold the value. Rewriting history needs a force-push: explicit yes, not a connector action. Recommended: rotate and move on.
8. Public repo: urgent. Offer making it private (no API; steward-manual-gates).

Block accidental keys:
1. Explain in two lines:
   - Public repos: GitHub scans for secrets free, and blocks your pushes that hold secrets by default.
   - Private repos on Free: GitHub's repo scanning needs paid Secret Protection (Team or Enterprise). Recommended: stay Free; Steward scans.
2. Scan gate, always on: scan new content before every file write or push, and PR changes before every merge.
   - Public repos, or where Advanced Security is on: the connector's secret scan.
   - Private repos on GitHub Free (the connector scan fails: "does not have GitHub Advanced Security enabled"): scan the files locally in a temp folder. detect-secrets (install it into a venv if missing) plus a pattern check for token shapes, not bare prefixes (docs that name a prefix are fine): github_pat_, ghp_, gho_, or `sk-` followed by 20+ letters, digits, or underscores; AKIA plus 16 capitals or digits; xox plus a letter and a dash; and private-key header lines.
   - Any hit stops the push → leak response. Report file and line only; never echo the match.
3. Check .gitignore on active repos; add missing lines through steward-land-a-change.
4. Public repos: read secret scanning alerts. Report counts, never values.
5. Save "scan before push: on" in the snapshot and memory.

Use the saved GitHub key:
1. Read it only from the GITHUB_PERSONAL_ACCESS_TOKEN environment variable, inside a single command or subshell. Never print, echo, log, or save it, and never write it to a file.
2. Empty variable: the shell may have started before the key was saved, and even a fresh process may not have it. Use the fallback your live profile names, if it has one; otherwise say so plainly and ask the owner to re-save it through the secure secret input. Don't go hunting through system files.

## Validate
- Scanning the file on the default branch finds nothing.
- .gitignore reads back with the new lines.
- Public repos: no open secret scanning alerts.

## Return
- One sentence: "The key is out of the files. Please confirm you made a new one." or "I now check every change for keys."
- PR link as receipt.
- One next step: "Reply done when the old key is turned off."

## Needs approval
- Merging the strip or .gitignore PR: yes.
- History rewrite or force-push: explicit yes, Recommended against.
- Paid Secret Protection: explicit yes. Default never.
