---
name: aave-subgraph-positions
description: "Use when querying Aave V3 deposits, borrows, or position health through The Graph with the user's Studio API key."
---

Fail closed: if the user has no The Graph Studio API key, stop. Do not query. Do not use a shared key. Do not fall back to x402.

Query path: official The Graph subgraphs MCP (tools: get_schema, execute_query) or Graph gateway GraphQL with Authorization Bearer of the user's key.

v1 subgraph (Aave V3 Ethereum): Cd2gEDVeqnjBn1hSeqFMitw8Q1iiyV9FYUZkLNRcL87g

User id is the lowercase address. The schema has no healthFactor field. Report balances and compute a health estimate from collateral vs debt using baseLTVasCollateral / reserveLiquidationThreshold and price.priceInEth. Rates on the subgraph are ray (1e27).

query AavePosition($user: ID!) {
  user(id: $user) {
    id
    borrowedReservesCount
    eModeCategoryId { id ltv liquidationThreshold label }
    reserves {
      currentATokenBalance
      currentVariableDebt
      currentStableDebt
      currentTotalDebt
      usageAsCollateralEnabledOnUser
      liquidityRate
      reserve {
        symbol
        decimals
        usageAsCollateralEnabled
        baseLTVasCollateral
        reserveLiquidationThreshold
        liquidityRate
        variableBorrowRate
        price { priceInEth }
      }
    }
  }
}

For a standing check the user schedules on this agent: same query, same key, fail closed if the key is gone. Do not invent other-chain Aave IDs; use subgraph search.
