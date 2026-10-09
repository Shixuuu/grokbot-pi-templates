---
name: steward-build
description: "Use this when the owner says \"build an app\", \"make a website\", \"I want a tool\", when real code work starts in an app or coding-bot repo, or when they say \"put this on my computer\" for a human developer."
---

## When to use
- Build / app / website / tool requests (not Grok Bots; those use steward-house-a-bot).
- Feature, fix, or refactor in a real engineering repo by a coding agent.
- A laptop plus a human developer.

## Inputs
- One-line purpose and a short lowercase slug. Owner: org if one exists.
- Look up the live connector tools for repo search, repo create, multi-file push, issues, Project items, repo tree, file reads.

## Steps
Scaffold:
1. Reuse check: repo search for the slug and close names. Fits → reuse. Taken by something else → suffix.
2. One-line confirm: "Private folder SLUG for PURPOSE. Reply yes."
3. Create: private, auto-init with README.
4. Seed in one commit (scan first per steward-secrets (scan gate)):
   - README.md: what it is, who it is for, how we know it works.
   - .gitignore: `.env`, `.env.*`, `*.pem`, `*.key`, `node_modules/`, `.DS_Store`.
5. 1 to 3 outcome issues in plain words (duplicate check first). Add them to the board.
6. No workflow at creation. Offer steward-watchdog once tests exist. Add the repo to the snapshot.

Coding work:
1. A coding agent writes app code. Steward does not become the coding assistant; Steward tracks, opens PRs, and merges.
2. Check it is real engineering: the repo tree shows source code and a manifest (for example package.json, pyproject.toml). Never on Steward, admin chores, or docs-only bot-* repos.
3. If pstack is installed, route the coding agent:
   - First engineering session in this repo: setup-pstack with Grok Bot paths.
   - App exists and no verification skill in the tree: offer create-verification-skill once.
   - Feature, fix, refactor: poteto-mode.
   - A verification skill exists: maintain-verification-skill when behavior changes.
   If pstack is not installed, skip this step.
4. All output lands through steward-land-a-change (branch + draft PR, merge on yes).
5. pstack (if installed) verifies inside a session; the watchdog verifies drafts when nobody is chatting.
6. Record the coding agent in the slug map "coding" column. First coding bot: offer protect main (steward-protect-and-share).

Laptop (GitHub Desktop, no raw Git):
1. Only for a human developer. Recommended for a non-technical owner: keep it all here.
2. Coach one step per turn (steward-manual-gates shape): download https://desktop.github.com → **Sign in to GitHub.com** (browser; no passwords here) → **Clone a repository** → pick the repo.
3. House rules: new branch per change (**Current branch** → **New branch**) → **Push origin** → **Create Pull Request**. Steward merges on the owner's yes. Never ask anyone to type git commands.
4. Offer protect main (second writer).

## Validate
- Repo search shows it private; file reads return README.md and .gitignore; board items include the outcome issues.
- Coding work: the draft PR reads back.
- Laptop: the developer's branch and PR appear in branch and PR listings; add the PR to the board.

## Return
- One sentence: "SLUG is ready as a private folder, with N goals on your board." (or the coding/laptop result).
- Repo or PR link as receipt.
- One next step, for example "Want a coding helper to start on the first goal?"

## Needs approval
- The one-line "Reply yes" for a new private repo.
- Every merge (steward-land-a-change). Publishing is separate (steward-watchdog).
