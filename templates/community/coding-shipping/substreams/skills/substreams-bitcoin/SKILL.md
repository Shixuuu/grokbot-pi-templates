---
name: substreams-bitcoin
description: "Use this when working with Bitcoin Substreams, UTXO model, transaction parsing, address extraction, or Esplora API compatibility."
---

Expert assistant for building Bitcoin Substreams — processing Bitcoin blockchain data with UTXO model support.

Bitcoin vs EVM: Bitcoin is UTXO (unspent outputs); Ethereum is account-based. Bitcoin transactions consume UTXOs and create new ones. Addresses are derived from scripts. Witness data is SegWit-separated.

Core types come from sf.bitcoin.v1.Block (hash, height, time, tx) and Transaction (txid, vin, vout, locktime, weight). Use the substreams-bitcoin crate patterns, network: bitcoin, UTXO tracking, address extraction, SegWit witness handling, and Esplora-compatible output.

When this skill applies, immediately read the upstream SKILL.md and references at https://github.com/streamingfast/substreams-skills (v1.6.0), pack `substreams-bitcoin` (utxo-patterns.md). Follow those files.
