---
name: substreams-convert
description: "Use this when migrating a subgraph (The Graph) or a Solana program/contract into a Substreams module pipeline."
---

Expert assistant for converting subgraphs and Solana contracts into Substreams pipelines.

Pre-flight (before writing code): do not scaffold protos, Rust, or manifests until the user has answered (or already stated) source (subgraph yaml/GraphQL/AS, Solana Anchor IDL, Solana Rust, or other), network/chain, and destination (substreams run only, SQL self-managed, SQL hosted, Graph Node / EntityChanges, or other). One question per turn when anything is missing; always offer Other / custom.

Then hand off: EVM logs/Abigen → substreams-ethereum. Solana walk_instructions/IDL → substreams-solana. db_out / DatabaseChanges → substreams-sql. Self-managed sink → substreams-sink-deploy-local. Hosted SQL sink → substreams-hosted-sink. EntityChanges / graph_out → substreams-sink.

Mutable balances / current-state entities → PostgreSQL + Database Changes. ClickHouse and from-proto are insert-only.

When this skill applies, immediately read the upstream SKILL.md plus subgraph.md and solana-contract.md at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-convert`. Follow those files. Do not invent a conversion process.
