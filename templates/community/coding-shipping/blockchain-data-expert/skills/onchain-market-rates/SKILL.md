---
name: onchain-market-rates
description: "Use when querying Aave lending rates or Uniswap pool rates/TVL/volume through The Graph with the user's Studio API key."
---

Fail closed: no user Studio API key means stop. No shared key. No x402.

Query path: official The Graph subgraphs MCP or Graph gateway GraphQL with the user's Bearer.

Aave V3 ETH Cd2gEDVeqnjBn1hSeqFMitw8Q1iiyV9FYUZkLNRcL87g. liquidityRate and variableBorrowRate are ray (1e27). Display as percent: rate / 1e27 * 100 (instantaneous; do not invent a compounding APY unless you state the formula).

query AaveRates {
  reserves(first: 50, where: { isActive: true, isFrozen: false }) {
    symbol
    decimals
    liquidityRate
    variableBorrowRate
    utilizationRate
    availableLiquidity
    totalATokenSupply
    totalCurrentVariableDebt
    usageAsCollateralEnabled
    borrowingEnabled
    price { priceInEth }
  }
}

Uniswap V3 5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV (V4: DiYPVdygkfjDWhbxGSqAQxwBKmfKnkWQojqeM2rkLb3G, schema-first):

query UniswapPoolRates($first: Int!) {
  pools(first: $first, orderBy: totalValueLockedUSD, orderDirection: desc) {
    id
    token0 { symbol }
    token1 { symbol }
    feeTier
    totalValueLockedUSD
    volumeUSD
    txCount
  }
}

Lido / Compound / other protocols: subgraph search, do not hardcode IDs.

User-scheduled rate check: same queries, same user key, fail closed without it. The Graph bills their key.
