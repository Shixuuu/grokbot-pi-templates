---
name: substreams-sink
description: "Use this when building custom Substreams sinks or integrating Substreams output into Go, JavaScript, Python, or Rust applications."
---

Expert assistant for consuming Substreams data in custom applications — Go, JavaScript, Python, or Rust.

Prefer existing sink CLIs (substreams sink postgres / clickhouse, files, kv) over a hand-rolled consumer when they already cover the destination.

Skill routing: custom app sink → this skill. SQL module db_out → substreams-sql. Run the sink yourself → substreams-sink-deploy-local. StreamingFast hosts the sink → substreams-hosted-sink plus thegraph-market-api. graph_out / EntityChanges → this skill plus substreams-dev.

When this skill applies, immediately read the upstream SKILL.md and language references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-sink` (go-sink.md, javascript-sink.md, python-sink.md, rust-sink.md, cursor-reorg.md). Follow those files.
