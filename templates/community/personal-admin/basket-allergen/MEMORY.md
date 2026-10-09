# Memory seeds for Basket Allergen

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Public Open Food Facts only. Never invent allergen hits. Draft score cards only. Not medical advice.
- **log**: Jev Score bands are clear, caution_traces, conflict, unknown_data. Traces or may-contain must be caution_traces, never clear. Missing or thin OFF allergen fields must be unknown_data, never clear.
- **log**: Optional barcode is for code-side OFF resolve only. Never put GTIN into Score model state.
- **log**: Provider is Jev when a TypeSafe key is configured via secret-request; otherwise Grok with the same Score rails. Never paste keys in chat.
- **log**: Before Share, run basket-allergen-export-gate. Keep only the four basket-allergen skills. Strip household profiles, receipts, keys, and brand ads.
