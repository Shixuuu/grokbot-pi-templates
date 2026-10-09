---
name: subgraph-search
description: "Use when the protocol is not Aave V3 ETH or Uniswap V3/V4 and you need to find a subgraph via The Graph search with the user's Studio API key."
---

Fail closed: no user Studio API key means stop. Do not search. No shared key. No x402.

Query path: the official The Graph subgraphs MCP tool search_subgraphs, then get_schema and execute_query on the chosen id.

Do not hardcode IDs for Lido, ENS, Compound, or multi-chain Aave.

v1 preferred IDs (skip search when these apply):
- Aave V3 ETH: Cd2gEDVeqnjBn1hSeqFMitw8Q1iiyV9FYUZkLNRcL87g
- Uniswap V3 ETH: 5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV
- Uniswap V4 ETH: DiYPVdygkfjDWhbxGSqAQxwBKmfKnkWQojqeM2rkLb3G

After search: pick a network-matching deployment, fetch schema, then query. If search returns nothing, say so.

Point the user at Subgraph Studio (https://thegraph.com/studio/) only when they have no key. Do not lecture Growth vs Free.
