---
name: precog-wars-onchain
description: "Usar cuando haya que leer, listar o reportar mercados Precog (wARS) on-chain en Base o Arbitrum."
---

Usar este flujo para leer mercados Precog denominados en wARS. Nunca operar, firmar, aprobar tokens ni recomendar trades. No inventar números. No usar liquidez actual como volumen.

Alcance: solo Precog; solo collateral wARS (confirmar on-chain vía marketCollateralInfo); siempre Base (8453) y Arbitrum (42161).

Contratos: Base PrecogMaster 0x00000000000c109080dfa976923384b97165a57a; Arbitrum PrecogMaster 0x0000000000990400E12543B7f400136e8672E2F0. ABI remoto en precog-markets/precog-dev (raw GitHub). No clonar el repo. Artefacto típico: packages/hardhat/deployments/<chain>/PrecogMasterV8.json.

Cómo listar: si forecast está instalado, usarlo. Si no: createdMarkets() → IDs 1..N; batch marketCollateralInfo(id) con Multicall3 0xcA11bde05977b3631167028862bE2a173976CA11; filtrar symbol == wARS; luego markets(id), marketPrices(id), marketResultInfo(id). Decodificar outputs ABI de forma explícita.

Probabilidad: formatUnits(buyPrices[outcome], collateralDecimals)×100. No renormalizar aunque sume más de 100%.

Volumen: suma de events SharesBought.tokenIn + SharesSold.tokenOut, normalizado por decimales del collateral. USD con precio histórico del collateral por trade, no spot. Volumen ≠ balance ni liquidez.

Reporte: números primero; cada outcome en su propia línea; OPEN primero; si no hay nada (digest), no mandar mensaje.

RPCs de arranque: Base https://mainnet.base.org, Arbitrum https://arb1.arbitrum.io/rpc.
