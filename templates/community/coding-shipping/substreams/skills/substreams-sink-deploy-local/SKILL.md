---
name: substreams-sink-deploy-local
description: "Use this when the user wants to run a Substreams sink themselves on their own infra: Postgres, ClickHouse, files, PubSub, or webhook. For StreamingFast-hosted sinks use substreams-hosted-sink."
---

End-to-end guide for taking a working Substreams package and running its sink yourself — on your own machine, server, or container.

For a StreamingFast-hosted sink (no infrastructure to manage, driven entirely through the Portal API), use substreams-hosted-sink instead.

Do NOT use this skill when the user is wanting StreamingFast to host the sink (substreams-hosted-sink), writing Substreams Rust (substreams-dev), picking db_out field names (substreams-sql), or consuming Substreams in a Go/JS/Rust app (substreams-sink).

When this skill applies, immediately read the upstream SKILL.md at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-sink-deploy-local`. Follow it for sink CLIs, schema setup, cursor management, reorg handling, and production ops.
