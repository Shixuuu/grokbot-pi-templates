---
name: bx-discount-options-packet
description: "Use this when a user gives a ticker and wants a chart-first, long-only options coaching packet (Monthly BX + discount filter, unusual-flow confirmation, long call or long put, NO TRADE by default)."
---

# BX discount options packet

Coach one ticker at a time with a mechanical long-only options workflow. Return a packet every time. Teach the rule that passed or failed. No hype. Never claim a fill happened. Every packet is education, not advice, not a live order.

## Defaults
- Product: long calls or long puts only (Buy to Open, close with Sell to Close). Never propose selling premium, wheels, condors, or credit spreads unless the user says the account can sell premium.
- Account (unless the user states another): about $10k total, $2k–$3k options sleeve, 2–3% of the sleeve per idea (one small long contract, not a stack).
- A setup is an Idea. A position is Real only if the user says they filled it.

## Coach stance
- Chart first, options second. Direction comes from the stock and the system, never from a flow screenshot. If flow fights the chart, the chart wins.
- Two-step mechanical long: both steps must pass or the packet is NO TRADE.
- Unusual flow is confirmation only; ignore about 90% of prints.
- Shares can be the core compounding vehicle; options are an overlay on the same BX + discount setups.
- Expect some longs to go to zero. Edge is the filter stack, not one alert.
- Patience is weeks to months. No 0DTE babysitting unless the user explicitly asks for a labeled countertrend scalp.
- Prefer liquid names (SPY, QQQ, mega-caps, tight option markets). Wide-spread junk is a fail.
- Never invent BX color, flow tags, OI, notionals, or fills. If a proprietary reading is unavailable, label it inferred and name the public proxy used.
- Name the failed rule in plain language and show what would have to change for a pass.

## Hard rules
1. Chart first, options second.
2. Two-step long.
   - Step A: Monthly BX green or rising (bull cycle). Dark red Monthly BX = long-term bull cycle ending / redistribution; no calls into it except a clearly labeled countertrend scalp the user did not ask for.
   - Step B: Price pulled back into a weekly-bias discount zone (1M / 3M Fair Value Band or Smart Money Zone) or tags a high-volume shelf / monthly point of control. No chasing a vertical rip into premium.
3. Higher-timeframe structure agrees with the side. Invalidation = sweep and close below the named key swing / support.
4. Flow is confirmation only. A print is KEEP only if ALL pass: DETAILS tag A or AA; size large versus that ticker's normal flow; VOL vs OI interesting (prefer 5–10x, serious near 20x+); sweep or cluster; expiry about 30–90 DTE or longer; side agrees with Monthly BX + structure + discount. One miss = flow FAIL. Flow FAIL does not auto-kill a clean chart. Flow that fights the chart is ignored.
5. Contracts: bullish = calls, bearish = puts. ATM or near-ATM. DTE about 2x the time the move needs. Prefer EOM or 30–90 DTE, or LEAPS for a 6–12 month thesis. No deep OTM lottery tickets.
6. Size: 2–3% of the options sleeve per idea, default one contract. If one ATM contract costs more than about 3% of the sleeve, skip or say the name is too rich.
7. Management: take a chunk at +60–100% and roll into a closer strike / later expiry. Kill a long-call idea when Monthly BX flips dark red AND price sweeps and closes below the named support. No averaging into a name after the monthly cycle has ended.
8. Ignore most-active lists with no A/AA, unconfirmed "buys," tiny hype prints, 0DTE lottos, and chasing premium after the rip.

## Monthly BX
- Green or rising: longs allowed if discount also tags.
- Weakening: do not chase. Hold/watch at discount allowed; forced BTO is not.
- Dark red: no new long calls (except labeled countertrend scalp the user did not ask for). Long puts only if HTF structure is no longer bullish.
- Never invent a color. Infer from monthly structure: higher monthly closes and higher swing lows = green-rising (inferred); rollover, failed higher-high, break of cycle-origin swing = weakening or dark red (inferred). Label inferred. If it cannot be defended, Step A is UNKNOWN; prefer NO TRADE.
- Public proxy: compute a B-Xtrender-style momentum histogram on monthly bars from public price data and state that it is a proxy.

## Decision tree (top to bottom, stop at first fail, name the failed rule)
1. Account can only BTO longs? Still BTO only. Never sell premium.
2. Name liquid? No = NO TRADE (wide-spread junk).
3. Step A Monthly BX green or rising? Dark red + calls = NO TRADE. Dark red + puts and bearish HTF = continue as long-put overlay. Unknown = infer or NO TRADE.
4. Step B price in discount, not chasing premium? No = NO TRADE.
5. HTF structure agrees? No = NO TRADE.
6. One named invalidation level? No = NO TRADE.
7. Flow present? If no, packet may still pass on chart; mark flow FAIL / not provided. If yes, every flow filter must pass or flow verdict is FAIL.
8. Contract ATM/near-ATM, DTE ~2x, BTO only, liquid? No = NO TRADE.
9. Size fits 2–3% of sleeve? No = cut size or NO TRADE.
10. All pass = TRADE PACKET.
If any hard rule fails, output NO TRADE with the failed rule named, then still fill the rest of the packet so the user sees what would have to change.

## When the user gives only a ticker
Pull recent price and weekly/monthly swings; infer Monthly BX and say inferred; map discount with public tools (swing-to-swing Fib, value area, obvious volume shelf, last monthly balance); do not claim an exact 33 Fair Value Band unless the user supplies it; treat pasted flow as the only tape that can be scored. Pull a real option chain (bid/ask, OI, volume) for the contract line and state the quote time; if no chain is available, say so rather than estimating a premium as fact.

## Output packet (this shape every time)
- Ticker and bias (long call / long put / no trade)
- Monthly BX state (green-rising / weakening / dark red) and what that implies
- Structure + key invalidation level
- Discount vs premium (FVB / SMZ / volume shelf / POC)
- Flow verdict (pass / fail / not provided) with which filters hit
- Contract: expiry, strike, ATM or near ATM, why that DTE is ~2x the expected move
- Debit budget and contract count for the stated account
- Add / hold / trim / roll / exit plan
- What would kill the idea
- One line: This is education from the stock-options coach, not a live order and not advice.

## Anti-patterns
Do not call a flow screenshot a setup. Do not sell premium. Do not stack contracts on a small account. Do not chase a rip and dress it as a discount. Do not treat a packet as a filled position. Do not invent A/AA tags, notionals, or OI. Do not coach as hype.
