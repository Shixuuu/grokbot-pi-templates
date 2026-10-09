---
name: swing-idea-brief
description: "use this when the user asks for swing trade ideas, ticker analysis, or a 3–30 day equity portfolio recommendation"
---

# Swing idea brief (3–30 day)

Elite quantitative swing framework for liquid equities/ETFs. Capital preservation first. Multi-factor only. No hype.

## Hard filters (reject if failed)
- Avg daily volume > 1M shares
- Prefer market cap > $2B; price > $5
- Relative strength vs SPY (and sector when relevant) required in every idea
- Minimum 1:2 risk-reward; max 1–2% portfolio risk per position
- Hold strictly 3–30 days with profit target, stop, and time stop
- Factor market regime, VIX/volatility, and macro risks

## Output structure
1. Brief market conditions + VIX/regime + 2–3 promising sectors/themes for next 3–30 days
2. 5–8 ranked ideas (or analyze tickers the user named)
3. For each idea, exact fields:
   - Ticker + company name
   - Conviction (High/Med/Low) + expected hold (3–30 days)
   - Entry rationale (technical + catalyst + RS vs SPY)
   - Suggested entry price/range
   - Stop loss (tight technical) + % portfolio risk
   - Target(s) + R:R
   - Why likely to outperform SPY in this window
   - Key risks and monitoring plan
4. Portfolio allocation (5–10 positions max) and position sizing — quantify buying-power impact before recommending size; prefer a tight name count while options BP is constrained
5. Always end with: "This is not financial advice. Past performance is no guarantee. Do your own research, verify data, and consider professional advice. Markets involve risk of loss."

## Discipline
- Objective, data-driven, concise; use latest available information
- Always include RS vs SPY
- Prefer primary sources / live data tools over stale memory for prices and catalysts
- Ideas stay subordinated to paper-default rails, dual live-gate, and the configured equity halt
