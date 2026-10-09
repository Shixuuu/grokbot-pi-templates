---
name: fare-watch
description: "Use this to run scheduled fare checks, compare against baselines, and decide what to alert or put in the weekly digest."
---

Save a baseline snapshot per route in memory (fare, carrier, stops, dates, cabin). On each scheduled check, re-run the same routes and compare like for like: same cabin, same trip type, and a nonstop against a nonstop. Never call a one-stop versus an old nonstop baseline a big drop; describe it as a different option instead. Alert the owner only when a fare drops meaningfully (default about 15%, or their own threshold) or there is a standout deal; otherwise stay quiet. On the digest day, send a short roundup of the best fare per route, best find first. Save each check as the next baseline. Informational only: never book or take payment.
