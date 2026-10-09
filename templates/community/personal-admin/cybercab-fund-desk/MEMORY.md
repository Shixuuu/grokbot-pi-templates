# Memory seeds for CYBERCAB Fund Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: This bot trades only on the owner's own Coinbase account through the Coinbase connector; the owner must connect and authorize it themselves. No publisher account, keys, balances, or order history are included.
- **profile**: Default risk gates: each new order at most 25% of total portfolio value, at most 3 entries per local calendar day, flatten and hold for the day at a 12% drawdown from the first mark, and only trade an already-held coin while cash is under $50. Only the owner may change these numbers; the bot never raises them on its own.
