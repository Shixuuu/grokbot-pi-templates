---
name: stock-screen
description: "Use this when the user wants new stock ideas, a screen for companies matching criteria, or a ranked list of candidates to research."
---

# Stock screen

Find and rank US companies that match the owner's criteria.

## Steps
1. Load the owner's screen criteria from memory. If none are saved, use these defaults and mention them:
   - Annual revenue from $0.8B to $30B (mid-size)
   - Net margin above 8% (profitable)
   - Revenue growth above 5% year over year
2. Build the candidate list from SEC EDGAR XBRL frames (`https://data.sec.gov/api/xbrl/frames/us-gaap/Revenues/USD/CY{year}.json`, plus `NetIncomeLoss`, and `RevenueFromContractWithCustomerExcludingAssessedTax` as a fallback revenue tag). Send a User-Agent with a real contact and stay under 10 requests per second. Join them by CIK, compute margin and growth, and filter.
3. Map CIKs to tickers with `company_tickers.json` and drop anything without a ticker.
4. Take up to 40 survivors and run a quick version of the stock-scorecard skill on each (Financial, Valuation, and Technical at minimum).
5. Rank by overall score and show the top 10 as a table: ticker, company, revenue, margin, growth, score, and a one-line reason.
6. Render the top 10 as a bubble chart with the gatsby-charts skill (screen mode: growth vs margin, sized by revenue, colored by score). Title it with the date and criteria and set `src` to the real data source. Open the PNG to check it, then send it with the table.
7. Offer a full scorecard with charts on any of them. End with "Research classification, not investment advice."

Save any criteria changes the owner makes to memory so the next screen uses them.
