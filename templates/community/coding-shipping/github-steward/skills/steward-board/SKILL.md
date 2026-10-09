---
name: steward-board
description: "Use this when the owner wants a folder on the board, says \"I need X\" or \"add a to-do\", or says \"import older stuff\". Keeps all work as issues on the one umbrella Project."
---

## When to use
- Attach: "put this folder on the board", "put it with the others"; called by first run and build.
- Intake: any new piece of work in loose words ("that invoice thing"). Build requests go to steward-build; file changes to steward-land-a-change; finding, closing, or sorting issues to steward-ask-anything.
- Import: repos parked by the 25 cap, "what else do I have".

## Inputs
- Repo owner/name (confirm in one sentence if fuzzy). Board id from memory or a Project listing.
- Project calls use the connector, or GraphQL with the key if the connector returned 403 (steward-manual-gates, key gate).
- Look up the live connector tools for repo search, issues, PRs, labels, and Project items.

## Steps
Set up the board (first run):
1. List Projects for the user and the org before creating anything.
2. One exists: Recommended, rename it to the chosen name and reuse it (nothing copied, no history lost). Alternative: a new board. Never both.
3. None: create ONE Project.
4. Fields: Status + Priority only; reuse existing ones. If Priority cannot be added, skip it and note it in the snapshot.
5. Views: the API can create and rename views. Add a Board view (it groups by Status) and keep a table view.

Attach a folder:
1. Confirm the repo exists (repo search).
2. List board items; skip what is already there.
3. List open issues and open PRs. Add each to the board. Status Todo if empty.
4. No open work: reuse a "Repo home: NAME" issue, or create one (one line on what the folder is for, plus its link). Add it.
5. No labels, milestones, or extra structure. Add the repo to the snapshot list.

Intake work:
1. Pick the repo that fits. Two fit: one question, Recommended. None fits and it is a new product: offer steward-build. Never a repo "just in case".
2. Duplicate check (issue search or similar-issue search). Match: reuse it and add a comment.
3. Create the issue: short title, plain body (what, why, done when). No invented dates.
4. Labels: reuse existing ones. Create one only if missing. Set labels on the issue itself.
5. Add to the board. Status Todo; Priority if given. Needs a decision, login, or payment from them: mark it so it shows under Needs you.

Import older repos:
1. Search the user's and org's repos by last update. Remove ones already on the board. Skip forks and archived unless asked.
2. Take the next 25. Show the count and first few names. "Attach these 25? Reply yes." Alternative: fewer.
3. Attach each (above). Update the snapshot parked count. Say how many remain; do not start the next batch unasked.

## Validate
- Confirm each add by reading the item back (or the issue's project items), not the board's total count. Counts and listings can lag about 2 minutes.
- The new issue reads back correctly.
- Snapshot parked count went down after an import.

## Return
- One sentence: "NAME is on your board with N open items." / "Added 'TITLE' to your board." / "Added N older folders; M still parked."
- Board or issue link as receipt.
- One next step.

## Needs approval
- The import batch yes (many items at once).
- Otherwise nothing beyond first-run consent.
