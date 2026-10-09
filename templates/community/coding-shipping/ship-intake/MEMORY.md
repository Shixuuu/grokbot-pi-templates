# Memory seeds for Ship Intake

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-25): Ship Intake needs connectors the owner connects after import: Slack (team channel intake and thread closes), GitHub (issues and PRs), and an optional deploy host after merge.
- **profile** (2026-09-25): Workflow: Slack or webhook intake to GitHub issue to one Cloud Agent on the watched repo to risk-gated merge and deploy to a human Slack thread close. Thin switchboard. Placeholders only: the watched repo, the team Slack channel, the high-risk approver.
