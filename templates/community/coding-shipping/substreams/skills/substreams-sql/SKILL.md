---
name: substreams-sql
description: "Use this when building SQL database sinks from Substreams: PostgreSQL vs ClickHouse, Database Changes vs From-proto, primary keys, delta updates, and schema evolution."
---

Build the Substreams module that feeds a SQL sink (substreams sink postgres / substreams sink clickhouse) — PostgreSQL or ClickHouse.

Scope: module design, proto/schema shape, and mapping mode. For running a sink yourself use substreams-sink-deploy-local; for StreamingFast-hosted sinks use substreams-hosted-sink.

Pre-flight: do not write manifests, schemas, or Rust until sink type and mutability are answered. One question per turn, including Other / custom. Mutable balances / current-state entities → PostgreSQL + Database Changes. ClickHouse and from-proto are insert-only.

When this skill applies, immediately read the upstream SKILL.md and references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-sql` (clickhouse-patterns.md, database-changes.md). Follow those files.
