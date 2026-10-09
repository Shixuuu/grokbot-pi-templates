---
name: trading-bot-morning-health-check
description: "Use this when starting the day or asking whether the local paper options bot stack is healthy."
---

# Trading bot morning health check

## Goal
Confirm the local paper trading bot stack is alive and report a short status suitable for chat.

## Steps
1. Locate the project root (folder like `odte-alpaca-telegram-bot`). Confirm `.env` exists but never print secrets.
2. Check processes: trading bot, Streamlit tracker (port 8501 if used), public tunnel if the user relies on a phone URL.
3. Read simulated cash-account state from SQLite (`data/trades.db` table `cash_account` if present).
4. Tail recent bot logs (filter tokens/API keys/secret URLs).
5. Optional paper-broker account ping — sizing uses simulated settled cash, not broker equity.
6. Reply with checklist: Bot / Tracker / Tunnel / Settled / Unsettled / Open debit / Last signal / Blockers.

## Do not
- Place live orders or flip `LIVE_TRADING`
- Paste API keys, bot tokens, or secret-bearing URLs
