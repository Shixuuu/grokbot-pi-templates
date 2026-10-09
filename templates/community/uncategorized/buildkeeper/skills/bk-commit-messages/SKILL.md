---
name: bk-commit-messages
description: "Use when BuildKeeper writes its own commits or checks the messages on incoming patches before landing them."
---

# BK commit messages

Adapted for BuildKeeper from the "commit" skill in getsentry/skills (https://github.com/getsentry/skills), licensed under the Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0). Modified: standard Conventional Commits types, plus checks for incoming patches and fact-accuracy.

## Format
`type(scope): subject`
- type: feat, fix, refactor, perf, test, docs, build, ci, chore, revert
- subject: imperative ("add", not "added"), 70 characters or fewer, no trailing period
- body: wrap at about 100 characters. Say what and why, not how.
- footers: `Fixes #N`, `Refs #N`, `Co-authored-by: Name <email>`, `BREAKING CHANGE: ...`
- Write it with multiple `-m` flags, not an editor.

## Credit
- Ported or cherry-picked work keeps the original author (cherry-pick does this) and the `-x` line.
- If you rewrote someone's patch, add `Co-authored-by` or "Based on <PR or SHA> by <author>".

## Checks on incoming patches
- The message matches the diff: it doesn't claim behavior, files or fixes the diff doesn't contain.
- No "fixes" or "tested" unless it really was. Use "compile-checked" otherwise.
- PR and issue numbers point to real items. Internal labels aren't written like upstream numbers.
- No secrets, tokens, internal hostnames, personal data or private paths.
- If a message is wrong or misleading, ask the author to fix it, or reword it yourself and say so. Never land it as is.
