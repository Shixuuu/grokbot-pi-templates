---
name: build-test-automation-for-a-codebase
description: "Use this when someone wants a repo scanned and given local tests plus one validation runner that people, scripts, CI, or agents can trigger on demand, so agents stop spending tokens running and waiting on tests."
---

# Build test automation for a codebase

Goal: leave the repo with (a) meaningful tests, (b) ONE runner script that runs them and writes a compact machine-readable summary, and (c) optional trigger wiring. Agents then call the runner (or read its last summary) instead of driving test sessions themselves.

## 1. Get access
- Ask for the repo (`owner/name` or URL) and the base branch.
- For reading, use the source-control connector's read tools (file contents, tree, search) if available; otherwise the forge's CLI or API.
- For writing, you need the forge's CLI (for example `gh`) signed in on your own computer. Check `gh auth status` first. If it isn't signed in, install it if needed and run its login, handing the desktop to the user for the device-code or browser step. Never ask the user to paste a token.
- Once the CLI is signed in and the user says go, clone under `/workspace/<repo>` on your own computer only. Never clone onto the user's computers.

## 2. Scan and map the repo
Hand this to a background worker. Report back:
- Languages, frameworks, package managers, and build tools. Existing test frameworks, test directories, CI config, and lint/type-check setup.
- Entry points and main modules. Public APIs, CLI commands, HTTP routes, and data layers.
- Current coverage: what is already tested, which critical paths have no tests, and any tests that are flaky or broken (run the existing suite once to find out).
- External dependencies the tests will need (databases, services, env vars) and how to stub them.

## 3. Send a test plan for approval
Keep it to one screen:
- Test layers: unit, integration, end-to-end/smoke, plus static checks (lint, types, build).
- The top areas to cover first, ranked by risk, with one line each on what gets tested.
- Tooling choices. Reuse the repo's existing framework, and only add a new one if none exists (for example pytest, vitest or jest, go test, cargo test, or Playwright for UI).
- Runner modes (see step 5) and which triggers to wire.
Wait for the user's go-ahead or edits before writing code.

## 4. Write the tests
- Follow the repo's conventions for naming, layout, and fixtures.
- Make them deterministic: no real network, fixed seeds and clocks, stubbed services. Keep them fast and isolated.
- Put shared fixtures and helpers in one place. Don't modify production code unless a tiny testability seam is needed, and call that change out in the PR.
- Run everything locally until it's green. Don't paper over real bugs. Mark a failure you find in product code as an expected failure (with the matching skip/xfail) and report it.

## 5. Build the runner (the core deliverable)
Create `scripts/validate.sh` (add a `validate.ps1` too if the repo targets Windows). Contract:
- Usage: `scripts/validate.sh [all|quick|changed|<suite>] [--json-only]`
  - `quick`: lint, type check, and unit tests only. Meant to finish in under about 60 seconds.
  - `changed`: only the tests affected by files changed against the base branch, where the tooling supports it.
  - `all`: every suite.
- It sets up the environment idempotently (installs deps if they're missing, starts any needed services, sets env defaults).
- It writes results to `.validation/summary.json`: `{status, mode, started_at, duration_s, counts:{passed,failed,skipped}, failures:[{suite,test,file,message}], commit}`. Keep failure messages to a few lines each. Full logs go to `.validation/logs/`.
- It prints a one-line human summary. Exit code 0 means everything passed, 1 means tests failed, and 2 means an environment or setup error.
- Add `.validation/` to `.gitignore`.
- Add convenience aliases the repo already uses: a `package.json` script, `make validate`, a `just` recipe, or `tox`/`nox`.

## 6. Wire triggers (only the ones the user chose)
- Manual: document the command.
- Git hook: an optional pre-push hook that runs `quick`, installed through the repo's hook manager if it has one.
- CI: a workflow that runs `all` on PRs and uploads `.validation/summary.json` as an artifact.
- Script or call: a tiny entry point other tools can invoke, such as a `validate` CLI target, or an optional minimal local HTTP endpoint that runs a mode and returns the summary JSON. Only build that endpoint if the user asks for it.
- Agent usage: add a short `AGENTS.md` section (or append to an existing one) saying to run `scripts/validate.sh quick` (or the relevant mode) and read `.validation/summary.json`, and not to run test commands directly or poll them.

## 7. Document and deliver
- Add `TESTING.md`: the layers, how to run each mode, what the summary means, how to add tests, and trigger options.
- Commit on a new branch, push once, and open one PR with the CLI. The PR description covers what's covered, what isn't yet, any product bugs found, and how to run it.
- Report back to the user with the PR link, the coverage summary, the runtime of each mode, and suggested next areas to cover.

## Guardrails
- Never commit secrets. Use `.env.example` for any required variables.
- Never force-push, rewrite history, or merge without the user's explicit OK.
- If CI changes need permissions or secrets, list them in the PR instead of guessing.
