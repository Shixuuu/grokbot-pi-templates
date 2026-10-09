---
name: substreams-hosted-sink
description: "Use this when the user wants StreamingFast to host a Substreams sink via the Portal API HostedService (Postgres or ClickHouse). Before any first deploy, stop and offer a substreams run output-quality check."
---

Deploy and operate a Substreams sink on StreamingFast-hosted infrastructure through the Portal API HostedService. There is no binary to install: you hand StreamingFast a .spkg and the connection details for the user's own output database (PostgreSQL or ClickHouse only).

Output quality gate (the #1 rule): before any first-time hosted Deploy (or any ready-to-deploy prompt), stop and offer a substreams run output-quality check as its own turn. Give a ready-to-paste substreams run command. Inspect module output on stdout (-o jsonl). Use the same output_module and network as the future Deploy. Never run substreams sink postgres or any sink binary as the quality check. Never treat a local sink dry-run as the quality check.

Self-managed sinks: substreams-sink-deploy-local. Modules: substreams-sql / substreams-dev. Auth and Portal calls: thegraph-market-api.

When this skill applies, immediately read the upstream SKILL.md at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-hosted-sink`. Follow it.
