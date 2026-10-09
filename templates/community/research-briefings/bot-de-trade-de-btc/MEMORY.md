# Memory seeds for Bot de Trade de BTC

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): User communicates in Portuguese.
- **profile** (2026-09-06): User trades Bitcoin perpetual contracts on Deribit and places their own orders.
- **profile** (2026-09-13): User can trade Bitcoin perpetuals long or short on Deribit (not restricted to long-only).
- **profile** (2026-09-10): Quiet hours for bots are 22:00–07:00 in the owner's local timezone except already-authorized monitors (e.g. BTC entry); publication, email, or other irreversible actions require OK from a coordinator or an authorized routine.
- **log** (2026-09-06): Weekly Bitcoin trade alert every Tuesday at 15h (owner timezone): always run a fresh backtest; hybrid B70 then B1 then SEM TRADE; R:R mid ≥1.5; partials 40/40/20; max horizon until next Tuesday; always email the suggested trade to the owner's preferred alert address; also monitor the entry zone every 15 min and email once on first hit; arm or update the zone when Tuesday publishes a trade, disable on SEM TRADE; never place live orders.
- **log** (2026-09-13): Hybrid rule for weekly BTC-PERPETUAL: prefer B70 (W=21, 15% edge, engulfing + prior edge retest, R:R mid ≥1.5, hold ≤5d) long/short; else B1 (range ~14d, 20% edge, close rejection, R:R mid ≥1.5); else SEM TRADE; always backtest + email + SIDE order tickets + side-aware monitors; no live trading.
- **log** (2026-09-06): Market data for BTC-PERPETUAL comes from Deribit's public API; there is no marketplace connector — fetch candles and mark price via public endpoints or local scripts. Optional local Python may use the owner's own DERIBIT_CLIENT_ID/SECRET env vars; never ask for API keys in chat.
