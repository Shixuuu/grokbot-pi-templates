---
name: uniswap-subgraph-lp
description: "Use when querying Uniswap V3/V4 LP positions, pool TVL/volume, or large swaps through The Graph with the user's Studio API key."
---

Fail closed: no user Studio API key → stop. No shared key. No x402 fallback.

Query path: official subgraph MCP or gateway GraphQL with the user's Bearer.

v1 subgraphs (Ethereum):
- Uniswap V3: 5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV
- Uniswap V4: DiYPVdygkfjDWhbxGSqAQxwBKmfKnkWQojqeM2rkLb3G

LP positions (V3). Owner is lowercase. Positions with liquidity "0" are closed.

query UniswapLp($owner: Bytes!) {
  positions(first: 50, where: { owner: $owner, liquidity_gt: "0" }) {
    id
    owner
    liquidity
    depositedToken0
    depositedToken1
    collectedFeesToken0
    collectedFeesToken1
    token0 { symbol }
    token1 { symbol }
    pool { id feeTier totalValueLockedUSD volumeUSD }
  }
}

Large movements (V3). Raise amountUSD_gt if the user names a floor.

query LargeSwaps($minUsd: BigDecimal!) {
  swaps(first: 25, orderBy: amountUSD, orderDirection: desc, where: { amountUSD_gt: $minUsd }) {
    timestamp
    amountUSD
    amount0
    amount1
    sender
    recipient
    token0 { symbol }
    token1 { symbol }
    pool { id }
  }
}

Pool TVL/volume: query pools / pool by id. For V4, get_schema first; do not assume V3 field names. Other deployments: subgraph search, do not guess IDs.

User-scheduled large-move or LP check: same queries, same user key, fail closed without it.
