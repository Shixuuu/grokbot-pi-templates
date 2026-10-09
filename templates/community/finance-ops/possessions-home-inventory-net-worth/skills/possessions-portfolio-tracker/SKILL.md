---
name: possessions-portfolio-tracker
description: "Use this when someone wants a spreadsheet that tracks their belongings like a stock portfolio: cost basis vs current market value, flip/resale profits, value history, periodic valuation from sold comps, and copy-ready resale listing drafts."
---

# Possessions portfolio tracker

Build an Excel workbook (.xlsx via openpyxl, live formulas) that also imports cleanly into Google Sheets. Avoid Excel-only and dynamic-array functions; SUMIFS, COUNTIFS, AVERAGEIFS, LARGE/SMALL, INDEX/MATCH, IFERROR, MEDIAN, N are fine. The premise: the owner sees the floating value of everything they own at all times, like a stock portfolio, and can measure buy-low/sell-high flips.

## Tab 1: Inventory (dashboard on top, table below)
Table columns, one row per item: Item Name, Category, Brand/Model, Condition, Where Purchased, Purchase Date, Purchase Price, Photo Link, Current Market Value, Date Last Checked, Valuation Source, Status, Listing URL, Target Price, Date Listed, Date Sold, Sale Price, Platform Sold On, Notes (listing title, description, dimensions, defects), Fees/Costs (shipping, platform fees, repairs).
Formula columns: Unrealized Gain $ and % (held items), Realized Gain $ (sale minus purchase minus fees), Realized ROI % (on purchase + fees), Days Held (to sold date or today), Annualized Return % (blank under 30 days), Profit per Day Held.
- Dropdowns: Status (Owned, List, Listed, Sold), Category (tailored to the owner), Condition (New, Like New, Good, Fair, Poor).
- Excel Table sized for ~500 rows, frozen header, currency/date formats, green/red conditional formatting on gains, colored Status.
- Dashboard tiles: portfolio value, cost basis, unrealized gain $/%, realized gain this year and all-time, overall ROI, change since last snapshot, net worth of possessions, held/listed/sold counts. Category and status breakdowns. Top 5 gainers and bottom 5 losers (add a tiny row-based tiebreaker so ties both show). A "valuations to re-check" count (no check date or older than 35 days).
- Seed rows use the owner's real categories but are clearly marked: prefix "EXAMPLE – ", Valuation Source "Example data – replace", and a banner saying the numbers are made up. Include Owned, List, Listed and Sold examples with fees and varied hold periods so every view populates.

## Tab 2: Flips
Sold-item scorecard: count, invested, net proceeds, net profit, total and average ROI, win rate, median and average days held, profit per day, best and worst flip, best 5 by profit and by ROI, and stats by category.

## Tab 3: Value History
A live row computed from Inventory, a snapshot log (Date, Total Items, Cost Basis, Portfolio Value, Unrealized Gain, Cumulative Realized Gain, Net Worth), and a line chart of portfolio value vs cost basis. The monthly-net-worth-snapshot routine appends a row each month; also explain how to add one by hand. Note that Google Sheets needs the chart range widened once.

## Tab 4: Valuation Workflow
Research the current facts with web sources and cite them. Mark each fact Verified, Secondary or Unverified with the check date, and never guess figures. Check: whether eBay sold-data APIs are open to individuals (Marketplace Insights is limited release; the Finding API was retired; Browse covers active listings only); whether eBay sold search needs a login; third-party sold-comp scrapers and their pricing and terms risk; WorthPoint (API availability, subscription); PriceCharting (fits games, cards and comics only); Apps Script quotas.
Workflow: run monthly on a time trigger. Build a query per item, pull comps, drop outliers, take the median, and write Market Value, Date Last Checked and Source. Flag items for manual sold-comp review when there are fewer than 3 comps, a swing over 25%, a high value, or a rare material. Append a Value History snapshot. Include an Apps Script outline and label untested parts and tunable assumptions (for example, a discount applied to asking prices).

## Tab 5: Post for Sale
Setting Status to "List" automatically fills a draft slot (use a hidden helper sheet with MATCH/INDEX, not FILTER), up to about 30 slots. Each draft has a title (80 characters max), a description from Notes and condition, a suggested price (Target Price, otherwise market value rounded to $5), a photo link, a suggested marketplace category, and a copy-ready text block. Add notes: Facebook Marketplace has no listing API for individuals, so post by copy and paste. eBay's Inventory API can create listings with OAuth and business policies. The owner does the posting; never list, sell, post, or contact a buyer on the owner's behalf without their explicit yes to that exact action (drafting and pricing are fine). After posting, set Status to Listed and fill in the Listing URL and Date Listed.

## Verify and deliver
Recalculate in headless LibreOffice and confirm there are zero #REF!, #NAME? or #VALUE! errors, that drafts and gainer lists fill in, and that the chart exists. Render PNGs of the dashboard and Flips tab. Send the file and images, lead with what it shows, restate that seed rows are example data, and list any caveats. Keep the build script so the workbook can be regenerated.
