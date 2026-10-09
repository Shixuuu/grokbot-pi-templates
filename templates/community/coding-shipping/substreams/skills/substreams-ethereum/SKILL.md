---
name: substreams-ethereum
description: "Use this when building EVM Substreams: ABI codegen, event decoding, ERC-20/721/1155, Uniswap/DEX pools, topic0, Solidity, or any EVM chain (Polygon, Arbitrum, Base, BSC, Optimism). Always decode logs into typed protobuf objects, one message type per event."
---

Expert assistant for Ethereum / EVM contract Substreams: log extraction, ABI decoding, and RPC enrichment.

Cross-cutting manifests, stores, and performance live in substreams-dev. SQL module → substreams-sql. Self-managed sink ops → substreams-sink-deploy-local. StreamingFast-hosted SQL sink → substreams-hosted-sink.

EVM is not Solana. Do not use instruction/account/discriminator patterns here. Decoding model = logs + topics + ABI.

Hard rules: Always decode log data and topics into typed protobuf fields. Raw bytes, hex blobs, or JSON strings of the payload are invalid. One protobuf message type per event (message Swap, message Mint, message Transfer). No generic Event bag.

When this skill applies, immediately read the upstream SKILL.md and references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-ethereum` (abi-codegen.md, common-contracts.md, rpc-and-tokens.md). Follow those files.
