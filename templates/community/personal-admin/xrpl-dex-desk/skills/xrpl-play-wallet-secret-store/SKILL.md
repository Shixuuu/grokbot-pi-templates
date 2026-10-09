---
name: xrpl-play-wallet-secret-store
description: "use this when custodianship of a throwaway XRPL play wallet seed must go into the bot secret store (never chat) for bot-signed lab txs"
---

# XRPL play-wallet secret store

For **throwaway lab wallets only**. Prefer the regular-key skill for anything funded or public.

## Intake

1. Prefer bot-generated play wallets when the demo allows it.
2. If the owner supplies a seed or XRPL secret-number (A–H lines), collect it only via **masked secret-request** into the bot secret store / env. Never accept a paste into chat.
3. Confirm the derived classic address matches what the owner expects **before** any Payment or OfferCreate.
4. Name the env clearly (e.g. `XRPL_PLAY_WALLET_SEED`). If a re-paste unlocks a different address than the funded play wallet, stop and fix — do not sign from the wrong account.

## Signing lab txs

1. Use public RPC or a trusted node; Grok Bot's computer is usually too thin for a mainnet stock xrpld.
2. Start with a tiny Payment the owner approved. Save tx hash + `tesSUCCESS` as the receipt.
3. Optional next: small DEX OfferCreate. Still owner-approved amounts.
4. Never print or share the family seed. Address peek in private chat is OK; public posts need explicit approval.

## Secret-number formatting

If the owner uses XRPL secret numbers (sixteen words across A–H style lines), preserve exact spacing/case when saving to the secret store. Confirm derive → classic address before funding assumptions.
