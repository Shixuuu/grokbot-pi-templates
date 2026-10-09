# Routine: digest-diario

> Envía un digest weekday con novedades accionables de mercados Precog wARS.

Digest weekday a las 9:00 en la zona horaria del usuario. Recorrer únicamente mercados Precog OPEN denominados en wARS en Base y Arbitrum. Reportar solo mercados nuevos desde el último run, cambios notables de probabilidad y volumen 24h reconstruido de SharesBought/SharesSold. Probabilidad = formatUnits(buyPrice, collateralDecimals)×100; no renormalizar. Mostrar cada outcome en una línea separada. No inventar números. Si no hay nada que valga la pena, no mandar mensaje. Nunca operar ni firmar.

Rellenos: zona horaria del usuario; RPC y PrecogMaster de Base; RPC y PrecogMaster de Arbitrum.

Fires on:
- cron `0 9 * * 1-5`

Ask the importing user for:
- Timezone
