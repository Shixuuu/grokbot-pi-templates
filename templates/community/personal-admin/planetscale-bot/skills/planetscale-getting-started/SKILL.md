---
name: planetscale-getting-started
description: "use this when explaining what PlanetScale is, choosing Postgres vs Vitess, starting on the $5 Postgres plan, scaling with Vitess, or getting started via MCP, dashboard, or pscale CLI"
---

# PlanetScale getting started

Quick reference for agents. Prefer the hosted PlanetScale MCP when a tool covers the job. Also know the **dashboard** and **`pscale` CLI** paths — especially for create/provision. Use `planetscale_search_documentation` when product details may have changed. Do not invent prices or SKUs.

## Tooling policy

| Path | Use for |
| --- | --- |
| **MCP** (preferred for agents) | List/get orgs, databases, branches; schema; Insights; errors; schema recommendations; regions; cluster sizes; read/write SQL (writes approval-gated); docs search; billing helpers |
| **Dashboard** | Create/delete DBs and branches; Connect / roles / passwords; cluster resize; Single node ↔ HA; safe migrations; deploy requests; Metal; payment UI |
| **CLI (`pscale`)** | Same control-plane work as dashboard when scripting or the user prefers terminal: auth, create DB, roles, shell, safe-migrations, etc. |

Hosted MCP: `https://mcp.pscale.dev/mcp/planetscale` (OAuth). Insights-only (no execute-query tools): `https://mcp.pscale.dev/mcp/planetscale-insights-only`.

**MCP cannot (today):** create/delete organizations, databases, branches, roles/passwords, enable safe migrations, open deploy requests, or resize clusters. For those, use **dashboard** or **CLI**.

## What PlanetScale is

Fully managed relational database platform for **Postgres** and **Vitess** (MySQL-compatible). Focus: scale, performance, reliability, and developer workflow.

Core ideas:

- **Database** = project container in the dashboard/API
- **Branch** = isolated environment (dev/test/restore); each branch has its own **cluster** (compute + storage)
- Default HA production shape: **1 primary + 2 replicas**, automated failover, connection pooling, online upgrades
- **Metal**: locally attached NVMe vs **network-attached** storage
- **Insights**: query-level latency, QPS, rows read/written
- **CLI** (`pscale`) and **API** cover most dashboard actions
- Hosted **MCP** for orgs/DBs/branches/schema/Insights/SQL (short-lived credentials)

## MCP getting-started flow

Use this when exploring an existing account:

1. Confirm MCP is connected (OAuth). If not, surface the PlanetScale connect card.
2. `planetscale_list_organizations` → pick the org (or ask if several).
3. `planetscale_list_databases`. If forbidden/empty, ask for the database name and use `planetscale_get_database`.
4. `planetscale_list_branches` → usually `main` / production; confirm with `planetscale_get_branch`.
5. Optional: `planetscale_list_regions_for_organization`, `planetscale_list_cluster_sizes` (`engine: postgresql` or `mysql`), `planetscale_get_branch_schema`, `planetscale_get_insights`, `planetscale_list_query_error_patterns`, `planetscale_list_schema_recommendations`.
6. SQL: `planetscale_execute_read_query` (default replica). DDL / DELETE / risky writes: show exact SQL, get approval, then `planetscale_execute_write_query` with `confirm_destructive: true`.
7. Persist only non-secret conventions: org, database, branch, engine. Suggest the same in project `AGENTS.md`.

## Create a database (dashboard + CLI)

MCP cannot create databases. Use dashboard or CLI, then continue with MCP.

### Dashboard

1. New database → choose **Postgres** or **Vitess**
2. Name, region, cluster size/arch (cheapest PG: **Single node** + **PS-5**)
3. Create → default branch `main`

### CLI

Auth / org / region:

```bash
pscale auth login
pscale org list
pscale org switch <ORGANIZATION_NAME>
pscale region list
```

Postgres:

```bash
pscale database create <DATABASE_NAME> --region <REGION_SLUG> --engine postgres
```

Vitess (MySQL-compatible; engine defaults to Vitess/MySQL when omitted):

```bash
pscale database create <DATABASE_NAME> --region <REGION_SLUG>
```

Default region if omitted: `us-east` (US East — Northern Virginia).

## Connect (dashboard + CLI)

MCP runs queries with ephemeral credentials; it does **not** replace app connection strings.

### Dashboard

Connect → create **Default role** (admin; treat carefully) or app roles → copy host/user/password. Prefer dedicated app roles over Default for applications. Always SSL (`sslmode=verify-full` recommended for Postgres).

### CLI

Postgres roles (not `pscale connect`):

```bash
pscale role reset-default <DATABASE_NAME> <BRANCH_NAME>
```

Vitess / MySQL: branch passwords + shell:

```bash
pscale password create <DATABASE_NAME> <BRANCH_NAME> <PASSWORD_NAME>
pscale shell <DATABASE_NAME> main
```

Postgres connection shape (values from Connect / role output):

```bash
postgresql://postgres.{branch-id}:{password}@{host}.horizon.psdb.cloud:5432/postgres?sslmode=verify-full
```

Ports: `5432` Postgres, `6432` PgBouncer. Default logical DB: `postgres`. Platform DBs (`pscale_admin`, `pscale_exporter`, `pscale_pgbouncer`, templates) are reserved.

## Postgres offering

Managed PostgreSQL with branching, Insights, backups, Metal options.

Highlights vs Vitess:

- Full PostgreSQL compatibility
- Schema **and** data branches
- Built-in **PgBouncer**
- **PITR** available
- Multiple logical DBs per cluster via `CREATE DATABASE` (MCP: `postgres_database_name` when not default `postgres`)
- HA default: primary + 2 replicas; **single-node** (no replicas) for cost-sensitive workloads
- Horizontal sharding: **Neki coming soon**
- No Vitess-style deploy requests / online schema change flow today
- No Vitess read-only regions today

## $5 cheapest Postgres start

- **Single-node** network-attached **PS-5** (x86 or ARM): **$5/month**, 1/16 vCPU, 512 MB
- Same SKU as **HA**: **$15/month**
- Single-node: **not** on Metal; no replicas
- Upsize or switch Single node ↔ HA in dashboard **Clusters** (or equivalent CLI cluster flows if available)
- PS-5 non-HA includes **10 GB** public egress/month (typical HA production: 100 GB)
- Metal Postgres starts higher (~$50/month HA per docs)
- Live SKUs: MCP `planetscale_list_cluster_sizes` with `engine: postgresql`, and/or pricing docs / public `planetscale_prices` — never invent prices
- Create the $5 DB via **dashboard** or **CLI** above, then inspect with MCP

## Vitess offering

MySQL-compatible engine powered by Vitess. Best when you need **horizontal sharding soon** or are already on MySQL.

Highlights vs Postgres:

- **Deploy requests** + **safe migrations** → non-blocking online schema changes
- **Revert** a recent schema deploy without losing subsequent writes
- **Explicit horizontal sharding**; app still sees one database
- Near-unlimited connections via Vitess pooling + edge
- **Read-only regions** + replica credentials
- Branching, Insights, backups, Metal
- No PITR (vs Postgres)
- Uses **keyspaces**
- Consider sharding around ~**250 GB** + vertical-scale pain; sharding on Base; Enterprise for assisted sharding/migrations/SLAs

Quickstart shape:

1. Create Vitess DB (dashboard or CLI) → `main`
2. Schema/data via dashboard console, `pscale shell`, or MCP write (with approval)
3. Enable safe migrations — dashboard, or:

```bash
pscale branch safe-migrations enable <DATABASE_NAME> main
```

4. Verify with MCP: schema, Insights, read queries
5. Later: develop on branches → deploy requests (dashboard); MCP for evidence. Dev branches copy schema, not production data — seed mock data.

## Choosing Postgres vs Vitess

| Need | Prefer |
| --- | --- |
| Already on PostgreSQL / PG features, PITR, multi-DB | **Postgres** |
| Already on MySQL / sharding soon / multi-TB or huge QPS | **Vitess** |
| Cheapest tryout | **Postgres PS-5 single-node ($5)** |
| Unlimited shards today | **Vitess** (Neki for PG later) |

At massive scale (multi-TB, tens–hundreds of kQPS), Vitess is the current horizontal path. Metal helps vertical performance before/alongside sharding.

## MCP safety tips

- Prefer Insights + schema recommendations before proposing writes
- Prefer insights-only MCP when query execution is unnecessary
- Reads default to replicas; set `use_replica: false` only when needed
- Postgres RLS can hide rows from the MCP role — zero rows ≠ empty table
- Never paste credentials, webhook secrets, or connection passwords into chat or skills
- Ask before destructive changes or anything that increases bill

## Doc anchors

- What is PlanetScale: https://planetscale.com/docs/what-is-planetscale
- Postgres vs Vitess: https://planetscale.com/docs/postgres-vs-vitess
- Postgres quickstart: https://planetscale.com/docs/postgres/tutorials/planetscale-postgres-quickstart
- Vitess quickstart: https://planetscale.com/docs/vitess/tutorials/planetscale-quick-start-guide
- Postgres pricing / $5 single-node: https://planetscale.com/docs/postgres/pricing , https://planetscale.com/docs/postgres/cluster-configuration/single-node
- MCP: https://planetscale.com/docs/mcp-server
- CLI: https://github.com/planetscale/cli
