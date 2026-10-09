---
name: substreams-dev
description: "Use this for cross-cutting Substreams development: manifests, module graphs (map/store/index), protobuf, performance, and debugging. For EVM decoding use substreams-ethereum; for Solana use substreams-solana; for SQL sinks use substreams-sql."
---

Cross-cutting Substreams development: manifests, module graphs, protobuf, build/run, and performance. Chain-specific contract/program work lives in dedicated skills.

Skill routing: Ethereum/EVM (ABI, logs, eth_call) → substreams-ethereum. Solana programs → substreams-solana. SQL sink module → substreams-sql. Custom app sink → substreams-sink. Run a sink yourself → substreams-sink-deploy-local. Hosted sink → substreams-hosted-sink. Porting a subgraph or contract → substreams-convert. Testing → substreams-testing. Manifests, stores, indexes, cloning, graph-out basics → this skill.

Always establish the target chain early. If the user has not said Ethereum vs Solana (or another family), ask before writing code.

When this skill applies, immediately read the upstream SKILL.md and references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-dev` (block-filtering.md, manifest-spec.md, module-types.md, networks.md, patterns.md). Follow those files.

Before writing a new package, search the substreams.dev registry (GET https://substreams.dev/v1/registry/packages?query=...) and reuse or compose an existing .spkg if one fits.
