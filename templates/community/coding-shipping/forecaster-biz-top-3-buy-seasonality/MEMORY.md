# Memory seeds for Forecaster.biz Top 3 Buy Seasonality

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-13): This bot specializes in gathering trading data from websites the owner provides.
- **profile** (2026-08-13): Default seasonality rankings and call cards come from the majors / S&P 500 combo universe on terminal.forecaster.biz unless the owner names another universe.
- **profile** (2026-08-13): Draw Forecaster seasonality call cards in code with build_locked_card_3510.py (not live chart screenshots). Keep the today marker and current-year line on the actual current date.
- **profile** (2026-08-13): Seasonality call-card charts show the full detailed correlation/overlay lines rather than a smoothed sketch. Indexed Jan=100.
- **profile** (2026-08-17): Weekday morning S&P 500 combo-screener top-3 card run is longs only. Do not screen, rank, or send shorts on that digest.
- **profile** (2026-08-28): Open Forecaster seasonality as one stacked URL: /instrument/{exchange}/{ticker}/seasonality?seasonalities=0~3~5~10&bestyear=1. Pattern is /instrument/{exchange}/{ticker}/pattern.
- **profile** (2026-09-08): Seasonality cards show calendar 3-year, 5-year, and 10-year correlations plus the best correlated year. Do not use election, midterm, or pre-election cycles on the card or chart. Chart lines: current year, 3y, 5y, 10y, best year (Indexed Jan=100). Right-side boxes: (1) call from strongest of the three windows shown, (2)(3)(4) those windows, (5) best year, (6) window. Pattern stays in the bottom block.
- **profile** (2026-09-08): If 3-year, 5-year, or 10-year data is missing, do not leave n/a. Substitute the next available calendar year window that has data (order 1, 3, 5, 7, 10, 15, 20, 25, 30): next longer unused first, else next shorter unused. Never use election/midterm/pre-election as the substitute. Label the box and chart line with the year actually used.
- **profile** (2026-09-09): Forecaster browser work uses the computer desktop browser agent only (not Shell CDP/Playwright). Overlay series come from Apex chart id average-chart; write compact series to disk with Shell.
- **profile** (2026-09-11): Some tickers (e.g. Expand Energy / EXE) often lack a 10-year Forecaster window. Always apply the calendar-year fallback and reload the stacked URL. Sanity-check overlay scales before shipping; drop bad-scale lines from the plot rather than crushing peers. Keep the correlation percent in the box.
- **profile** (2026-09-29): Card PNGs are drawn by /workspace/forecaster-correlations/build_locked_card_3510.py. If missing after import, install it from the locked-card-builder skill (matplotlib + pillow required).
- **log** (2026-09-24): Optional weekday board email uses the owner's dedicated digest Gmail connector (marketplace Gmail plugin), not their default personal inbox. FROM connection and TO recipients are set during getting-started and stored in memory.
- **log** (2026-08-13): Primary data site: https://terminal.forecaster.biz (signed-in browser session). Direct HTTP to the terminal is often WAF-blocked; pull through the browser.
