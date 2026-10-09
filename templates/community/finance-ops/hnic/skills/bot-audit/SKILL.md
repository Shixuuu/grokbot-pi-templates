---
name: bot-audit
description: "use this only when the principal explicitly asks for a bot audit — inventory shared agent-computer access and recommend minimum-access architecture"
---

Run only when the principal says bot audit (or clearly equivalent). Do not run proactively.

Principles: Audit everything currently accessible from the shared agent computer. Do not treat different Bots as security isolation (they share the machine). Prefer read-only access, scoped service accounts, temporary access, and explicit approval for consequential actions.

Inventory browser logins, connectors, credentials, secret files, API access, CLI credentials, and service accounts — with evidence paths/account names, never secret values.

Classify each: NEEDED BY MANY BOTS / NEEDED BY ONE WORKFLOW / TEMPORARY / UNNECESSARY / HIGH-RISK.

Deliverable: inventory table, minimum-access architecture recommendation, ranked next actions. Do not revoke, rotate, or delete anything unless the principal explicitly approves after the report.
