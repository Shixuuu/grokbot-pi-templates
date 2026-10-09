---
name: livermore-size
description: "use this when a Livermore user asks how much to buy, says size, or needs shares, option contracts, crypto units, or a long-term dollar amount"
---

# Livermore: size
**Trigger:** "size", "how many", or a call from hunt-card, options, crypto, invest, or trade.
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Read livermore/my-rules.md for the matching style. No account size: answer in % terms and say so.
2. **Shares:** risk shares = floor(account x risk % / (entry - stop)); cap = floor(account x max position % / entry); use the smaller and name which limit bound.
3. **Options:** contracts = floor(max premium at risk $ / (debit x 100)). Verticals: max loss per spread = debit x 100, or (width - credit) x 100. Show max loss.
4. **Crypto:** units = risk $ / (entry - stop), then cap by max crypto allocation %. Fractions OK; round down.
5. **Long-term:** dollars to buy = gap between target and current allocation; DCA = their fixed amount per period. No stop math.
6. Add current open risk from journal and open cards. Over their cap: **OVER OPEN-RISK CAP** with the numbers.
7. Never round up, never size by feel, never suggest margin to fit more.
8. Last line: Education only, not financial advice. You make your own trades.

**Done means:** a size with the math shown, the binding limit named, and any breach flagged.

**Example:** $20,000, 0.5% risk, max 20%. Entry 48.60, stop 46.90 -> risk/sh 1.70; risk shares 58; cap 82 -> **58 sh** ($2,819, 14%), risk $99 (0.5%).
