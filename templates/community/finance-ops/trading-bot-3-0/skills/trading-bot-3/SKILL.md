---
name: trading-bot-3
description: "Use this when setting up, running, explaining, or changing Trading Bot 3.0: range trading of XRP against RLUSD with limit orders on the XRP Ledger's built-in exchange, through a regular key on a small dedicated wallet."
---

# Trading Bot 3.0: XRPL range trading (XRP/RLUSD)

Educational template, not financial advice. Only trade money you can afford to lose.

## What it does, and what it doesn't
**Does:** places limit orders to buy XRP a set percentage below the price and sell a set percentage above. When one fills, it places the opposite order one step away, so it earns a small slice each time the price swings back and forth. It logs every fill, follows the owner's hold switch, floor, and quiet hours, and reports in plain English.
**Doesn't:** predict price, use leverage, chase the market, trade other tokens, move funds out, change wallet settings, or touch the owner's main wallet. It does not beat simply holding XRP in a strong rally, and it keeps buying in a steady drop (the guardrails only limit that).

## Plain-English basics
- **XRPL DEX:** the XRP Ledger has an exchange built in. Orders ("offers") sit on the ledger itself, with no company in the middle. An AMM pool for the same pair also trades, and the ledger fills orders against whichever is better.
- **RLUSD:** Ripple's US-dollar stablecoin. To hold it, the wallet needs a **trust line** to the official issuer. Fake look-alike tokens exist, so the owner confirms the issuer from Ripple's official website.
- **Limit order:** "buy 100 XRP at 1.94 or better." It waits until the price reaches it. It may fill in pieces (partial fills).
- **Geometric grid with spacing `s`:** after a SELL fills at price P, place a BUY at **P / (1 + s)**. After a BUY fills at P, place a SELL at **P × (1 + s)**. Each round trip is the same percentage up and down.
- **Never-sell floor:** an amount of XRP the bot will never sell, no matter what.
- **Reserve:** the ledger locks a small amount of XRP in every account: a base reserve (currently 1 XRP) plus an owner reserve (currently 0.2 XRP) for each trust line and each open order. It's released when the order or trust line goes away. Validators can change these values, so read them live (`server_info`) instead of hard-coding them. The bot also keeps a 3 XRP buffer on top for fees.
- **Fees:** an XRPL transaction costs about 0.00001 XRP (it can rise a little when the network is busy). There's no exchange commission on order-book trades. AMM trades include the pool's trading fee. Some issued tokens charge a transfer fee, so check before trading.

## The key: be honest before setup
A **regular key** is a second key the account owner attaches to the wallet. **The XRP Ledger does not limit it.** It can sign anything the master key can, including payments that send funds out. The "trade only" limit comes only from this bot's code and rules. Never call it a "trade-only key." That's why the wallet must be new, small, and separate from the owner's main holdings.
- The bot generates the keypair on its own computer, saves the secret in a private file (chmod 600), loads it only at the moment of signing, and never shows it in chat, memory, or logs. The owner gets only the public address.
- The owner sets it with **xrpl.services**: sign in with Xaman on the NEW wallet, open Set Regular Key, paste the bot's address, check it character by character, and approve. Leave Account Delete, Blackhole Account, Signer List, and "disable master key" alone.
- The bot reads the account and confirms the RegularKey field matches before any trade.
- **Revoke any time:** on xrpl.services, sign in with Xaman and choose Delete Regular Key (a SetRegularKey transaction with no key). Once it's validated, in a few seconds, the bot can't sign. **Open orders stay on the ledger after revoking**, so cancel them first (ask the bot) or afterward in Xaman/xrpl.services. Never disable the master key, because then the bot's key would be the only way in.
- If the ledger's Permission Delegation feature goes live and the owner's wallet supports it, offer a delegated permission limited to OfferCreate/OfferCancel as the safer option.

## Hard rules (enforced in code, not just in notes)
Every transaction goes through ONE signing function that runs these checks right before signing and refuses on any failure:
1. **Type allowlist:** only OfferCreate and OfferCancel. The code contains no builder for any other type.
2. **Hold switch:** read `hold.json` from disk on every attempt. If it says `"hold": true`, or it's missing or unreadable (fail closed), refuse every OfferCreate. Cancels stay allowed. Only the owner turns hold off.
3. **Pair:** XRP against the owner-confirmed RLUSD issuer only.
4. **Floor:** before a sell, XRP balance − reserve − 3 XRP buffer − XRP in open sells − this sell ≥ floor. Otherwise shrink or skip it, and log that.
5. **Funds:** a buy may spend only free RLUSD (balance minus RLUSD already committed to open buys).
6. **Price bounds (optional):** no buys below the owner's buy-floor price, and no sells above their sell-cap price.
7. **Don't cross:** re-read the live book (including the AMM's effective price after its fee). A BUY must be below the best ask, and a SELL above the best bid. If it would cross, don't send it; mark the re-arm as owed and retry next check. Send resting orders with the tfPassive flag.
8. **No chasing:** limit orders only. A one-off "sell now" (immediate-or-cancel) only happens on an explicit owner order, sized and confirmed first, with no retry loops.
9. **No duplicates:** use a file lock, save the tx hash before submitting, and work out fills from ledger history so a rerun never places an order twice.
New settings apply to NEW orders only. Never cancel or replace resting orders because a setting changed, unless the owner asks.

## Spacing presets
| Preset | s | Fills | Per round trip | Tradeoff |
|---|---|---|---|---|
| Conservative | 5% | Rare, can go days without one | Bigger | Least churn; misses small wiggles |
| Standard | 3% | Regular in choppy markets | Medium | Balanced default |
| Aggressive | 2% | Frequent | Smaller | More orders and messages; edge is thin and easily wiped out by a trend |
Lesson from testing: over days, the price move of XRP itself was far bigger than the grid's profit. Judge the bot on the trading edge, not the price move.

## Worked examples (EXAMPLE numbers, made up)
**Example A, sell then buy, s = 3%:** price 2.00 RLUSD per XRP. A resting SELL of 100 XRP at 2.06 fills, giving 206 RLUSD. Re-arm: BUY at 2.06 / 1.03 = 2.00, spending 206 RLUSD, which gets 103 XRP. If it fills, the round trip ends with **+3 XRP** (about s), less roughly 0.00002 XRP in network fees.
**Example B, buy then sell:** BUY 100 XRP at 1.94 fills, costing 194 RLUSD. Re-arm: SELL 100 XRP at 1.94 × 1.03 = 1.9982, giving 199.82 RLUSD, so the round trip makes **+5.82 RLUSD**.
**Example C, downtrend:** the price slides from 2.00 to 1.60. Buys fill at 1.94, 1.88, and 1.83, and none of the sells fill. The bot now holds more XRP worth less, and no profit is booked until the price comes back. The floor and buy-floor price limit how far this goes.
**Example D, rally:** the price runs from 2.00 to 2.60. Sells fill on the way up, and the wallet ends up holding more RLUSD while XRP climbs without it. That's the cost of range trading in a rally. The never-sell floor keeps a core amount of XRP.

## Each check (on the owner's cadence)
Cadence options are **hourly** (calm, slower re-arms), **every 30 minutes** (default), or **every 15 minutes** (fastest re-arms, more runs). Orders rest on the ledger between checks, so the cadence only changes how quickly the opposite order goes up.
1. Read `hold.json`. If hold is on: no new orders, report status only.
2. Read balances, open orders, the book, and the live reserve. Compute the mid from the true best bid and best ask, ignoring zero-size or absurd junk offers. Sanity-check it against a public exchange price, and if they disagree a lot, skip trading this run and report it.
3. Find fills since the last check from the account's transaction history.
4. For each fill, compute the re-arm (P/(1+s) or P×(1+s)), run every hard-rule check, and place it or log why not.
5. After any fill, append it to the fill log.
6. Message the owner about fills or problems only. Stay silent when nothing changed. During quiet hours, hold non-urgent messages until the window ends.
7. If the owner says "stop" or "hold": write `"hold": true` to `hold.json` at once, ask whether to cancel open orders, and confirm.

**Price stamps:** every price the bot reports carries its source and time, e.g. "1.5012 RLUSD/XRP (XRPL book mid, 2:05 PM CT)" or "(public exchange, 2:05 PM CT)". Use the owner's timezone.

## Fill log for taxes
Keep `records/fill-log.csv`, rebuilt from ledger history (read-only, no key needed) with these columns: time (owner's timezone), side, XRP amount, RLUSD amount, price, network fee (XRP), how (resting/immediate), transaction type, and ledger tx ID. Only replace the file after a complete fetch. Never let a rebuild drop rows, write atomically, and keep dated backups. Deposits and withdrawals are transfers, not trades, so label them that way. Tell the owner the file exists, and that their tax rules and advisor decide how to use it.

## Hold / kill switch
- **Soft stop (hold):** `hold.json` = `{"hold": true, "reason": "...", "set_at": "..."}`. The signing code refuses new orders, while the owner keeps every order and coin as they are.
- **Hard stop:** cancel open orders, then the owner deletes the regular key. The bot can't sign anything after that.
- Lifting hold requires an explicit owner instruction, and the bot confirms it back.

## Reporting and changes
Measure results against the starting balance and price recorded at setup. Split the change into **price movement** (what holding would have done) and **trading edge** (the grid's extra). Run strategy changes as a timed test: back up the code and rules, record a bookmark balance and the values to revert to, don't change rules mid-test, and let the owner keep or revert at the end. Never put wallet addresses, the issuer address, or tx IDs in anything public.

## Risks
Trending markets (left holding the falling asset, or sold out of a rally). Price swings far bigger than grid profit. Thin books and AMM moves causing partial or no fills. Slippage on any immediate "sell now" order (resting limit orders never fill worse than their price). Stablecoin risk: RLUSD depends on its issuer, and regulated issuers can usually freeze or claw back tokens. Software bugs, a stopped computer (no re-arms until it's back), and a stolen key: the regular key can drain the wallet, so keep it small. Taxes on every fill in many countries.

## FAQ
- **Does it need my seed phrase?** Never. If anything asks for it, stop.
- **Can it send my funds away?** The ledger would allow the key to; this bot's code refuses. That's why the wallet stays small.
- **Why does Xaman show a stranger as "From" on a fill?** Your resting order was filled by another trader's transaction. That's the counterparty, not a hack.
- **What if the bot goes offline?** Orders stay on the ledger and can still fill. Re-arms wait until it's back.
- **Why didn't my order fill?** The price didn't reach it, or only part filled. It stays until it fills or is canceled.
- **Can I add or withdraw funds?** Yes, from Xaman with your master key. Tell the bot so it doesn't count that as profit.
- **Is it profitable?** Sometimes, in choppy markets. It isn't a guarantee, and it's not financial advice.
