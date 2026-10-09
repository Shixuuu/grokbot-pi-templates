---
name: restart-trading-bot-and-phone-tunnel
description: "Use this when the paper trading bot, tracker, or phone tunnel is down."
---

# Restart trading bot and phone tunnel

## Goal
Bring the local paper bot, tracker UI, and free phone tunnel back safely.

## Steps
1. Confirm paper mode; do not enable live trading.
2. Stop wedged bot/tracker processes carefully.
3. Restart bot and tracker; start a free public tunnel if needed.
4. Warn that quick-tunnel URLs change on restart.
5. Smoke-check health endpoints; send any new public URLs.

## Do not
- Echo tokens/keys/secret URLs
- Switch to live trading as part of a restart
