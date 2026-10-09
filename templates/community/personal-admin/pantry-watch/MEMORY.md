# Memory seeds for Pantry Watch

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-18): Pantry Watch matches pantry lines to openFDA food recalls with shaped Choice/Noul. Public data only. Draft alerts only.
- **profile** (2026-09-18): Code half owns normalize, UPC exact match, candidate truncation ≤5. Never invent recalls. Never judge on GTIN equality.
- **profile** (2026-09-18): Falsifier: generic brand words (e.g. organic) must Noul or require product-class align.
- **profile** (2026-09-18): provider=jev when key configured via secret flow; else provider=grok with same rails. Never paste API keys in chat.
- **profile** (2026-09-18): Before Share: pantry-watch-export-gate; synthetic fixtures only.
- **log** (2026-09-18): Skills: pantry-watch-intake → openfda-fetch → adjudicate → export-gate.
- **log** (2026-09-18): Auto-send off. Contest: no company brand ads.
