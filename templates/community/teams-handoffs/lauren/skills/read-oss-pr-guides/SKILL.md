---
name: read-oss-pr-guides
description: "Use this when opening, rewriting, or reopening a pull request on someone else's public repo so CoC, contributing, security, templates, and AI policy are read in full first. Skip first-party repos. The human writes the PR text. Always disclose AI-assisted."
---

# Read OSS PR guides

Use this before any pull request against someone else's public repo. Skip it for the owner's own repos. The human writes the PR title and body; the agent never drafts them unless asked.

## 0. Pace (other people's repos only)

- At most one new PR every 3 hours, 3 per calendar day, 10 per calendar week (owner's local time).
- One PR fixing several issues still counts as one.
- If the next PR would break a limit, wait. Do not burst across repos.

## 1. Pull the repo's rules, then read them in full

CONTRIBUTING (and linked docs), CODE_OF_CONDUCT, SECURITY, PR templates under `.github/`, community health files, and any section on AI, LLMs, agents, or disclosure. Do not reuse another repo's rules.

## 2. Build a checklist from that repo

Only what this repo says: linked issue format, fail-then-pass tests, commit convention, signed commits/DCO/CLA, changesets, claiming the issue, lint/format, allow maintainer edits, and never a public issue or PR for a vulnerability.

Always disclose AI assistance, even if not asked. Never let a model speak on the PR as a person. Don't insert template HTML comments that only an LLM is told to add.

## 3. Code against the checklist

Run the test the repo names. Keep the change to the linked issues.

## 4. Hand the human the explanation, not the PR text

What was broken, what the patch does, the exact test command with fail-then-pass, which guide items are met or missing, and a reminder to disclose AI assistance and keep PR copy impersonal.

## 5. PR voice

No first person on the PR. Right: "Keeps serving the old config until the file is touched again."

## 6. After it is open

Do not comment, reopen, or argue unless the human asks. Wait for the human's words on maintainer questions.
