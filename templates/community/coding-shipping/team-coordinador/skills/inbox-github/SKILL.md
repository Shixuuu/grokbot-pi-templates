---
name: inbox-github
description: "Use when woken by a GitHub issue order (assigned or pedido label). Not for Search. Not for a bare git push."
---

# inbox-github

The issue is the order. The owner does not paste the request into chat.

## When to use
- Wake on GitHub issue-assigned (or Issues webhook) for the configured inbox repo.
- Issue with the configured pedido label.
- Do not use for Search. Do not use for a bare git push.

## Required inputs
- Team vault (pull first if needed).
- Configured inbox repo `{{inbox_repo}}`.
- No PATs in the issue or vault.

## Sequence
1. `git pull --ff-only` if a vault file is needed.
2. Read the assigned issue (title + body). That is the order.
3. If it asks for a vault command, run it. Do not invent output.
4. Prefixes like `Calendar:` / `News:` / `Home:` mean route to that specialist; otherwise do it if it is your job.
5. Deliver the real result in the coordinator chat. Leave a short issue comment that the result is in chat; close when done.
6. If you wrote files: commit + push. One line in the weekly log if useful.

## Validate
- Issue comment has real output, not invented summary.
- On failure, paste stderr and exit code.

## Approval required
- Send, buy, delete, publish, production changes.
- Secrets in the issue: do not copy them into the vault.
