---
name: steward-protect-and-share
description: "Use this when the owner says \"protect the main copy\", \"make this public\", \"share this\", or \"invite my developer\", or when a second writer or coding bot joins a repo."
---

## When to use
- Protect main: only after a second human writer or a coding bot. Not on day one.
- Go public: an explicit request for one repo. Never a default for bots or apps.
- Invite: one named person, one at a time.

## Inputs
- Repo owner/name and visibility. Plan, only if a read shows it; with a fine-grained key the org plan can read back empty, so never promise it.
- For invites: the person's GitHub username (never a guessed email), scope, role.
- Look up the live connector tools for collaborators, ruleset read/create, repo tree, file reads, issue/PR lists, user search, secret scanning.

## Steps
Protect main:
1. Confirm the trigger: repo collaborators, or the slug map "coding" column.
2. Read existing rulesets. Reuse; no duplicates.
3. Free plan check: rulesets and protected branches work only on public repos on Free. Private repos need Pro, Team, or Enterprise.
   - Private on Free: explain in two lines. Recommended: stay Free; Steward keeps the rule by habit (every change a draft PR, merged only on yes). Alternative: a paid plan they set up themselves. Never push it; never enter a card.
4. If allowed, create a repo ruleset on the default branch: block force pushes, block deletion, require a PR with 0 approvals (a solo owner is not locked out). Active.
5. After the watchdog has passed once, add a second ruleset requiring the `prove` check. Rulesets stack.
6. Note "main protected" in the snapshot.

Go public:
1. Checklist from reads:
   - Secrets: list the repo tree, read text files (skip gitignored), scan them (steward-secrets scan gate). Hit → steward-secrets first.
   - Old commits stay visible; any key ever committed must be rotated first.
   - .gitignore covers `.env`, keys, `node_modules/`. README says what this is.
   - Issue and PR titles hold no private info.
   - Workflows: no `pull_request_target`, no secrets in YAML.
   - License: "No license means others can read it but not reuse it." Add one only if asked. No legal advice.
2. Report in five lines. Fix items via steward-land-a-change.
3. "Make NAME public? Anyone on the internet can see it. Reply yes."
4. No API: steward-manual-gates → `https://github.com/OWNER/NAME/settings` → Danger Zone → **Change visibility** → **Make public**.
5. After: GitHub scans it for secrets free; rulesets now work on Free; offer protect main if there is a second writer.

Invite one person:
1. Find them with a user search. Show login + name: "Is this them?"
2. "Invite LOGIN to FOLDER with write access. Reply yes." Recommended scope: one folder. Org scope: member. Never owner by default.
3. No API: steward-manual-gates →
   - Folder: `https://github.com/OWNER/REPO/settings/access` → **Add people** → role **Write**.
   - Org: `https://github.com/orgs/ORG/people` → **Invite member** → role **Member**.
4. They accept by email. Then verify. Offer protect main. For a laptop developer, steward-build (laptop).

## Validate
- Protect: the ruleset reads back active on the default branch.
- Public: a repo search with `is:public` returns it.
- Invite: repo collaborators show LOGIN with the right permission (accepted only). Pending org invites cannot be read; say so.

## Return
- One sentence: "Main is locked." / "NAME is public now." / "LOGIN can now work in FOLDER."
- Repo or settings link as receipt.
- One next step.

## Needs approval
- Protect: their yes to the offer. Paid plan: explicit yes; they do billing.
- Public: explicit yes after the checklist.
- Invite: yes for every invite; owner or admin role needs a separate explicit yes.
