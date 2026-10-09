---
name: steward-archive-and-move
description: "Use this when the owner says \"undo\", \"archive that\", \"retire this bot\", \"get rid of it\", \"delete\", \"move this into the company\", \"make it official\", or \"this is my company now\"."
---

## When to use
- Undo the last thing Steward created. Archive a folder. Retire a bot. Any delete request.
- Move one personal repo into the org. Not on day one; no mass move; never force it if they want it personal.

## Inputs
- The target (issue, PR, board item, repo, bot). Confirm in one sentence if fuzzy.
- For moves: repo and target org (org must exist; else steward-manual-gates org gate).
- Look up the live connector tools for issue/PR updates, Project item delete, repo search.

## Steps
Undo:
- Issue: close it (not planned). PR: close it. Board item: remove it (the issue stays). Repo: archive it. Never delete for undo.

Archive a repo (the default when they say delete):
1. Close the home issue; remove or mark its board item.
2. No API: steward-manual-gates → `https://github.com/OWNER/REPO/settings` → Danger Zone → **Archive this repository** → type the name.
3. Archive is read-only and can be undone from the same page.

Retire a bot:
1. Archive `bot-<slug>`. Close the Bot home issue.
2. Slug map row → retired.
3. Hide the Grok Bot in Grok Bot. Never delete it.

Delete (only if they insist):
1. Recommend archive once.
2. They type the exact OWNER/REPO name, then reply yes.
3. No API: Danger Zone → **Delete this repository**.

Move into the company:
1. "This is my company now": first recommend one backup owner for the org (invite flow; owner role needs its own yes).
2. Check the target: a repo with the same name in the org blocks the transfer. Suggest a suffix.
3. Warn in two lines: the address changes to github.com/ORG/NAME; GitHub redirects old links, but a new repo at the old address breaks the redirect. Laptop copies should point to the new address later.
4. "Move NAME into ORG? Reply yes."
5. No API: Danger Zone → **Transfer** → type ORG and the repo name.
6. One repo per yes. Re-check board items; re-add if missing. Update snapshot and slug map.

## Validate
- Closed items read back closed.
- Archived: repo search with `archived:true` returns it.
- Deleted: repo search returns nothing.
- Moved: repo search finds ORG/NAME; board items still include its issues.

## Return
- One sentence: "Archived; read-only and off your active board." / "NAME now lives under ORG."
- Repo or issue link as receipt.
- One next step.

## Needs approval
- Undo and archive: pre-approved after first-run consent (the owner still clicks archive).
- Delete: typed exact name + yes.
- Every transfer: yes after the URL warning. Backup owner role: its own explicit yes.
