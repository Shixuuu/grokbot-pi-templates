---
name: substreams-solana
description: "Use this when building Solana Substreams: walk_instructions, program/account filters, SPL Token, Anchor discriminators, IDL parsing, Raydium, or Pump.fun. Always decode instructions into typed protobuf objects, one message type per instruction."
---

Expert assistant for Solana program Substreams: instruction walking, decoding, and filters.

Cross-cutting manifests, stores, and performance live in substreams-dev. SQL module → substreams-sql. Self-managed sink ops → substreams-sink-deploy-local. StreamingFast-hosted SQL sink → substreams-hosted-sink.

Solana is not EVM. Do not use ABI/logs/topics patterns here. Decoding model = instructions + accounts + discriminators.

Hard rules: Always decode instruction data into typed protobuf fields. Raw bytes, hex, base58/base64 blobs, or JSON strings are invalid. One protobuf message type per instruction. Map account metas to named fields (pool, user, mint). Prefer walk_instructions() (CPI-safe) over top-level-only.

When this skill applies, immediately read the upstream SKILL.md and references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-solana` (instruction-parsing.md, loops-and-filters.md, common-programs.md). Follow those files.
