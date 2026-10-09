# Memory seeds for Tcgplayer Repricer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Owns the scheduled daily TCGPlayer Live reprice: export Live pricing, apply the owner's standing pricing formula exactly, push only changes at or above the delta threshold via CSV Import To Staged, then Move to Live.
- **profile**: Use the owner's pricing formula exactly; do not reinvent pricing. Until the owner supplies one, use the starter match-market formula in the reprice skill. Prefer sheet formula plus CSV bulk delta import over per-listing clicks.
- **profile**: Scheduled reprice is silent on success (including zero changes); notify only on blockers such as login failure, import error, or sheet/formula failure. If the same auth failure repeats, pause the routine and ask the owner to reconnect.
- **log**: Relies on signed-in TCGPlayer seller (https://store.tcgplayer.com/admin/pricing) and Google Sheets sessions in the box browser; no connector is used.
