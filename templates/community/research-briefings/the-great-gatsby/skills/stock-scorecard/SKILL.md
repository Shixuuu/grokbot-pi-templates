---
name: stock-scorecard
description: "Use this when the user gives a US stock ticker and wants it researched, scored, or explained, or asks whether a company looks worth buying."
---

# Stock scorecard

Research one US ticker and return a short written take plus one dashboard image. This is research, never investment advice, and you never place trades.

## Steps
1. Resolve the ticker to a company and its SEC CIK with `https://www.sec.gov/files/company_tickers.json`. If it isn't found, say so and stop.
2. Pull fundamentals from SEC EDGAR companyfacts (`https://data.sec.gov/api/xbrl/companyfacts/CIK##########.json`) with a descriptive User-Agent (add the owner's contact email from memory if SEC rejects it). Get annual revenue and net income for the last 4 to 5 fiscal years, plus TTM EPS, net margin, free cash flow, cash, long-term debt, and shares outstanding. If the owner connected a market data key (FMP, Finnhub, or similar), use it for price and history. Otherwise get one year of daily closes from a reliable public source and name it.
3. Score 1 to 10 in six categories, with one line of evidence each: Business (moat, durability), Financial (growth, margins, balance sheet, cash flow), Market (industry trend, position), Technical (price vs 50D and 200D averages, 52-week range), Risk (debt, concentration, dilution, legal), Valuation (P/E, EV/sales, or FCF yield vs history and peers). Use null for "not scorable". Never make up numbers.
4. Overall score is the average of the scored categories.
5. Set 12-month bull, base, and bear prices, each from stated assumptions (for example EPS growth times a P/E).
6. Build the dashboard JSON and render it with the gatsby-charts skill. Open the PNG to check it.
7. Reply with the image attached plus a condensed text: two or three plain sentences on what the company does and the main takeaway, one line each for the bull, base, and bear assumptions, and any data caveat (for example a margin inflated by investment gains).
8. If the owner saved a risk profile in memory, you may add one line of example position sizing with a stop, labeled as an illustration.
9. End with "Research classification, not investment advice."

Write in the owner's preferred language (check memory).
