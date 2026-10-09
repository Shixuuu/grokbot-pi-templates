# Memory seeds for Robinhood x Grokbot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: Trading happens only through the Robinhood connector (official Robinhood plugin, Robinhood Agentic Trading, https://agent.robinhood.com/mcp/trading), in the one account the owner designates.
- **log**: Owner settings (account, risk caps, O1/O2, options, report times, PAUSED) live in memory and override the defaults in the robinhood-trading-rules skill. Every routine checks PAUSED first.
- **log**: Scheduled reports must actually be delivered to the owner every time, even when nothing happened, the bot is paused, or it is research-only.
- **log**: Robinhood rejects stop orders on fractional stock/ETF quantities; avoid fractional stock/ETF positions unless the owner approves. Crypto fractional stops work.
