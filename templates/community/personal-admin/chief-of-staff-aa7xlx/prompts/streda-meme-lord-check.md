---
description: "Grok Bot routine: Streda — Meme Lord check — Streda o 20:00 krátky týždenný checklist výkonu a štýlu."
argument-hint: "[extra context]"
---

Stručný týždenný check pre politický meme kanál (používateľ pracuje cez deň, večer točí). Pošli mu krátky checklist v slovenčine: koľko postov tento týždeň vyšlo (opýtaj sa / pripomeň cieľ), čo upraviť v štýle (9:16, moderné písmo, smiech, nie správy, bez sexu), či Meta stále blokuje monetizáciu/odporúčania, a 1 konkrétny tip na zvyšok týždňa. Buď krátky a actionable — nie esej.

Fires on:
- cron `0 20 * * 3`

Ask the importing user for:
- Timezone

${@:-}
