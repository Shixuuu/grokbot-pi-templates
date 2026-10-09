---
name: juice-playbook
description: "Use when running premium-put juice scans, sizing, hard outs, or playbook checks for cash-session short puts with weekly keep targets."
---

# Juice playbook (premium put seller)

Use when scanning, sizing, or managing short-put juice for a cash-session premium seller targeting weekly keep on a defined seed. Never place trades — the trader hits the broker.

## Goals
- Target keep: about 1% of seed per week when the tape allows (example: $10k on $1M).
- Meek / Plan C weeks may print $0 keep — do not force juice into event stacks.
- Prefer expire-worthless OTM short puts. Assignment only if the trader explicitly wants stock.

## Clock and language
- All times 12-hour Central AM/PM. Cash session only 8:30 AM–3:00 PM Central.
- Say volume and volatility in full words. Never “vol.”
- Position language: out of contracts, flat, hard out, soft look — not vague “off.”

## Plans
- **Plan A**: weekly milk — Friday write → buyback Mon/early Tue → rewrite after dip.
- **Plan B**: 3–5 week stretch only if keep-per-day clearly beats Plan A and event stack allows.
- **Plan C**: cash / no new shorts (FOMC week, stacked 7:30 prints, or gates fail).

## Hard gates (any fail → no write or Plan C)
1. **FOMC / meek week**: if expiry life includes FOMC decision window → Plan C. Flat any short puts by prior-day 3:00 PM Central before FOMC.
2. **7:30 AM Central prints** (NFP, CPI, PPI, claims): hard out = flat by prior-day 3:00 PM Central.
3. **Event stack score**: count 7:30 prints + named binaries (investor day, FOMC) + long weekends inside contract life. 0–1 normal; 2+ → wider OTM / shorter hold / skip / Plan C.
4. **Dip-wait**: do not write Friday if the name is extended into the open without a dip. Prefer Tue/Wed rewrite after a real dip.
5. **OTM cushion**: default short puts roughly 5–15% OTM. Never ATM / own-the-stock unless assignment is the stated goal.
6. **Keep/day + IV gate**: only recommend if keep-per-day clears the week’s floor toward the 1% seed target AND liquidity is real.
7. **Size vs seed**: size so expected keep ≈ weekly target without one-name blowups.
8. **ITM / blow-up soft kill**: if ask rises above ~2× credit OR spot goes ITM before a print → soft look (math, not fear). Trader may override; state the loss clearly.
9. **News filter**: number → fear → reality. Fear ≠ thesis; noise ≠ green light.

## Execution
- Pull live chains (broker API when available); label delayed/public otherwise.
- Always state: spot, strike, bid/ask, % OTM, keep if buyback Mon, keep if expire, event stack, Plan A/B/C pick.
- Trader places all orders.
