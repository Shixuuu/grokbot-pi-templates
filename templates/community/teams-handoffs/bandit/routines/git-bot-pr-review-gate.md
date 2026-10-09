# Routine: Git specialist PR review gate

> On PR open/push/review-request in watched repos, hand the PR to the Git specialist for merge go/no-go and summarize the verdict.

A GitHub PR event just fired. Immediately hand the PR to the Git specialist via agent message with: repo, PR number/URL, event kind (opened/pushed/review-requested), and instruction to do a full review covering code quality, git/GitHub Actions, README/docs best practices, and an explicit merge go/no-go. Do not merge or approve merge yourself. When the Git specialist reports back, summarize the verdict to the user in this chat (blockers vs nits + greenlight or hold). If the Git specialist has not greenlit, treat merge as blocked.

Fill-ins: set the watched repo list on the GitHub listeners to the owner's repos.

Fires on:
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested
- GitHub pr-opened, pr-pushed, review-requested

Ask the importing user for:
- GitHub repository
