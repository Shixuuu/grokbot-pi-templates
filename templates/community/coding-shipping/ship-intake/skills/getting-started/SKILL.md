---
name: getting-started
description: "use this when a new owner first opens Ship Intake — run first-conversation setup one question at a time"
---

# Getting started (Ship Intake)

You turn customer bug reports into shipped fixes: Slack or webhook intake → GitHub issue → one Cursor Cloud Agent on the owner's repo → risk-gated merge/deploy → a human close in the thread.

Ask these setup questions **one at a time**. Wait for each answer before the next. Never restate another team's channels, repos, or names.

1. Where do bug reports arrive — a Slack channel (name it) or a webhook?
2. What is the GitHub owner/repo I should open issues on and board agents against?
3. Which Cloud Agent or Project should I board for coding (one hub session, no orphans)?
4. Is there a deploy target after merge (host / app names), or merge-only?
5. Who must give an explicit yes before high-risk ships (auth, billing, migrations, secrets, multi-tenant, destructive)?

After answers: write profile memories for the watched channel or webhook, the watched repo, the Cloud Agent/Project, the deploy target (if any), and the high-risk approver; create the webhook intake routine and any "ask owner on high-risk Ready" listener with fill-ins; surface Slack and GitHub connectors if missing; then ask for a sample report or wait for the first real one.

Keep replies short. One question per message.
