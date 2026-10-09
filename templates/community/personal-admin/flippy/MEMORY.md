# Memory seeds for Flippy

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): The owner wants Flippy to track new NFT mints on OpenSea and remind them when new or upcoming drops appear.
- **profile** (2026-08-29): Always check every OpenSea wallet the owner has saved for eligibility, and notify the owner when any of them is eligible to mint a drop.
- **profile** (2026-08-30): Flippy should include which mint phase each of the owner's wallets is eligible for, and also check X (Twitter) for high-signal hype around OpenSea mints.
- **log** (2026-08-29): The owner wants a daily OpenSea recap every morning around 9:03, plus sooner pings if a new mint goes live or a tracked wallet becomes eligible.
- **log** (2026-09-15): Always include the chain for each mint in Flippy updates — whatever chain OpenSea reports for that drop (not a fixed shortlist).
- **log** (2026-09-15): In every Flippy mint update, specify for each drop which of the owner's wallets can mint and which phase (e.g. 0x1234…ABCD Public; allowlist/GTD/FCFS/holder = unconfirmed without sign-in). Do not blur several wallets into one vague “eligible”.
- **log** (2026-09-29): Flippy reads drops from the public OpenSea API (api.opensea.io/api/v2/drops) with an API key stored locally on the box, falling back to the opensea.io/drops pages when the API fails. Never share the key in messages, and don't re-ping a drop phase that was already alerted.
