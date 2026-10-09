---
name: autonomous-solflare-clawd-micro-swap
description: "Use when swapping SOL to canonical solanaclawd ($CLAWD) with Solflare (default signer) on the trading computer — always expand Show more and match mint 8cHz…Apump; do not use Phantom."
---

# Autonomous Solflare CLAWD micro-swap

Drive signed-in Chrome on this computer. Goal: swap SOL → canonical **solanaclawd** ($CLAWD) using **Solflare** as the default signer, matching `{amount_sol}` (teach demo used `0.00000005` SOL → about `0.003951` CLAWD). Never store seed phrases, passwords, or private keys.

## Hard rules
- **Default wallet is Solflare** (Chrome extension `bhhhlbepdkbapadjdnnojkbgioiodbic`). Do **not** use Phantom; it is being removed.
- Never read, copy, or save a seed / recovery phrase. If Jupiter shows Reveal Seed Phrase, stop that path; tell the user to back it up offline.
- Never store passwords, OTP, or wallet unlock secrets.
- Trade only mint `8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump` (starts with `8`). Reject bare `Clawd` with 0 balance, `clawdbot`, or any other CLAWD ticker.
- Token may appear **unverified** in the picker — still require Show more → solanaclawd, then confirm the CA via token details or Jupiter (`https://jup.ag/tokens/8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump`).

## Always click Show more (critical)
In Solflare Swap / any token picker (and Jupiter connect flows):
1. Search `clawd`.
2. **Always click Show more** (or See more / View more) under Unverified Tokens. The first rows are often wrong/empty decoy `Clawd` with 0 balance.
3. Select **solanaclawd** (not bare Clawd, not clawdbot).
4. Confirm the contract address / mint is `8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump` before Swap Now.

Same expand rule for Connect wallet → **View More Wallets** → **Solflare**.

## Preferred path (Solflare)
Inputs: `{amount_sol}` (demo default `0.00000005`), `{wallet_account}` optional.

1. Open Chrome. Keep desk tabs: Pump (`https://pump.fun/explore`), Phoenix, Backpack, StonkFun, Jupiter CLAWD (`https://jup.ag/tokens/8cHzQHUS2s2h8TzCmfqPKYiM4dSt4roa3n7MyRLApump`).
2. If Solflare is missing: install from Chrome Web Store `https://chromewebstore.google.com/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic` (or `https://www.solflare.com/download/`), pin it, unlock/import with the user — never vault the seed.
3. Open **Solflare** → **Swap** (or Jupiter CLAWD page → Connect → View More Wallets → Solflare).
4. You Pay: **SOL**. Enter `{amount_sol}` (demo: `0.00000005`).
5. You Receive: search `clawd` → **Show more** → **solanaclawd**. Confirm CA.
6. Review quote. For amounts above a tiny dust test, confirm with the user before Swap / Approve. Dust demo sizes the user already named may proceed.
7. Approve in Solflare. Report tx signature or error. Do not store seeds.

## Fallback signer
Jupiter Wallet `iledlaeogohbilgbfhmbgkgmpplbfboh` only if Solflare is unavailable. Never fall back to Phantom.

## Report back
- Amount swapped, receive token label, mint CA confirmed (`8cHz…Apump`).
- Whether Show more was used and that Solflare signed.
- Tx sig or failure reason.
- Explicitly: no seed phrase was stored.
