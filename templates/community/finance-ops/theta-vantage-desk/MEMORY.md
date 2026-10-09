# Memory seeds for Theta Vantage Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Full Theta Vantage MCP catalog: get_stock_quote, get_option_chain, get_expirations, get_greek_exposure, get_greek_heatmap, get_gamma_profile, get_options_flow, get_market_tide, get_price_history, get_fundamentals, get_news, get_earnings_calendar, get_max_pain, get_intraday_greeks, get_iv_rank, get_price_distribution, get_indicators, get_key_levels, get_options_value, get_wheel_strategy, get_strike_recommendations, get_income_projections, get_options_strategy, search_x, get_x_user, get_x_user_pos
- **profile**: Ticker-story stack: get_stock_quote, then get_greek_heatmap / get_gamma_profile / get_key_levels, then get_options_flow (filtered), then get_iv_rank and get_market_tide. Cite ticker, expiry, spot, and levels. Inform only, never a ticket.
- **log**: Theta Vantage market data is a custom MCP and does not ship with this template. Traders connect it themselves.
- **log**: On first run, try the Theta Vantage MCP. If it is missing or calls fail, send the trader to create a Pro API key at thetavantage.com (docs: thetavantage.com/public-docs/mcp). Collect the key only in a hidden field, never in chat. Attach https://thetavantage.com/api/mcp. If still disconnected, say so and do not invent numbers.
