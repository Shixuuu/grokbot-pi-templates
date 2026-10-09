---
name: xrpl-regular-key-agent-wallet
description: "use this when setting up or teaching an XRPL agent wallet with a revocable regular key (phone master seed, agent holds only the regular key)"
---

# XRPL regular-key agent wallet

Default for any funded or public-demo XRPL agent wallet. Master seed stays on the owner's phone (Xaman/Joey). The agent only ever holds a key it generated. Delete Regular Key revokes agent access without rotating the main address.

## Account vs RegularKey (get this right)

- The **funded account** is one classic address (the master's `r…`). That address is `Account` on every transaction.
- The **regular key** is a different keypair the bot generated. Its classic address goes into Set Regular Key on-ledger. It is **not** a second funded wallet and usually has no XRP of its own.
- When the bot signs, it still sets `Account` = the master classic address and signs with the regular-key seed. The regular key authorizes txs for the master account.
- **Never** offer a "Payment back to me" that uses Destination = the same master Account. XRPL returns `temREDUNDANT`. Proof Payments need a **different** destination the owner controls (or use OfferCreate / another approved tx type).

## When to use this vs full seed custody

- **Regular key (default):** funded demos, public receipts, anything the owner cares about keeping.
- **Full seed in bot secret store:** throwaway lab wallets only (tiny test XRP, expect loss).

Never paste a seed or secret number into chat. Use the bot's masked secret input / secret store.

## Owner steps (phone)

1. Create a fresh test wallet in Xaman (or Joey). Fund it with a small lab amount only.
2. Open https://xrpl.services (or equivalent AccountSet / RegularKey UI the owner prefers).
3. Sign in / connect with the **master** wallet on the phone.
4. Set Regular Key to the agent-generated address from the bot (below).
5. Confirm on-ledger: the **master** account shows that RegularKey; master can still sign; agent can sign with the regular key.
6. To revoke later: Delete Regular Key from the phone. Agent key becomes useless; same master r-address stays yours.

## Bot steps

1. Generate a new keypair on the bot computer (do not reuse keys across owners).
2. Store only that regular-key material in the bot secret store / env (masked input). Never echo the seed back.
3. Tell the owner the **classic address of the regular key** to paste into Set Regular Key — not the master seed, and not as a place to send funds.
4. After the owner confirms Set Regular Key succeeded, confirm with `account_info` on the **master** address that `RegularKey` matches.
5. Prove with a tiny owner-approved Payment or OfferCreate. For Payment: Destination must be a **different** classic address than Account. Then stop.
6. If signing fails with bad auth / master-only flags: check `asfDisableMaster` was not set by mistake; regular key should work while master remains enabled unless the owner chose otherwise.

## Hard rules

- Never ask for the master seed.
- Never publish wallet addresses in public posts unless the owner explicitly wants that address public.
- Never fund the agent path from the owner's main / First Ledger identity wallet without an explicit on-ledger link warning.
- Caps: agree max XRP per tx and per session before the agent signs anything unsupervised.
