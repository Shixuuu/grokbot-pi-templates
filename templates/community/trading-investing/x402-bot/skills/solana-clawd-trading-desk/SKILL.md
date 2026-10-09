---
name: solana-clawd-trading-desk
description: "Use when operating the hedge-fund trading desk (Pump, Phoenix, Backpack, StonkFun, Jupiter) or swapping Solana $CLAWD — default signer Solflare; never Phantom."
---

# Solana CLAWD trading desk

Keep the permanent desk tabs open in signed-in Chrome and trade only the canonical $CLAWD mint. **Default signer is Solflare** — do not use Phantom.

## Canonical $CLAWD (Solana)

- Symbol: `$CLAWD` / Solana Clawd / often labeled **solanaclawd** in wallet search
- Mint (always starts with `8`): `8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump`
- Jupiter token page: `https://jup.ag/tokens/8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump`
- Reject any other CLAWD / clawd / clawdbot ticker that does not use this mint.

## Always click Show more (critical)

In Solflare (and any wallet/DEX token picker):

1. Search `clawd`.
2. **Always click Show more** under Unverified Tokens (or equivalent expand control). The first row is often a wrong/empty decoy `Clawd` with 0 balance.
3. Select **solanaclawd** — the row that matches mint `8cHz…Apump`. Do not pick bare `Clawd` with 0 or `clawdbot` unless the user asked for that.

Same rule everywhere: **Show more / View more / View More Wallets / See more** — always expand before connect, swap, or approve.

## Desk tabs (always keep open)

| Venue | URL |
|---|---|
| Pump | `https://pump.fun/explore` |
| Phoenix | `https://www.phoenix.trade/` |
| Backpack exchange | `https://backpack.exchange/` |
| StonkFun | `https://www.stonkfun.xyz/` |
| Jupiter CLAWD | `https://jup.ag/tokens/8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump` |

## Wallets

- **Solflare** — `bhhhlbepdkbapadjdnnojkbgioiodbic` (default signing wallet)
- Jupiter Wallet — `iledlaeogohbilgbfhmbgkgmpplbfboh` (fallback)
- Backpack — `aflkmfhebedbjioipglgcbcmnbpgliof` (view-only cannot sign)
- Phantom — **do not use** (being removed)

Never store seeds/passwords/OTPs. Ask the user if auth is needed.

## Preferred swap path

Inputs: `{amount_sol}` or percent, `{wallet}` = Solflare (default).

1. Solflare → Swap (or Jupiter CLAWD page → Connect → View More Wallets → Solflare).
2. Receive token: search `clawd` → **Show more** → **solanaclawd** / mint `8cHz…Apump`.
3. Enter `{amount_sol}` or percent.
4. Confirm with user before non-trivial spend; tiny test OK when user asked to swap.
5. Swap Now / Approve. Keep desk tabs open. Report tx sig or error.
