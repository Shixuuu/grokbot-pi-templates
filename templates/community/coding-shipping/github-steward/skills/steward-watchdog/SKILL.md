---
name: steward-watchdog
description: "Use this when the owner says \"make sure it works\", \"add a watchdog\", \"did it pass\", \"why is it red\", or \"publish the app\", or when tests exist in a real app repo. One thin Linux check, read in chat, publish only on yes."
---

## When to use
- Seed: a real app repo with a test, lint, or build command. Asked, or tests exist. One watchdog per repo. Never on docs-only bot-* repos.
- Watch: "did it pass", a run finishes, or a routine sees a failure.
- Publish: they named a destination. No destination: ask one question. Never pick a host; Steward is not a hosting vendor.

## Inputs
- Repo, test command (from a manifest, Makefile, or the coding agent), PR/branch, destination and secret names (names only).
- Look up the live connector tools for workflow/run/job listing, run details, job logs, workflow run/rerun, repo tree, file reads.

## Steps
Seed prove.yml:
1. Reuse: list workflows and the `.github/workflows` tree. An existing PR check → reuse it.
2. No test command: stop and ask the coding agent. Never invent tests.
3. Rules: `pull_request` + `workflow_dispatch` only; never `pull_request_target`; no secrets in YAML; `permissions: contents: read` (GITHUB_TOKEN only); one Linux job; no matrix, nightly, or macOS unless iOS; `ubuntu-slim` (1 CPU, hard 15-minute cap) for light jobs, `ubuntu-latest` if it needs more; short timeout; cancel older runs.
4. Land it via steward-land-a-change (draft PR). The draft PR runs it. Watch the first run. Merge on yes once green.
5. After one green run, offer requiring the `prove` check (steward-protect-and-share; public repos or paid plans only).
6. Free private repos get 2,000 Actions minutes a month. Keep jobs short. Add to Watchdogs in the snapshot.

```yaml
name: prove
on:
  pull_request:
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: prove-${{ github.ref }}
  cancel-in-progress: true
jobs:
  prove:
    runs-on: ubuntu-slim
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v7
      - name: Run tests
        run: echo "replace with this repo's test command, for example npm test"
```

Watch a run:
1. Find the run (list runs by workflow or branch). Read status and conclusion. Running: say so, check back.
2. Passed: one sentence.
3. Failed: list its jobs, read failed-job logs. Do not paste logs. Never repeat anything secret-looking.
4. Classify: test failed, setup failed, hit the 15-minute `ubuntu-slim` cap, minutes used up, flaky network. One plain sentence.
5. Fix: code → a coding agent, landed via steward-land-a-change; workflow setup → Steward fixes prove.yml the same way; flaky → rerun failed jobs once, no loops; minutes gone → say so, no card, no upsell.
6. Manual run when asked: run the workflow (it has `workflow_dispatch`). Update the snapshot line.

Publish with care:
1. "Publish NAME to DESTINATION when you say so. Reply yes."
2. GitHub Pages on Free works only for public repos; a private repo needs go-public first (its own yes).
3. Secrets gate: the value never goes in chat, YAML, files, or memory. No API: steward-manual-gates → `https://github.com/OWNER/NAME/settings/secrets/actions` → **New repository secret**. They reply "done"; Steward knows only the name.
4. deploy.yml via steward-land-a-change: `workflow_dispatch` (Recommended) or push to main if asked; Linux; minimal permissions; values only as `${{ secrets.NAME }}`; never `pull_request_target`; scanned before push.
5. Merge on yes. Publish on a second yes by running the workflow. Watch it. Note destination in the snapshot.

## Validate
- Seed: the `prove` workflow is listed with a run on the draft PR.
- Watch: the run (or rerun) reads back success.
- Publish: the deploy run reads back success. The live address comes from the destination or run output; never invent it.

## Return
- One sentence: "Every change now gets checked." / pass or fail and why / "NAME is live."
- PR, run, or live link as receipt.
- One next step, for example "Reply yes to merge the fix."

## Needs approval
- Draft PRs, reads, one rerun: pre-approved.
- Merging prove.yml, deploy.yml, or a fix: yes.
- Storing a secret: yes. Each publish or deploy: explicit yes.
