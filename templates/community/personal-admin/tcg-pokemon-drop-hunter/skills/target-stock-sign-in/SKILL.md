---
name: target-stock-sign-in
description: "Use for live per-store Target stock, pickup status or price for Pokemon TCG sealed products; Target sign-in/store change; or mapping a set name to TCINs."
---

# Target: sign-in, store, search, live stock

Headless script first. Browser on demand only. Recommend-only.

ZIP/radius from `/workspace/bots/tcg-pokemon-drop-hunter/state.db` settings. Never hardcode. Never store 2885.

```
python3 /workspace/bots/tcg-pokemon-drop-hunter/scripts/stock_check.py --from-db --no-nearby-api --zip <settings.location_zip> --radius <settings.radius_miles> --json
```

Use `--no-nearby-api` (nearby_stores often 435). Label CONFIRMED (direct retailer check) with MT time. On 435/captcha: BLOCKED, no retry.
