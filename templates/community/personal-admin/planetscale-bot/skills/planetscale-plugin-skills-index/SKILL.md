---
name: planetscale-plugin-skills-index
description: "use this when choosing which installed PlanetScale plugin skill to load (database-skills engine pack or PlanetScale safe/best-practices skills) while helping with PlanetScale"
---

# PlanetScale plugin skills index

Use this as the on-hand map of the installed PlanetScale plugin packs from:

- https://github.com/planetscale/database-skills → `database-skills/`
- https://github.com/planetscale/skills → `skills/`

Plugin root (read-only; do not edit):

`/home/box/agent-data/plugins/cache/cursor-public/planetscale/release_v1.3.0/`

**How to use:** pick the matching skill below, then `Read` its `SKILL.md` and follow it. These are Cursor-managed plugin skills — never rewrite them in place. Prefer MCP for live account work; load engine/safety skills before recommending mutations.

Also useful (user skill, not in these packs): [PlanetScale getting started](sand-workflow:planetscale-getting-started) for product overview, $5 Postgres, MCP vs dashboard vs CLI.

---

## Pack A — `database-skills` (engine expertise)

**Why it exists:** deep, engine-specific guidance for schema, queries, ops, and scaling — independent of a full PlanetScale account assessment.

| Skill | Path | What it does / when to load |
| --- | --- | --- |
| **mysql** | `database-skills/skills/mysql/SKILL.md` | MySQL/InnoDB schema, indexing, query tuning, transactions, ops. Load when creating/changing MySQL tables/indexes/queries, diagnosing slow/locking behavior, planning migrations, or troubleshooting replication/connections. |
| **postgres** | `database-skills/skills/postgres/SKILL.md` | PostgreSQL best practices, query optimization, connection troubleshooting, performance. Load when working with Postgres databases. |
| **vitess** | `database-skills/skills/vitess/SKILL.md` | Vitess best practices, query optimization, connection troubleshooting for PlanetScale Vitess. Load for Vitess DBs, sharding, VSchema, keyspaces, or MySQL scaling issues. |
| **neki** | `database-skills/skills/neki/SKILL.md` | Overview of Neki (PlanetScale sharded Postgres). Load for Neki work or Postgres scale/shard questions. |

Absolute prefix for the four above:

`/home/box/agent-data/plugins/cache/cursor-public/planetscale/release_v1.3.0/database-skills/skills/<name>/SKILL.md`

---

## Pack B — `skills` (PlanetScale safe agent / best-practices workflow)

**Why it exists:** PlanetScale-specific agent operating model — inventory, safety reviews, Insights, Traffic Control, webhooks, schema recommendations, CLI automation, and a master orchestrator that produces a recommendations report without applying changes by default.

Base path:

`/home/box/agent-data/plugins/cache/cursor-public/planetscale/release_v1.3.0/skills/<slug>/SKILL.md`

### Orchestration & gates

| Skill | What it does / when to load |
| --- | --- | --- |
| **planetscale-safe-orchestrator** | Master skill: full safe best-practices assessment (inventory → engine review → Insights → Traffic Control → webhooks → schema recs → codebase instrumentation → agent model → unified report). Never applies changes without explicit approval. Load for “run the full assessment / all skills / best-practices review.” |
| **planetscale-best-practices-matrix** | Concise matrix of which safety/observability/automation recommendations apply by engine. Load when choosing which review skills to run. |
| **planetscale-change-gates-and-approval-contract** | Explicit approval gates for any PlanetScale, DB, repo, credential, network, or automation mutation. Load before mutating anything. |
| **planetscale-autonomous-execution-mode** | After the operator explicitly accepts risk: execute approved changes end-to-end without per-step approval. Defines autonomy levels, ordering, status reporting, halt/rollback. Load only when autonomy was clearly granted. |
| **planetscale-mcp-agent-operating-model** | Safe agent use of PlanetScale MCP, Insights, schema recommendations, and repo work without autonomous production mutation. Load when configuring how the agent uses MCP. |
| **planetscale-pscale-cli-automation** | Drive `pscale` from agents (`--format json`, auth check, `pscale sql`, `--force`). Load before other skills when using CLI directly, or when automating/verifying `pscale` auth. |

### Evidence & reviews

| Skill | What it does / when to load |
| --- | --- | --- |
| **planetscale-readonly-inventory** | Read-only evidence: org, database, branches, webhooks, backups, roles, Insights, recommendations, traffic config. Usually first in an assessment. |
| **planetscale-postgres-safety-review** | Review PlanetScale Postgres: Traffic Control, query tags, roles, pg_strict, backups/PITR, private connectivity, webhooks, branches, safe agent ops. |
| **planetscale-vitess-safety-review** | Review PlanetScale Vitess: safe migrations, deploy requests, schema recommendations, Insights, webhooks, operational safety. |
| **planetscale-query-insights-and-tags** | Insights + SQLCommenter-style tags to attribute load, find risky queries, prep Traffic Control or schema recommendations. |
| **planetscale-traffic-control-recommendations** | Recommendation plan for Postgres Database Traffic Control budgets/rules **without applying**. |
| **planetscale-schema-recommendations-agent-loop** | Triage schema recommendations into reviewed branches/migrations/issues/PRs **without** applying production changes. |
| **planetscale-webhook-automation-recommendations** | Recommend webhook subscriptions and safe automation patterns (alerts, anomalies, schema recs, deploy requests, agent workflows). |
| **planetscale-codebase-sqlcommenter-instrumentation** | Inspect an app repo connected to PlanetScale; recommend SQLCommenter-compatible tagging packages/conventions. |
| **planetscale-customer-report-template** | Produce the final best-practices report after inventory + relevant review skills. |

---

## Suggested load order (full assessment)

1. `planetscale-safe-orchestrator` (or manually:)
2. `planetscale-change-gates-and-approval-contract`
3. `planetscale-readonly-inventory`
4. `planetscale-best-practices-matrix` → then engine pack skill (`postgres` / `vitess` / `mysql` / `neki`) + matching safety review
5. `planetscale-query-insights-and-tags` (+ Traffic Control / schema / webhook skills as needed)
6. `planetscale-codebase-sqlcommenter-instrumentation` if a repo is in scope
7. `planetscale-mcp-agent-operating-model`
8. `planetscale-customer-report-template`
9. Only with explicit risk acknowledgment: `planetscale-autonomous-execution-mode`

For CLI-heavy work, load `planetscale-pscale-cli-automation` early. For product “what is PlanetScale / $5 PG / MCP vs CLI,” use the user [PlanetScale getting started](sand-workflow:planetscale-getting-started) skill.
