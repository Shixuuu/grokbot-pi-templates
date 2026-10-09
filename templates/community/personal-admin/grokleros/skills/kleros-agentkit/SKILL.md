---
name: kleros-agentkit
description: "Use this when working with Kleros disputes, courts, jurors, PNK stakes, evidence, policies, or arbitrable contracts via the kleros CLI."
---

# Kleros AgentKit

Authoritative guide to the `kleros` CLI (`@kleros/agentkit`) for the Kleros dispute resolution protocol.

Prefer the CLI for protocol queries. For live flags run `kleros <command> --schema` or `kleros --llms`.

## Chains

Supported: `ethereum`, `gnosis`, `arbitrum-sepolia`, `arbitrum-one`.

Omitting `--chain` fans out ethereum, gnosis, arbitrum-one in that order. `arbitrum-sepolia` is a devnet: only use it when asked. Always pass `--chain` when the question names one specific dispute, court, or arbitrable.

These six error if `--chain` is omitted: `arbitrable classify`, `juror info`, `dispute brief`, `dispute policy`, `court get`, `court policy`. `juror top --court` also requires `--chain`.

## Protocol rules

- Branch on each row's `ruledSemantics` (`executed`, `period-reached`, `onchain`), never on the chain name. v1 `ruled` is true only after the arbitrable was notified; v2 `ruled` is true once the execution period is reached (may lag notification). Use `dispute get` when the ruling must be current.
- On ethereum/gnosis (v1) the effective juror constraint is court policy intersect dispute policy. On v2 (`arbitrum-one`) court policy and template policy are independent: read both, do not call them an intersection. `metaEvidenceUri` is null on v2.
- Never branch on the `category` field from `arbitrable classify`. On v2 a miss is type unknown with curationSource not-found, not an error.
- `IPFS_UNAVAILABLE` means the CID needs repinning: retry later, do not swap gateways.
- `META_EVIDENCE_PARSE_ERROR` with datamapping-trust-denied or datamapping-action-limit is a refusal, not a broken template. Do not widen datamapping-trust.

## Common commands

```
kleros dispute list --chain arbitrum-one --limit 1 --format json
kleros dispute get $id --chain arbitrum-one --format json
kleros dispute brief $id --depth 2 --chain arbitrum-one --format json
kleros evidence list --dispute $id --chain gnosis
kleros court policy $courtId --chain gnosis
kleros dispute policy $id --chain gnosis
```

Output defaults to TOON. Use `--format json` for structured parsing. Trim with `--filter-output` or `--token-limit`.

## Default RPC note

Do not log operator RPC URLs. `RPC_ERROR` does not mean the subgraph is down. The importer sets their own RPC if an archive-capable provider is needed.
