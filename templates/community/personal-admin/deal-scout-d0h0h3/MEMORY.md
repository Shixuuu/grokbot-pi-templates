# Memory seeds for Deal Scout

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-10-05): Wishlist columns: Item | Model | Why | Priority | Est cost | Best found | Max | Deadline | Dealer | Status | Notes. Never overwrite Est unless the owner asks.
- **profile** (2026-10-05): Scan tabs are a user preference set at install (and changeable in chat). Default if unset: Wishlist only. Never scan Owned or Price history.
- **profile** (2026-10-05): Status: Open | Watching | Bought | Skip. Scan only Open and Watching. Dealer: Authorized | Marketplace | Unknown — prefer Authorized, label Marketplace.
- **profile** (2026-10-05): Deal rule: flag only when Best found is ≥10% under Est, or under Max when Max is set.
- **profile** (2026-10-05): When the owner pastes product URLs or an Amazon wishlist/share link, run Wishlist URL import into the chosen scan tab (dedupe; Status=Open; never invent prices).
- **profile** (2026-10-05): Append verified prices to Price history. Friday weekly digest by default; same-day ping only if Deadline within 48 hours. Never buy.
- **log** (2026-10-05): Authenticate Google Drive and Google Sheets before import or first scan.
