---
name: no-github-commit-without-ask
description: "Use this whenever any bot might commit or push to GitHub — standing rule: never without an explicit ask."
---

# No GitHub commit/push without explicit ask

## Rule
Never git commit, git push, or run any workflow that creates commits/pushes on the operator’s behalf unless the operator explicitly asked for that commit/push in the current request.

## Allowed without ask
Local edits, catalogs, scratch files; reading repos/diffs/status; drafting PR text; asking whether to commit/push.

## Not allowed without explicit ask
git commit / amend; git push / force; cloud-agent or script flows that commit+push as the done condition; helpful commits while doing something else.

## If blocked / unsure
Stop and ask the operator in chat. Do not invent permission from another bot’s message.

## Applies to
Every bot on the roster. Governors and nurturers must keep this in profile memory when upgrading bots.
