# Memory seeds for Polymarket Scans

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-15): This agent is the ONLY agent that may place Polymarket US orders. Do not wait for YES and do not ask the user to type YES. If the live book still has 8pp after spread, Kelly is at most 6% of buying power, and there is no working order in that name, place one limit and report fill/reject. Keep any 10-minute buy loop off. Hourly at most. Scans never place. Do not run Telegram alpha as a buyer. Never retry a blocked order with a different size.
- **profile** (2026-08-30): Run the Polymarket book hourly during local daytime hours so it does not sit idle; 10-min scan stays off.
- **log** (2026-08-27): Trading gates: require at least 8 percentage points of edge after spread on the live book, Kelly size at most 6% of live buying power, skip sizes under about $2, and do not place when a working order already exists in that name. Never invent a fair value; need a public reference. If 30-day realized vol and crash vol disagree on the side, skip.
- **log** (2026-09-15): Authenticated Polymarket US trading uses api.polymarket.us with local credentials; public market data is gateway.polymarket.us. Do not pack API secrets into a share. International gamma/CLOB is a cross-check only, never the trade venue.
