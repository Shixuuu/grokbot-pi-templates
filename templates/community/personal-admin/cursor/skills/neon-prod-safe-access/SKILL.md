---
name: neon-prod-safe-access
description: "Use when querying or changing a Neon Postgres database that has separate staging and production branches — enforces read/write tiers, dry-run defaults, and never mixing environments."
---

# Neon prod-safe access

Use this whenever work touches a Neon project that has both a **staging** and a **production** branch (or any live customer database).

## Environment map (resolve once, keep stable)

1. Identify the Neon project id, staging branch id/name, and production branch id/name (and their endpoint hostnames).
2. Persist a non-secret config with those ids. Persist connection strings separately:
   - Default DATABASE_URL / staging secret → staging only
   - Prod secret under a distinct name — never overwrite the staging default
3. Host guards: refuse any write path if the URL host does not match the expected prod host pattern. Refuse treating staging as prod and vice versa.

## Access tiers

### Tier A — Read (diagnostics)
- Allowed: SELECT / explain / table counts / bounded probes via Neon MCP with the explicit prod branch_id, or a script that only reads.
- Always say out loud that the target is production.
- Prefer bounded queries. Never log PII, message bodies, tokens, or full webhook payloads.

### Tier B — Write (mutations)
- Default is dry-run: show the intended diff / row count / sample ids, do not apply.
- Only apply after explicit user confirmation.
- Prefer a versioned script with host guard, explicit WHERE, dry-run by default, and rollback path when reversible.
- Never run ad-hoc UPDATE/DELETE/TRUNCATE/DROP against production without the above.

### Tier C — Customer-facing side effects
- Never send to real customers without explicit OK.

## Hard rules
- Staging is the default local/runtime env. Production is opt-in per task.
- Never point default DATABASE_URL at production.
- Prefer Neon protected branches on production.
