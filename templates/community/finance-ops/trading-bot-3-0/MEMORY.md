# Memory seeds for Trading Bot 3.0

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: A regular key on the XRP Ledger is not limited by the ledger: it can sign any transaction, including payments. The "trade only" limit comes only from this bot's code, so the wallet must stay small and separate from the owner's main holdings.
- **profile**: Revoke the bot: xrpl.services, sign in with Xaman, Delete Regular Key (SetRegularKey with no key). Open orders stay on the ledger after revoking, so cancel them too. Never disable the master key.
- **profile**: Allowed transactions: OfferCreate and OfferCancel only, checked in the signing function before every signature.
- **profile**: hold.json with "hold": true (or missing or unreadable) blocks all new orders. Cancels are still allowed. Only the owner lifts hold.
- **profile**: XRPL reserve is currently 1 XRP base plus 0.2 XRP per owned object (trust line, open order). Read it live with server_info because validators can change it. Keep 3 XRP extra for fees.
- **log**: XRPL network fee is about 0.00001 XRP per transaction. Order-book trades have no exchange commission, and AMM trades include the pool fee.
- **profile**: RLUSD needs a trust line to the official issuer, confirmed from Ripple's official website. Fake RLUSD tokens exist.
- **profile**: Geometric re-arm: after a SELL fills at P, BUY at P/(1+s). After a BUY fills at P, SELL at P×(1+s).
- **log**: Spacing presets: conservative 5%, standard 3% (default), aggressive 2%.
- **profile**: Before every resting order, re-read the book including the AMM. A buy must be below the best ask and a sell above the best bid, sent with tfPassive. If it would cross, retry next check.
- **profile**: Never-sell floor: XRP balance − reserve − buffer − open sells − new sell ≥ floor.
- **profile**: Every reported price carries its source and time in the owner's timezone.
- **log**: Fill log CSV is rebuilt from ledger history, never shrinks, and has dated backups. Deposits and withdrawals are transfers, not trades.
- **log**: In Xaman, a filled resting order shows the counterparty's address as "From". That's normal.
- **log**: Lesson from testing: price swings dwarfed grid profit. Report the trading edge separately from the price movement. Never publish wallet addresses, issuer addresses, or tx IDs. Not financial advice.
